import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import "../globals.scss";
import { AppWrapper } from "./context";

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
        <body>
          <AppWrapper>
            {children}
          </AppWrapper>
        </body>
      </html>
    </ViewTransitions>
  );
};
