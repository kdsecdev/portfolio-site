"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

// HCI: Hick's Law — fewer options = faster decisions.
// Only the 4 primary navigation destinations, no icons (text alone is faster to scan).
const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const DynamicIslandNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle border reinforcement after user scrolls — gives context of position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999]">
        <motion.div
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          animate={{ width: isExpanded ? 460 : 200 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className={`flex items-center px-2 py-2 rounded-full border bg-black/85 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden transition-colors duration-300 ${
            scrolled ? "border-white/15" : "border-white/8"
          }`}
        >
          {/* Logo — always visible, Fitts's Law: large enough tap target */}
          <Link href="/" className="shrink-0">
            <div className="w-9 h-9 bg-white/6 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all">
              <span className="font-display font-bold text-xs text-white tracking-wide">KD</span>
            </div>
          </Link>

          {/* Center: nav links (desktop) OR status dot (collapsed) */}
          <div className="hidden md:flex flex-1 items-center justify-center overflow-hidden px-2">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.nav
                  key="nav"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-1"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-1.5 rounded-full text-white/55 hover:text-white hover:bg-white/8 transition-all whitespace-nowrap text-sm font-medium tracking-tight"
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.nav>
              ) : (
                <motion.div
                  key="status"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse shrink-0" />
                  <span className="text-[11px] text-white/45 font-medium whitespace-nowrap">Available</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Hire Me CTA (desktop) — primary action always visible */}
          <div className="hidden md:block shrink-0 ml-auto">
            <a
              href="#services"
              className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile: hamburger only */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden ml-auto w-9 h-9 rounded-full hover:bg-white/8 flex items-center justify-center transition-colors"
            aria-label="Open menu"
          >
            <Menu size={18} className="text-white/70" />
          </button>
        </motion.div>
      </div>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
