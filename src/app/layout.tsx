import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", ],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashwin Nyamainashe — Software Engineer",
  description:
    "Full-stack software engineer specialising in React, Laravel, Flutter and cross-platform web apps.",
  keywords: ["software engineer", "full stack", "react", "laravel", "flutter", "ashwin"],
  openGraph: {
    title: "Ashwin Nyamainashe — Software Engineer",
    description: "Delivering innovative software solutions with precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={syne.variable}>
      <body className={syne.className}>{children}</body>
    </html>
  );
}