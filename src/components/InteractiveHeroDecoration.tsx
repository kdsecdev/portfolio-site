"use client";
import { motion } from "framer-motion";

export const InteractiveHeroDecoration = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00F0FF]/40 to-transparent to-70%" />
        </motion.div>

        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#BF00FF]/30 to-transparent to-70%" />
        </motion.div>
        
        <motion.div
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00FF88]/25 to-transparent to-70%" />
        </motion.div>
      </div>
    </div>
  );
};
