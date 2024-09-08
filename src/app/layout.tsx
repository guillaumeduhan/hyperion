import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import "./globals.scss";

export const metadata: Metadata = {
  title: "Hyperion Template by @codewithguillaume",
  description: "Generated with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ViewTransitions>
  );
}
