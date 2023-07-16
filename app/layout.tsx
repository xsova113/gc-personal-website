import NavBar from "@/components/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/Footer";

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
        className={`${robotoMono.className} dark:bg-slate-900 bg-slate-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
