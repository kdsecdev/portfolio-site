"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  delay = 0,
  speed = 50, // milliseconds per character
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed + delay); // Add delay to first character
      return () => clearTimeout(timeout);
    }
  }, [text, index, speed, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: delay / 1000 }} // Fade in the whole span
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
        className="inline-block w-2 bg-text-primary h-full ml-1 align-bottom"
      />
    </motion.span>
  );
};
