'use client';
import { useAppContext } from '@/app/(auth)/context';
import DarkMode from '@/components/DarkMode';
import Logo from '@/components/Logo';
import UserItem from '@/components/UserItem';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user } = useAppContext();
  const router = useRouter();
  return <header className="px-4 py-3 border-b dark:border-neutral-800 w-full flex items-center justify-between">
    <div className="flex gap-6 items-center">
      <Logo text={true} />
    </div>
    <div className="flex gap-2 items-center">
      <DarkMode />
      <UserItem {...{ user, onClick: () => router.push('/profile') }} />
    </div>
  </header>;
}