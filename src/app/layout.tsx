import type { Metadata } from "next";
import "./globals.css";
import { DynamicIslandNav } from "@/components/DynamicIslandNav";
import { SideSocialLinks } from "@/components/SideSocialLinks";
import { Interactive3DBackground } from "@/components/Interactive3DBackground";
import { PaystackDonateButton } from "@/components/PaystackDonateButton";

const siteUrl = "https://iamdevkd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iamdevkd — Caleb Botchway | Full-Stack & Systems Developer",
    template: "%s | iamdevkd",
  },
  description:
    "Portfolio of Botchway Caleb Kwabena Odikro (Dev KD) — full-stack and systems developer in Accra, Ghana. Building web, mobile, and AI solutions with Flutter, FastAPI, Next.js, Python, Java, and C++.",
  keywords: [
    "DevKD",
    "iamdevkd",
    "Caleb Botchway",
    "Botchway Caleb Kwabena Odikro",
    "Central University",
    "Ghana developer",
    "full stack developer",
    "Flutter developer",
    "FastAPI",
    "Python developer Ghana",
    "Accra Transit Optimizer",
    "BridgeLabs AI Hackathon",
    "software engineer",
  ],
  authors: [{ name: "Caleb Botchway", url: siteUrl }],
  creator: "Caleb Botchway",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "iamdevkd — Caleb Botchway | Full-Stack & Systems Developer",
    description:
      "Full-stack developer crafting secure, high-performance digital experiences. C++, Python, Flutter, Next.js & more.",
    siteName: "iamdevkd.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iamdevkd — DevKD Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iamdevkd — Caleb Botchway | Full-Stack & Systems Developer",
    description:
      "Full-stack developer crafting secure, high-performance digital experiences.",
    creator: "@devkd999",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Interactive3DBackground />
        <DynamicIslandNav />
        <SideSocialLinks />
        <PaystackDonateButton />
        {children}
      </body>
    </html>
  );
}
