'use client';
import { useAppContext } from '@/app/context';
import DarkMode from '@/components/DarkMode';
import Login from '@/components/Login';
import Logo from '@/components/Logo';
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import UserItem from '@/components/UserItem';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
Button

export default function Header() {
  const { user } = useAppContext();
  const router = useRouter();
  return <header className="p-2 lg:p-4 dark:border-neutral-800 w-full flex items-center justify-between">
    <div className="flex gap-6 items-center">
      <Logo {...{ user, text: true }} />
    </div>
    <div className="flex gap-2 items-center">
      <DarkMode />
      {user && <UserItem {...{ user, onClick: () => router.push('/profile') }} />}
      {!user &&
        <Dialog>
          <DialogTrigger asChild>
            <Button>Login / Signup</Button>
          </DialogTrigger>
          <DialogContent className="dark:border-neutral-800">
            <Login />
          </DialogContent>
        </Dialog>
      }
    </div>
  </header>;
}