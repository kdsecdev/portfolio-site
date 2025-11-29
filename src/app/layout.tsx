import type { Metadata } from "next";
import "./globals.css";
import { DynamicIslandNav } from "@/components/DynamicIslandNav";
import { CustomCursor } from "@/components/CustomCursor";
import { SideSocialLinks } from "@/components/SideSocialLinks";
import { ClientOnlyFloatingShapes } from "@/components/ClientOnlyFloatingShapes";

export const metadata: Metadata = {
  title: "Caleb (DEV:KD) - Portfolio",
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
        <ClientOnlyFloatingShapes />
        <CustomCursor />
        <DynamicIslandNav />
        <SideSocialLinks />
        {children}
      </body>
    </html>
  );
}
