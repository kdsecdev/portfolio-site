"use client";
import { motion, MotionProps } from "framer-motion";

interface CardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
      }}
      className={`bg-surface/50 border border-white/10 rounded-2xl p-8 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
