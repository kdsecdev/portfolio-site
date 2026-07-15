"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "C++",
    icon: "https://img.icons8.com/color/48/c-plus-plus-logo.png",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/48/python--v1.png",
  },
  {
    name: "Flutter",
    icon: "https://img.icons8.com/color/48/flutter.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/48/typescript.png",
  },
  {
    name: "Next.js",
    icon: "https://img.icons8.com/fluency/48/nextjs.png",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/48/react-native.png",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/48/nodejs.png",
  },
  {
    name: "FastAPI",
    icon: "https://img.icons8.com/color/48/fastapi.png",
  },
  {
    name: "PostgreSQL",
    icon: "https://img.icons8.com/color/48/postgreesql.png",
  },
  {
    name: "Docker",
    icon: "https://img.icons8.com/color/48/docker.png",
  },
  {
    name: "Unreal Engine",
    icon: "https://img.icons8.com/color/48/unreal-engine.png",
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/color/48/git.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/48/tailwindcss.png",
  },
  {
    name: "Figma",
    icon: "https://img.icons8.com/color/48/figma--v1.png",
  },
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
        className="flex gap-4 items-center whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 45,
        }}
      >
        {allTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/8 hover:border-accent-primary/40 hover:bg-accent-primary/5 transition-all cursor-default group shrink-0"
          >
            {/* icons8 icon */}
            <img
              src={tech.icon}
              alt={tech.name}
              width={22}
              height={22}
              className="w-[22px] h-[22px] object-contain shrink-0 group-hover:scale-110 transition-transform duration-200"
              loading="lazy"
            />
            <span
              className="text-sm text-white/70 group-hover:text-white transition-colors shrink-0"
              style={{ fontFamily: "'Inter', 'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
