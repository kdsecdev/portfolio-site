"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal } from "./Terminal";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { InteractiveHeroDecoration } from "./InteractiveHeroDecoration";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <SectionWrapper
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-dvh px-4 overflow-hidden pt-32 md:pt-20"
    >
      <div ref={targetRef} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Subtle Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] -z-10" />

        <InteractiveHeroDecoration />

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center space-y-6 max-w-3xl"
        >

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter text-white leading-[1] mb-6">
            LOGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">SECURED.</span>
            <br />
            DESIGN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00F0FF]/50">ELEVATED.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary/80 max-w-2xl mx-auto font-medium leading-relaxed">
            I craft high-performance digital experiences that merge robust security with top-tier aesthetics.
            <br className="hidden md:block"/> No compromises.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#work"
              className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2"
            >
               View Projects
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/5 transition-all border border-white/10"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Terminal or Visual Element */}
        <motion.div 
          style={{ y }} 
          className="mt-20 w-full max-w-4xl glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

