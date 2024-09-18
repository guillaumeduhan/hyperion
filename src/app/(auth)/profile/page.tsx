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
import { toast } from 'sonner';

export default function ProfileGeneral() {
  const saveUser = async () => {
    toast.success('Profile successfully saved');
  }
  return <div className="grid gap-6">
    <Card className="card">
      <CardHeader>
        <CardTitle>Display name</CardTitle>
        <CardDescription>Please enter your full name, or a display name you are comfortable with.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input />
      </CardContent>
      <CardFooter>
        <ButtonComponent onClick={() => saveUser()} label="Save" />
      </CardFooter>
    </Card>
    <Card className="card">
      <CardHeader>
        <CardTitle>Username</CardTitle>
        <CardDescription>This is your URL namespace. We will limit the characters to 30, with no spaces or special characters allowed.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          maxLength={30}
          onChange={(e: any) => {
            const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
            e.target.value = value;
            console.log(value)
          }} />
      </CardContent>
      <CardFooter>
        <ButtonComponent onClick={() => saveUser()} label="Save" />
      </CardFooter>
    </Card>
  </div>
}