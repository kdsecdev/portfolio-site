"use client";
import { motion } from "framer-motion";
import { CodeBlock } from "./CodeBlock";

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh] px-4 md:px-12">
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
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
          className="text-5xl md:text-7xl font-bold font-display"
        >
          I build{" "}
          <span className="gradient-text">
            seamless
          </span>{" "}
          web experiences.
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
          }}
          className="mt-4 text-lg text-text-primary"
        >
          Senior Frontend Engineer specializing in React, Next.js, and modern
          web animations.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
          }}
          className="mt-8 flex gap-4"
        >
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold hover:scale-105 transition-transform">
            Get in Touch
          </button>
          <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition-colors">
            See My Work
          </button>
        </motion.div>
      </motion.div>

      {/* Right Column */}
      <div className="hidden md:block">
        <CodeBlock />
      </div>
    </section>
  );
};
