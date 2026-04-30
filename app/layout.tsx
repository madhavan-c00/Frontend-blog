import type { Metadata } from "next";
import { inter, jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobHub | Find Jobs, Master Interviews & Grow Your Career",
  description: "The premier job platform for freshers. Discover verified job openings, master company-specific interview questions, and build the skills you need to get hired.",
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
      <body className="font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
