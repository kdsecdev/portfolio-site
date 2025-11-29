"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal } from "./Terminal";
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
    <SectionWrapper
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
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
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
            className="text-5xl md:text-7xl font-bold font-display text-white"
          >
            DEV:KD{" "}
            <span className="gradient-text">
              Crafting secure, scalable, and engaging digital experiences.
            </span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
            className="mt-4 text-base text-text-primary max-w-lg"
          ></motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              },
            }}
            className="mt-8 flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-neon-blue text-background font-semibold"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-surface/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-surface/20 transition-colors"
            >
              Let's Collaborate
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div style={{ y }} className="hidden md:block">
        <Terminal />
      </motion.div>
    </SectionWrapper>
  );
};
