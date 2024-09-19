'use client';
import { useAppContext } from '@/app/(auth)/context';
import ButtonComponent from '@/components/ButtonComponent';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { useHelpers } from '@/hooks/useHelpers';
import clientSupabase from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const saveUser = async ({ metadata, setLoading, setUser }: any) => {
  try {
    if (setLoading) setLoading(true);
    const { data, error } = await clientSupabase
      .auth
      .updateUser({
        data: {
          ...metadata
        }
      })

    if (data) {
      if (setUser) {
        const { user } = data;
        setUser(user);
      }
      toast.success('Profile saved successfully!')
      return data;
    }
  } catch (error: any) {
    toast.error('Sorry, something wrong happened. Please try again.')
    throw new Error(error);
  } finally {
    if (setLoading) setLoading(false);
  }
};


export default function ProfileGeneral() {
  const { user, setUser } = useAppContext();
  const { loading, setLoading } = useHelpers();
  const [data, setData] = useState<any>({
    display_name: "",
    username: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setData({
      display_name: "",
      username: ""
    })
  }, [])

  useEffect(() => {
    if (user) {
      const { user_metadata } = user;
      setData(user_metadata)
    }
  }, [user]);

  return <div className="grid gap-6">
    <Card className="card">
      <CardHeader>
        <CardTitle>Display name</CardTitle>
        <CardDescription>Please enter your full name, or a display name you are comfortable with.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input {...{
          type: "text",
          name: "display_name",
          value: data?.display_name || '',
          onChange: handleChange
        }} />
      </CardContent>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          label: "Save",
          onClick: () => saveUser({ setLoading, metadata: data }),
          setUser
        }} />
      </CardFooter>
    </Card>
    <Card className="card">
      <CardHeader>
        <CardTitle>Username</CardTitle>
        <CardDescription>This is your URL namespace. We will limit the characters to 30, with no spaces or special characters allowed.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          name="username"
          value={data?.username || ''}
          maxLength={30}
          onChange={(e: any) => {
            const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
            e.target.value = value;
            handleChange(e);
          }}
        />
      </CardContent>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          label: "Save",
          onClick: () => saveUser({ setLoading, metadata: data }),
          setUser
        }} />
      </CardFooter>
    </Card>
  </div>
}