import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul className="w-full flex justify-evenly p-7">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/mortgage-calculator">Mortgage Calculator</Link>
            </li>
            <li>
              <Link href="/start">Start</Link>
            </li>
          </ul>
        </nav>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
