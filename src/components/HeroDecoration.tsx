"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroDecoration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 0.2, rotate: 10 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      className="absolute inset-0 flex items-center justify-center -z-10 opacity-20"
    >
      <Image
        src="/abstract-lines.svg"
        alt="Abstract Lines"
        width={400}
        height={400}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};
