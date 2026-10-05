import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { asset } from "../lib/asset";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Absolute URLs for share previews; override with NEXT_PUBLIC_SITE_URL if the site moves to a custom domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashwin2926.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ashwin Nyamainashe - Software Engineer",
  description:
    "Full-stack software engineer crafting premium web platforms and mobile apps with React, Next.js, Laravel and Flutter.",
  keywords: ["software engineer", "full stack", "react", "next.js", "laravel", "flutter", "ashwin"],
  openGraph: {
    title: "Ashwin Nyamainashe - Software Engineer",
    description: "Premium web platforms and mobile apps, built with precision and craft.",
    type: "website",
    images: [{ url: asset("/og.png"), width: 1200, height: 630, alt: "Ashwin Nyamainashe, Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Nyamainashe - Software Engineer",
    description: "Premium web platforms and mobile apps, built with precision and craft.",
    images: [asset("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
