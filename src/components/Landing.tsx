import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'next-view-transitions';

const BuyButton = () => {
  return <Button className="flex gap-2">
    <span>Get access now</span>
    <ArrowRight className="w-4" />
  </Button>
};

const Hero = () => {
  return <div className="grow flex items-center justify-center">
    <div className="grid gap-4 text-center my-auto">
      <h1 className="text-[32px] lg:text-[56px] font-[800]" style={{ lineHeight: 1.24 }}>A powerful Next.js & Supabase template</h1>
      <div className="grid gap-4 text-left">
        <h2 className="text-lg text-neutral-400 text-center">Build scalable web applications in 1 minute with Hyperion, a powerful repo setup combining Next.js & Supabase</h2>
      </div>
      <div className="flex justify-start gap-4 mx-auto">
        <BuyButton />
      </div>
    </div>
  </div>
};

const Footer = () => {
  return (
    <footer className="grid gap-2 text-gray-400 text-center p-2 lg:p-4">
      <ul className="flex justify-center gap-2">
        <Link href="">Features</Link>
        <Link href="">Pricing</Link>
        <Link href="">FAQ</Link>
        <Link href="">Privacy Policy</Link>
      </ul>
      <p className="text-xs">© 2024 Hyperion Template. All rights reserved.</p>
    </footer>
  );
};

export default function Landing() {
  return <div className="flex flex-col min-h-screen">
    <Hero />
    <Footer />
  </div>;
}