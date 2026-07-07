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
    "Portfolio of Caleb (DevKD) — a full-stack and systems developer specialising in C++, Python, Flutter, Next.js, and secure high-performance applications. Based in Ghana 🇬🇭.",
  keywords: [
    "DevKD",
    "iamdevkd",
    "Caleb Botchway",
    "full stack developer",
    "Ghana developer",
    "C++ developer",
    "Flutter developer",
    "Next.js portfolio",
    "backend developer",
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
