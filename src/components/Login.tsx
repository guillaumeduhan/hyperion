
import ButtonComponent from "@/components/ButtonComponent";
import Logo from "@/components/Logo";
import { Input } from '@/components/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useHelpers } from "@/hooks/useHelpers";
import clientSupabase from '@/lib/supabase/client';
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

export function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export const OTP: FC<{
  email: string;
  resendCode: any;
  autoValidate?: boolean;
}> = ({ email, resendCode }) => {
  const [value, setValue, remove] = useLocalStorage('token');
  const [token, setToken] = useState("");
  const { loading, setLoading, error, setError } = useHelpers();
  const router = useRouter();

  const verifyCode = async () => {
    try {
      setLoading(true);

      let { data, error }: any = await clientSupabase
        .auth
        .verifyOtp({
          email,
          token,
          type: 'email'
        })

      if (error) return setError('Sorry an error occurred. Please try again later.');
      const { session: { access_token } } = data;
      setValue(access_token);
      router.push('/dashboard');
    } catch (error: any) {
      setError("An unexpected error occurred. Please try again.");
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="grid gap-4">
      <header className="text-center">
        <h2 className="mb-6 text-lg font-[600] text-center">Verification</h2>
        <p className="text-neutral-500">
          We have sent a one-time use code to your email {email}.
        </p>
      </header>
      <div className="mx-auto">
        <InputOTP maxLength={6} onChange={(v) => setToken(v)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      {error && <div className="alert alert--danger">{error}</div>}
      <footer className="grid items-center gap-2">
        <ButtonComponent
          onClick={() => verifyCode()}
          loading={loading}
          disabled={token.length < 6}
          className="gradient--allo--bg"
        >
          Verify Code
        </ButtonComponent>
        <ButtonComponent {...{
          label: 'Resend code',
          loading,
          onClick: () => resendCode(),
          variant: "link"
        }} />
      </footer>
    </div>
  );
};


const Login = () => {
  const { loading, setLoading, error, setError } = useHelpers();
  const [otp, setOtp] = useState(false);
  const [create, setCreate] = useState(false);
  const [user, setUser] = useState({
    email: '',
  });

  const signIn = async () => {
    try {
      const { email } = user;
      if (!validateEmail(email)) return setError('Please enter a valid email.')
      setLoading(true);

      let { data, error }: any = await clientSupabase
        .auth
        .signInWithOtp({
          email
        })

      error ? setError(error.error) : setOtp(true);

    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full px-2">
      <header className="flex items-center justify-center pb-4">
        <Logo />
      </header>
      <div className="bg-white rounded-xl px-8 py-6 shadow-lg">
        {otp && <OTP {...{
          email: user.email,
          resendCode: () => signIn()
        }} />}
        {!otp && <div className="grid gap-2">
          <div>
            <h2 className="mb-6 text-lg font-[600] text-center">Welcome</h2>
            <p className="text-base text-neutral-400 text-center">If you are not yet registered, an account will be created for you.</p>
          </div>
          <div className="grid gap-6">
            <div className="grid w-full gap-4">
              <div className="grid gap-1">
                <label htmlFor="email">
                  Email
                </label>
                <Input
                  type="text"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Enter email"
                />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm text-center bg-red-50/50 rounded py-1">{error}</div>}
            <ButtonComponent {...{
              label: !create ? "Login" : "Create a new account",
              loading,
              onClick: () => signIn()
            }} />
          </div>
        </div>}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return <div className="w-full h-screen flex items-center justify-center bg-neutral-50">
    <Login />
  </div>
}
