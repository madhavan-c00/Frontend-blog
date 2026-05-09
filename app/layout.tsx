import type { Metadata } from "next";
import { inter, jakarta } from "./fonts";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreshersFlow | Learn, Prepare & Get Hired",
  description: "The ultimate career platform for IT freshers in India. Discover daily AI-curated jobs, company-specific interview guides, career roadmaps, and blog articles to land your first IT job.",
  keywords: "IT jobs for freshers, fresher jobs India, software engineer fresher, TCS hiring, Infosys freshers, interview preparation freshers 2026",
  authors: [{ name: "FreshersFlow" }],
  openGraph: {
    title: "FreshersFlow | Learn, Prepare & Get Hired",
    description: "Daily AI-curated IT jobs and career resources for freshers in India.",
    type: "website",
    siteName: "FreshersFlow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense - Replace ca-pub-XXXXXXXXXXXXXXXX with your actual Publisher ID */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </head>
      <body className="font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
