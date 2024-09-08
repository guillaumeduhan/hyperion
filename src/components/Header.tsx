'use client';
import DarkMode from '@/components/DarkMode';
import { Dropdown } from '@/components/Dropdown';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import UserItem from '@/components/UserItem';
import { useAppContext } from '@/contexts/user';
import { useRouter } from 'next/navigation';
import { useCookie } from "react-use";

export default function Header() {
  const { user } = useAppContext();
  const [value, updateCookie, deleteCookie] = useCookie("hyperion-cookie");
  const router = useRouter();
  return <header className="px-4 py-3 border-b w-full flex items-center justify-between">
    <div className="flex gap-6 items-center">
      <Logo text={true} />
      <Menu />
    </div>
    <div className="flex gap-2 items-center">
      <DarkMode />
      <Dropdown {...{
        button: <UserItem {...{ user }} />,
        items: [{
          title: "Logout",
          action: () => {
            deleteCookie()
            router.push('/')
          }
        }]
      }} />
    </div>
  </header>;
}