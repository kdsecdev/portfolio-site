"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-4 md:px-12 bg-surface">
      <div className="flex justify-between items-center">
        <p className="text-text-primary">
          &copy; {new Date().getFullYear()} Carlos. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank">
            <Github className="text-text-primary hover:text-white transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="text-text-primary hover:text-white transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="text-text-primary hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};