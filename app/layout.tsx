import type { Metadata } from "next";
import { inter, jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechHub | Master Tech Stacks, Coding & Interviews",
  description: "Advanced learning platform for developers. Explore deep-dive blogs, practice interview questions, and solve coding challenges for any technology.",
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
