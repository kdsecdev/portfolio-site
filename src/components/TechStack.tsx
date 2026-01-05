"use client";

import { motion } from "framer-motion";

// Using emoji/unicode symbols for tech stack
const technologies = [
  "⚛️ React",
  "▲ Next.js", 
  "📘 TypeScript",
  "🎨 Tailwind",
  "🟢 Node.js",
  "🎲 Three.js",
  "🎬 Framer",
  "🐘 PostgreSQL",
  "⚛️ React",
  "▲ Next.js",
  "📘 TypeScript", 
  "🎨 Tailwind",
  "🟢 Node.js",
  "🎲 Three.js",
  "🎬 Framer",
  "🐘 PostgreSQL",
];

export const TechStack = () => {
  return (
    <div className="w-full py-8 overflow-hidden relative">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      
      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xl md:text-2xl font-display font-semibold text-white/60 hover:text-[#00FF85] transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
