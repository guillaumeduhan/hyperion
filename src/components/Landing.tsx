import Logo from '@/components/Logo';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircleIcon } from "lucide-react";

const BuyButton = () => {
  return <Button className="flex gap-2">
    <span>Buy for $29</span>
    <ArrowRight className="w-4" />
  </Button>
};

const Header = () => {
  return <header className="flex items-center justify-between py-4 lg:py-8">
    <Logo />
    <div className="flex gap-2">
      <Button variant="link">Login</Button>
      <BuyButton />
    </div>
  </header>
};

const Hero = () => {
  return <div className="hero grid gap-8 lg:gap-24 text-center lg:text-left">
    <div className="grid items-end lg:grid-cols-5 gap-8">
      <div className="grid gap-4 lg:col-span-3">
        <div className="flex justify-start">
          <div className="flex items-center hover:bg-neutral-50 transition cursor-pointer border rounded-full px-4 py-2 bg-white shadow text-start text-sm font-[500] mx-auto lg:mx-0">
            <div>Introducing Hyperion</div>
            <ArrowRight className="h-4" />
          </div>
        </div>
        <h1 className="text-[32px] lg:text-[56px] font-[800]" style={{ lineHeight: 1.24 }}>A Turborepo with Next.js, Nest.js & Supabase</h1>
      </div>
      <div className="grid gap-4 lg:col-span-2">
        <div className="grid gap-4 text-left">
          <h2 className="text-lg text-neutral-400 text-center lg:text-left">Build scalable web applications in 1 minute with Hyperion, a powerful monorepo setup combining Next.js, Nest.js, and Supabase</h2>
        </div>
        <div className="flex justify-start gap-4 mx-auto lg:mx-0">
          <Button variant="outline">Documentation</Button>
          <BuyButton />
        </div>
      </div>
    </div>
    <div className="bg-gray-900 w-full h-[500px] rounded-lg grow bg-cover bg-center" style={{
      // backgroundImage: `url(${bg?.src})`,
    }}></div>
  </div>
};

const Features = () => {
  const list = [
    {
      title: "Dashboard",
      description: "Get all the essential insights on one page in one minute without complexity.",
    },
    {
      title: "Features",
      description: "Track which features of your app are the most or least used.",
    },
    {
      title: "Routes",
      description: "Real-time data on the number of visitors and interactions.",
    },
    {
      title: "Reports",
      description: "Insightful reports with charts that give you a valuable perspective on your business.",
    },
    {
      title: "Privacy",
      description: "Anonymous site measurement with no cookies or personal data collection, compliant with GDPR.",
    },
    {
      title: "Conversions",
      description: "Increase conversions rate with a powerful landing page.",
    },
    {
      title: "Team",
      description: "Share your stats publicly or privately and invite team members.",
    },
    {
      title: "Workspaces",
      description: "Create as many workspaces you need for every project.",
    },
    {
      title: "Developer friendly",
      description: "Easily use our library on JS applications to start tracking.",
    }
  ]

  return <div className="grid gap-12">
    <header className="text-center">
      <h2 className="text-[24px] lg:text-[32px] font-[600]">Features</h2>
    </header>
    <div className="grid md:grid-cols-2 text-center lg:text-left lg:grid-cols-3 gap-6 lg:gap-12 max-w-[1000px] mx-auto">
      {list.map((feature, index) => <div key={index}>
        <CheckCircleIcon className="mb-4 mx-auto lg:mx-0 text-green-500" />
        <h3 className="text-xl lg:text-[20px] font-[600] h-12">{feature.title}</h3>
        <p className="text-neutral-400">{feature.description}</p>
      </div>)}
    </div>
  </div>
};

const Footer = () => {
  return (
    <footer className="grid gap-8 text-gray-400 py-6 lg:py-12 mb-12 rounded-xl text-center">
      <Logo />
      <div>
        <div className="mb-8">Hyperion - powerful monorepo setup combining Next.js, Nest.js, and Supabase</div>
        <ul className="flex justify-center space-x-8 mb-8">
          <li className="hover:text-white">Features</li>
          <li className="hover:text-white">Pricing</li>
          <li className="hover:text-white">FAQ</li>
          <li className="hover:text-white">Privacy Policy</li>
        </ul>
        <p className="text-xs">© 2024 Hyperion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function Landing() {
  return <div className="grid gap-8 lg:gap-12 lg:container mx-auto px-4 lg:px-0">
    <Header />
    <Hero />
    <Features />
    <Footer />
  </div>;
}