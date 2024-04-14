import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RD-INSTA",
  description: "insta post reels downloader",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Icon for different devices */}
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />

        {/* Manifest file for web app */}
        <link rel="manifest" href="icons/site.webmanifest" />

        {/* Mask icon */}
        <link rel="mask-icon" href="icons/favicon-32x32.png" color="#5bbad5" />

        {/* Meta tags for theme color */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
