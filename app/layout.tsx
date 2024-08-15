import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/providers/ToastProvider";
import { ConfettiProvider } from "@/components/providers/ConfettiProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tournamax",
  description: "Tournamax Topic List Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className="main-gradient">
          <main>
            <ConfettiProvider />
            <ToastProvider />
            <Navbar />
            {children}
          </main>
        </body>
      </html>
  );
}
