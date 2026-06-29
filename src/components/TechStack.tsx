"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "C++", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "Dart / Flutter", icon: "💙" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "FastAPI", icon: "🚀" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Unreal Engine", icon: "🎮" },
  { name: "Git", icon: "🔀" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Framer Motion", icon: "🎬" },
];

// Duplicate for seamless infinite scroll
const allTechs = [...technologies, ...technologies];

export const TechStack = () => {
  return (
    <div className="w-full py-6 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#0D0D0D] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#0D0D0D] to-transparent" />

      <motion.div
        className="flex gap-8 items-center whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {allTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/8 hover:border-accent-primary/40 hover:bg-accent-primary/5 transition-all cursor-default group shrink-0"
          >
            <span className="text-lg leading-none">{tech.icon}</span>
            <span className="font-display font-semibold text-sm text-white/70 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
