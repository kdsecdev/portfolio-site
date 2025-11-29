"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { CodeBlock } from "./CodeBlock";
import { GlitchyTitle } from "./GlitchyTitle";
import { TypewriterEffect } from "./TypewriterEffect";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <SectionWrapper id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[90vh]">
      <div ref={targetRef}>
        {/* Left Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <GlitchyTitle />
          <TypewriterEffect
            text="Welcome to my portfolio! I'm Caleb."
            delay={0.5}
            speed={70}
            className="mt-4 text-2xl font-bold font-display text-text-primary"
          />
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.7 + ("Welcome to my portfolio! I'm Caleb.".length * 70) / 1000 },
              },
            }}
            className="mt-4 text-lg text-text-primary max-w-lg"
          >
            Transforming innovative concepts into high-performance, pixel-perfect web experiences.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.9 + ("Welcome to my portfolio! I'm Caleb.".length * 70) / 1000 },
              },
            }}
            className="mt-8 flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md"
            >
              See My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div style={{ y }} className="hidden md:block">
        <CodeBlock />
      </motion.div>
    </SectionWrapper>
  );
};


