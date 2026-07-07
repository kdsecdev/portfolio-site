"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Coffee, Zap, Star } from "lucide-react";

const PAYSTACK_LINK = "https://paystack.shop/pay/devkd-support";

const tiers = [
  {
    icon: <Coffee size={20} />,
    label: "Buy me a coffee",
    amount: "GHS 10",
    sub: "A small token of appreciation",
    href: PAYSTACK_LINK,
  },
  {
    icon: <Zap size={20} />,
    label: "Support my work",
    amount: "GHS 50",
    sub: "Help me build more cool stuff",
    href: PAYSTACK_LINK,
  },
  {
    icon: <Star size={20} />,
    label: "Become a patron",
    amount: "GHS 150",
    sub: "Champion of the dev life 🏆",
    href: PAYSTACK_LINK,
  },
];

export const PaystackDonateButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[9990] flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl border border-[#00FF85]/30 bg-black/90 backdrop-blur-xl text-white text-sm font-semibold group hover:border-[#00FF85]/60 transition-all"
        aria-label="Support DevKD via Paystack"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#00FF85]/15 text-[#00FF85] group-hover:scale-110 transition-transform">
          <Heart size={14} fill="currentColor" />
        </span>
        <span className="hidden sm:inline text-[#00FF85]">Support Me</span>
        {/* Glow ring */}
        <span className="absolute inset-0 rounded-full ring-2 ring-[#00FF85]/10 animate-ping pointer-events-none" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9991]"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="fixed bottom-20 right-6 z-[9992] w-80 rounded-2xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative p-5 pb-4 border-b border-white/8 bg-gradient-to-br from-[#00FF85]/8 to-transparent">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                >
                  <X size={14} className="text-white/60" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00FF85]/15 flex items-center justify-center">
                    <Heart size={18} className="text-[#00FF85]" fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">Support DevKD</p>
                    <p className="text-xs text-text-secondary mt-0.5">Powered by Paystack 🇬🇭</p>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                  If my work has helped or inspired you, consider buying me a coffee. Every bit fuels the next project! ☕
                </p>
              </div>

              {/* Tiers */}
              <div className="p-4 space-y-2.5">
                {tiers.map((tier) => (
                  <a
                    key={tier.label}
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/8 hover:border-[#00FF85]/40 hover:bg-[#00FF85]/5 transition-all group cursor-pointer"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#00FF85]/10 border border-[#00FF85]/20 flex items-center justify-center text-[#00FF85] group-hover:scale-110 transition-transform shrink-0">
                      {tier.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{tier.label}</p>
                      <p className="text-xs text-text-secondary truncate">{tier.sub}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00FF85] shrink-0">
                      {tier.amount}
                    </span>
                  </a>
                ))}

                <a
                  href={PAYSTACK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-1 py-3 rounded-xl bg-[#00FF85] text-black text-sm font-bold hover:bg-[#00FF85]/90 transition-colors"
                >
                  Custom Amount →
                </a>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4 text-center">
                <p className="text-[10px] text-text-secondary/60">
                  Secure payments via Paystack · No account needed
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
