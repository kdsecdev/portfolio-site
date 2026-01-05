"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, User, Briefcase, Contact } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export const DynamicIslandNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Work", href: "#work", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Contact size={18} /> },
  ];

  return (
    <>
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999]">
        <motion.div
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          animate={{
            width: isExpanded ? 420 : 160,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          className="flex items-center justify-between px-4 py-3 rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20 overflow-visible"
        >
          {/* Logo */}
          <Link href="/">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0 hover:bg-white/10 transition-colors">
              <span className="font-display font-bold text-sm text-white">KD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.nav
                  key="nav"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap text-sm font-medium"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </a>
                  ))}
                </motion.nav>
              ) : (
                <motion.div
                  key="status"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 px-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-gray-400 font-medium">Available</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>
        </motion.div>
      </div>
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
