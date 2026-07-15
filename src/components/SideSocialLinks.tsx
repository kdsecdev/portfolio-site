"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Icon8 = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} width={24} height={24} className="w-6 h-6 object-contain" loading="lazy" />
);

const socialLinks = [
  {
    href: "https://github.com/kdsecdev",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/github.png" alt="GitHub" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/caleb-botchway-3b5aa7265",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/x9z_dev",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />,
    label: "Instagram",
  },
  {
    href: "https://x.com/devkd999",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="Twitter / X" />,
    label: "Twitter / X",
  },
];

export const SideSocialLinks = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
    >
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          className="p-2.5 rounded-full bg-surface/50 backdrop-blur-sm border border-white/10 hover:border-accent-primary/40 hover:bg-accent-primary/10 hover:scale-110 transition-all duration-200"
        >
          {link.icon}
        </Link>
      ))}
    </motion.div>
  );
};
