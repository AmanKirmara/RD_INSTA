import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "RD-INSTA",
  description: "Insta post reels downloader",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Head>
        {/* Title */}
        <title>{metadata.title as string}</title>

        {/* Description */}
        <meta name="description" content={metadata.description as string} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Icons for different devices */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

        {/* Manifest file for web app */}
        <link rel="manifest" href="/icons/site.webmanifest" />

        {/* Mask icon */}
        <link rel="mask-icon" href="/icons/favicon-32x32.png" color="#5bbad5" />

        {/* Meta tags for theme color */}
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:type" content="website" />
        {/* Add more Open Graph meta tags as needed */}

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta name="twitter:description" content={metadata.description as string} />
        {/* Add more Twitter meta tags as needed */}

        {/* Canonical link */}
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
