import NavBar from "@/components/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "George Chang",
  description: "George Chang Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/logo-gold.png" />
      </head>
      <body
        className={`${robotoMono.className} max-w-screen-xl dark:bg-neutral-900 bg-white h-full min-w-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NavBar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
