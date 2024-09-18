'use client';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UserItem({
  user,
  onClick
}: any) {
  if (!user) return <></>
  return <div className="cursor-pointer" onClick={onClick}>
    <Avatar className="bg-neutral-900 dark:bg-neutral-800 text-white">
      <AvatarFallback className="capitalize bg-neutral-900 dark:bg-neutral-800">{user.email[0]}</AvatarFallback>
    </Avatar>
  </div>;
}