"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

// HCI: Hick's Law — fewer options = faster decisions.
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
  const islandControls = useAnimation();
  const glowControls = useAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The island morph animation sequence played before menu opens
  const handleMobileTap = useCallback(async () => {
    if (isMobileMenuOpen) return; // already open — only X closes it

    // 1. Quick squish-then-burst on the island
    await islandControls.start({
      scale: [1, 0.92, 1.06, 1],
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    });

    // 2. Glow ring burst (parallel, non-blocking)
    glowControls.start({
      opacity: [0, 0.7, 0],
      scale: [0.95, 1.6],
      transition: { duration: 0.45, ease: "easeOut" },
    });

    // Small pause so the animation settles visually
    await new Promise((r) => setTimeout(r, 60));

    setIsMobileMenuOpen(true);
  }, [isMobileMenuOpen, islandControls, glowControls]);

  return (
    <>
      {/* ─── Positioning wrapper ─── */}
      <div className="fixed top-5 sm:top-6 left-1/2 -translate-x-1/2 z-[9999] flex justify-center">
        {/* Glow ring burst — absolutely positioned behind the island */}
        <motion.div
          animate={glowControls}
          initial={{ opacity: 0, scale: 0.95 }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,133,0.45) 0%, transparent 70%)",
          }}
        />

        {/* ─── The island pill ─── */}
        <motion.div
          animate={islandControls}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          style={{ maxWidth: "calc(100vw - 2rem)" }}
          className={`relative flex items-center px-2 py-2 rounded-full border bg-black/85 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden transition-colors duration-300 ${
            isMobileMenuOpen
              ? "border-[#00FF85]/40"
              : scrolled
              ? "border-white/15"
              : "border-white/8"
          }`}
        >
          {/* ─── Desktop: animated width expand ─── */}
          <motion.div
            className="hidden md:flex items-center w-full"
            animate={{ width: isExpanded ? 460 : 200 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <div className="w-9 h-9 bg-white/6 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all">
                <span className="font-display font-bold text-xs text-white tracking-wide">
                  KD
                </span>
              </div>
            </Link>

            {/* Center: nav links OR status */}
            <div className="flex-1 flex items-center justify-center overflow-hidden px-2">
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
                    <span className="text-[11px] text-white/45 font-medium whitespace-nowrap">
                      Available
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hire Me CTA */}
            <div className="shrink-0 ml-auto">
              <a
                href="#services"
                className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          {/* ─── Mobile: compact pill — logo + menu button ─── */}
          <div className="flex md:hidden items-center gap-3 px-1">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <div className="w-9 h-9 bg-white/6 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all">
                <span className="font-display font-bold text-xs text-white tracking-wide">
                  KD
                </span>
              </div>
            </Link>

            {/* Availability status */}
            <div className="flex items-center gap-1.5 flex-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse shrink-0" />
              <span className="text-[11px] text-white/40 font-medium whitespace-nowrap">
                Available
              </span>
            </div>

            {/* Animated menu / X toggle */}
            <motion.button
              onClick={handleMobileTap}
              whileTap={{ scale: 0.88 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="w-9 h-9 rounded-full hover:bg-white/8 active:bg-white/12 flex items-center justify-center transition-colors relative"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={17} className="text-[#00FF85]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={17} className="text-white/70" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
