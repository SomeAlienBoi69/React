import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google'
const inter = Inter({subsets: ['latin']});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className={inter.className}>
          <header>
            <nav>
              <Image src="/logo.png" width={100} height={100} alt="logo"/>
              <ul>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>(c) 2025 Firma XYZ</footer>
        </div>
      </body>
    </html>
  );
}