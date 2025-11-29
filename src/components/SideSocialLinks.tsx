"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, X } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/kdsecdev",
    icon: <Github className="w-6 h-6" />,
  },
  {
    href: "https://www.linkedin.com/in/caleb-botchway-3b5aa7265",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    href: "https://instagram.com/x9z_dev",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    href: "https://x.com/devkd999",
    icon: <X className="w-6 h-6" />,
  },
];

export const SideSocialLinks = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
    >
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className="p-2 rounded-full bg-surface/50 backdrop-blur-sm border border-white/10 text-text-primary hover:text-white hover:bg-accent-primary/50 transition-colors"
        >
          {link.icon}
        </Link>
      ))}
    </motion.div>
  );
};
