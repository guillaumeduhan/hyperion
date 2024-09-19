'use client';
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
import { Link, ViewTransitions } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const PROFILE_OPTIONS = [
  {
    title: "General",
    route: "/profile"
  },
  {
    title: "Invoices",
    route: "/profile/invoices"
  },
  {
    title: "Settings",
    route: "/profile/settings"
  },
];

export default function ProfileLayout({ children }: any) {
  const { selected, setSelected } = useHelpers();
  const pathname = usePathname();

  const saveUser = async () => {
    toast.success('Profile saved successfully!')
  };

  useEffect(() => setSelected(PROFILE_OPTIONS[0]), []);

  return <section>
    <div className="border-b dark:border-neutral-800">
      <header className="container py-4 lg:py-8">
        <h1 className="text-xl lg:text-[24px] font-[800]">Profile</h1>
      </header>
    </div>
    <div className="container py-4 lg:py-8">
      <div className="grid lg:grid-cols-4 items-start gap-8">
        <div className="grid gap-1 lg:col-span-1">
          {PROFILE_OPTIONS.map((item: any, key: number) => <Link href={item.route} key={key} className={`item ${pathname === item.route ? 'selected' : ''}`}>
            {item.title}
          </Link>)}
        </div>
        <div className="lg:col-span-3">
          <ViewTransitions>
            {children}
          </ViewTransitions>
        </div>
      </div>
    </div>
  </section>;
}