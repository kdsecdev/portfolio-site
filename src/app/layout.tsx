import type { Metadata } from "next";
import "./globals.css";
import { DynamicIslandNav } from "@/components/DynamicIslandNav";

import { SideSocialLinks } from "@/components/SideSocialLinks";
import { Interactive3DBackground } from "@/components/Interactive3DBackground";

export const metadata: Metadata = {
  title: "devKD // Digital Artisan",
  description: "A minimal, animated portfolio website.",
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
        {children}
      </body>
    </html>
  );
}
