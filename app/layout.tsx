import type { Metadata } from "next";
import { inter, jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreshersFlow | Learn, Prepare & Get Hired",
  description: "The ultimate career platform for freshers. Master in-demand skills, prepare with company-specific interview questions, and land your dream job.",
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
