"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, User, Briefcase, Contact, Wrench, Trophy, Heart } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "About", href: "#about", icon: <User size={20} />, accent: "#00FF85" },
  { name: "Work", href: "#work", icon: <Briefcase size={20} />, accent: "#00F0FF" },
  { name: "Services", href: "#services", icon: <Wrench size={20} />, accent: "#A855F7" },
  { name: "Achievements", href: "#achievements", icon: <Trophy size={20} />, accent: "#F59E0B" },
  { name: "Contact", href: "#contact", icon: <Contact size={20} />, accent: "#FF4466" },
];

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100]"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Panel slides from right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            className="absolute top-0 right-0 h-full w-72 bg-[#0a0a0a] border-l border-white/8 flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-white">KD</span>
                </div>
                <span className="font-display font-bold text-sm text-white">iamdevkd</span>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-white/70" />
              </motion.button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-4 py-8 space-y-1 overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.05 + i * 0.06, duration: 0.3, ease: "easeOut" },
                  }}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: `${item.accent}12`,
                      borderColor: `${item.accent}25`,
                      color: item.accent,
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className="font-display font-semibold text-lg text-white/80 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
              className="px-6 py-6 border-t border-white/8 space-y-3"
            >
              {/* Availability badge */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#00FF85]/5 border border-[#00FF85]/15">
                <div className="w-2 h-2 rounded-full bg-[#00FF85] animate-pulse" />
                <span className="text-xs font-mono text-[#00FF85]">Available for work</span>
              </div>
              {/* Support button */}
              <a
                href="https://paystack.shop/pay/devkd-support"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00FF85]/30 hover:bg-[#00FF85]/5 transition-all text-sm text-white/60 hover:text-white"
              >
                <Heart size={14} className="text-[#00FF85]" />
                <span>Support DevKD</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
