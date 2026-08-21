"use client";
import { motion } from "framer-motion";
import { Terminal } from "./Terminal";
import { SectionWrapper } from "./SectionWrapper";
import { InteractiveHeroDecoration } from "./InteractiveHeroDecoration";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <SectionWrapper
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[100dvh] max-h-screen px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF6B00]/8 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <InteractiveHeroDecoration />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-7">
        
        {/* Headline — the single focal point */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.02] text-center"
        >
          BUILD FASTER.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-[#FFA726]">
            SHIP SMARTER.
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-white/60 max-w-lg mx-auto text-center leading-relaxed font-sans"
        >
          Full-stack &amp; systems developer based in Ghana 🇬🇭 — crafting secure,
          high-performance web, mobile, and backend systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {/* Primary CTA with Orange glow */}
          <a
            href="#work"
            className="group px-7 py-3.5 rounded-full bg-[#FF6B00] text-black text-sm font-bold hover:bg-[#FF7A00] transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,107,0,0.35)] hover:shadow-[0_0_35px_rgba(255,107,0,0.55)] active:scale-95"
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          {/* Secondary CTA */}
          <a
            href="#services"
            className="px-7 py-3.5 rounded-full border border-white/15 text-white/80 text-sm font-medium hover:border-[#FF6B00]/40 hover:text-white hover:bg-[#FF6B00]/5 transition-all active:scale-95"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Terminal — compact code preview */}
        <motion.div
          className="w-full max-w-xl glass-panel rounded-2xl overflow-hidden border border-white/8 shadow-2xl hidden sm:block mt-1 hover:border-[#FF6B00]/30 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.65, ease: "easeOut" }}
        >
          <Terminal />
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-[18px] h-[18px] border-b-[2px] border-r-[2px] border-[#FF6B00]/40 rotate-45"
        />
      </motion.div>
    </SectionWrapper>
  );
};
