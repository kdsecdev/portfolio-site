"use client";
import { ArrowUpRight, Heart, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kdsecdev",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caleb-botchway-3b5aa7265",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.81a1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45 1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45Z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/x9z_dev",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/devkd999",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Email Direct",
    href: "mailto:cbotch5000@gmail.com",
    icon: <Mail size={16} />,
  },
];

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Featured Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV (PDF)", href: "/Caleb_Botchway_CV.pdf" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-[#050505] backdrop-blur-md">
      {/* Top CTA Banner */}
      <div className="border-b border-white/8 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-5 sm:mb-6 tracking-tight text-white">
            Ready to build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-[#FFA726]">
              together?
            </span>
          </h2>
          <p className="text-white/60 mb-8 sm:mb-10 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Whether it&apos;s a high-growth startup, an intelligent system, or contract engineering — let&apos;s build it.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF6B00] text-black font-bold hover:bg-[#FF7A00] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] hover:shadow-[0_0_35px_rgba(255,107,0,0.55)] active:scale-95"
          >
            Let&apos;s Talk <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Footer Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-[#FF6B00]/30 flex items-center justify-center">
                <span className="font-display font-bold text-sm text-white">KD</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-base">iamdevkd</p>
                <p className="font-lcd text-xs text-[#FFA043]">iamdevkd.com</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-sans">
              Full-stack &amp; systems developer based in Ghana 🇬🇭. Building secure,
              high-performance digital experiences.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest mb-4 font-sans">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest mb-4 font-sans">
              Connect
            </p>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-sm font-sans group"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-[#FF6B00]/40 group-hover:bg-[#FF6B00]/10 transition-all duration-200">
                      {link.icon}
                    </span>
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 text-[#FF6B00] transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Caleb Botchway (Dev KD). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://paystack.shop/pay/devkd-support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 hover:text-[#FFA043] transition-colors text-xs font-sans"
            >
              <Heart size={12} className="text-[#FF6B00]" />
              Support Dev KD
            </a>
            <span className="font-lcd text-[11px] text-white/30">
              Built with Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
