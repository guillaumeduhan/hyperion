import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';
import { AppWrapper } from "./context";
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
    <html lang="en">
      <body>
        <ViewTransitions>
          <AppWrapper>
            {children}
          </AppWrapper>
          <Toaster position="top-right" richColors />
        </ViewTransitions>
      </body>
    </html>
  );
};
