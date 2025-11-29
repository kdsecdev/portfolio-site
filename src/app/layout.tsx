import type { Metadata } from "next";
import "./globals.css";
import { DynamicIslandNav } from "@/components/DynamicIslandNav";

export const metadata: Metadata = {
  title: "Carlos - Personal Portfolio",
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
        <DynamicIslandNav />
        {children}
      </body>
    </html>
  );
}
