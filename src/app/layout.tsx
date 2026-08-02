import type { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashwin Nyamainashe - Software Engineer",
  description:
    "Full-stack software engineer specialising in React, Laravel, Flutter and cross-platform web apps.",
  keywords: ["software engineer", "full stack", "react", "laravel", "flutter", "ashwin"],
  openGraph: {
    title: "Ashwin Nyamainashe - Software Engineer",
    description: "Delivering innovative software solutions with precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geist.variable}`}>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
