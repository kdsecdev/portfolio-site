"use client";
import { ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

// icons8 social icons
const Icon8 = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} width={20} height={20} className="w-5 h-5 object-contain" loading="lazy" />
);

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kdsecdev",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/github.png" alt="GitHub" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caleb-botchway-3b5aa7265",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/x9z_dev",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/devkd999",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="Twitter / X" />,
  },
  {
    label: "Email",
    href: "mailto:devkd843@gmail.com",
    icon: <Icon8 src="https://img.icons8.com/fluency/48/gmail-new.png" alt="Email" />,
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-black/40 backdrop-blur-md">
      {/* Top CTA Banner */}
      <div className="border-b border-white/8 py-10 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-4">
            Open to opportunities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-5 sm:mb-6 tracking-tight">
            Ready to build something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] to-[#00F0FF]">
              {" "}great?
            </span>
          </h2>
          <p className="text-text-secondary mb-7 sm:mb-10 text-base sm:text-lg max-w-xl mx-auto">
            Whether it&apos;s a startup idea, a full-scale system, or just a
            conversation — I&apos;m all ears.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all"
          >
            Let&apos;s Talk <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Footer Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="font-display font-bold text-sm text-white">KD</span>
              </div>
              <div>
                <p className="font-display font-bold text-white">iamdevkd</p>
                <p className="text-xs text-text-secondary">iamdevkd.com</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Full-stack &amp; systems developer based in Ghana 🇬🇭. Building secure,
              high-performance digital experiences.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-5">
              Find Me Online
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-text-secondary hover:text-white transition-colors text-sm group"
                  >
                    <span className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-text-secondary text-xs">
            &copy; {new Date().getFullYear()} Caleb Botchway (Dev KD). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://paystack.shop/pay/devkd-support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-[#00FF85] transition-colors text-xs"
            >
              <Heart size={12} className="text-[#00FF85]" />
              Support Dev KD
            </a>
            <p className="text-text-secondary text-xs font-mono">
              Built with Next.js · <span className="text-white">iamdevkd.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
