import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { asset } from "../lib/asset";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${cormorant.variable} ${geist.variable}`}>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
