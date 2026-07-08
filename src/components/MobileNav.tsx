"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X, User, Briefcase, Contact, Wrench, Trophy, Heart } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "About", href: "#about", icon: <User size={20} />, accent: "#00FF85", desc: "Who I am" },
  { name: "Work", href: "#work", icon: <Briefcase size={20} />, accent: "#00F0FF", desc: "My projects" },
  { name: "Services", href: "#services", icon: <Wrench size={20} />, accent: "#A855F7", desc: "What I offer" },
  { name: "Achievements", href: "#achievements", icon: <Trophy size={20} />, accent: "#F59E0B", desc: "Wins & certs" },
  { name: "Contact", href: "#contact", icon: <Contact size={20} />, accent: "#FF4466", desc: "Let's talk" },
];

const panelVariants: Variants = {
  hidden: {
    clipPath: "circle(0% at calc(100% - 2.5rem) 3rem)",
    opacity: 0,
  },
  visible: {
    clipPath: "circle(150% at calc(100% - 2.5rem) 3rem)",
    opacity: 1,
    transition: {
      clipPath: { type: "spring" as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.05 },
    },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 2.5rem) 3rem)",
    opacity: 0,
    transition: {
      clipPath: { type: "spring" as const, stiffness: 320, damping: 35 },
      opacity: { duration: 0.15, delay: 0.05 },
    },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.05 } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 340, damping: 28 },
  },
  exit: {
    opacity: 0,
    x: 20,
    filter: "blur(3px)",
    transition: { duration: 0.15 },
  },
};

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop (blurs page but does NOT close on tap) ── */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-md pointer-events-none"
          />

          {/* ── Fullscreen overlay panel ── */}
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex flex-col bg-[#080808]"
          >
            {/* Ambient gradient mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#00FF85]/8 blur-[80px]" />
              <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-[#00F0FF]/6 blur-[70px]" />
              <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-[#A855F7]/5 blur-[90px]" />
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* ── Top bar ── */}
            <div className="relative flex items-center justify-between px-6 pt-5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <span className="font-display font-bold text-sm text-white">
                    KD
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-white leading-none">
                    iamdevkd
                  </p>
                  <p className="text-[10px] text-white/35 font-mono mt-0.5">
                    caleb botchway
                  </p>
                </div>
              </div>

              {/* Close button — only way to close */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9, rotate: 90 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-10 h-10 rounded-full bg-white/6 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-colors"
                aria-label="Close menu"
              >
                <X size={17} className="text-white/70" />
              </motion.button>
            </div>

            {/* ── Nav Links ── */}
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative flex-1 flex flex-col justify-center px-5 gap-2 py-4"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-4 px-4 py-4 rounded-2xl border border-transparent hover:border-white/8 hover:bg-white/4 active:bg-white/8 transition-all duration-200"
                >
                  {/* Icon box */}
                  <motion.span
                    className="w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 transition-all duration-200 group-hover:scale-105"
                    style={{
                      backgroundColor: `${item.accent}12`,
                      borderColor: `${item.accent}28`,
                      color: item.accent,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.span>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-xl text-white/85 group-hover:text-white transition-colors leading-none">
                      {item.name}
                    </p>
                    <p className="text-xs text-white/30 group-hover:text-white/50 transition-colors mt-1 font-mono">
                      {item.desc}
                    </p>
                  </div>

                  {/* Chevron */}
                  <motion.span
                    className="text-white/20 group-hover:text-white/50 transition-colors shrink-0 text-lg"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </motion.nav>

            {/* ── Bottom footer ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.4 } }}
              exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
              className="relative px-6 pb-8 pt-4 border-t border-white/6 space-y-3"
            >
              {/* Availability */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#00FF85]/5 border border-[#00FF85]/12">
                <div className="w-2 h-2 rounded-full bg-[#00FF85] animate-pulse shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#00FF85] leading-none">
                    Available for work
                  </p>
                  <p className="text-[10px] text-[#00FF85]/50 font-mono mt-0.5">
                    Response within 24–48h
                  </p>
                </div>
              </div>

              {/* Support */}
              <a
                href="https://paystack.shop/pay/devkd-support"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white/4 border border-white/8 hover:border-[#00FF85]/30 hover:bg-[#00FF85]/5 active:scale-[0.98] transition-all text-sm text-white/50 hover:text-white/80"
              >
                <Heart size={14} className="text-[#00FF85]" />
                <span>Support DevKD</span>
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
