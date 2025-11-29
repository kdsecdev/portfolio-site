"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-4 md:px-12 bg-surface">
      <div className="flex justify-center">
        <p className="text-text-primary text-center">
          &copy; {new Date().getFullYear()} Caleb (DEV:KD). All rights reserved.
        </p>
      </div>
    </footer>
  );
};