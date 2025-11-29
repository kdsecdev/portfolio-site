"use client";
import { motion } from "framer-motion";

export const GlitchyTitle = () => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        },
      }}
      className="glitchy-title"
      data-text="DEV:KD"
    >
      DEV:KD
    </motion.h1>
  );
};
