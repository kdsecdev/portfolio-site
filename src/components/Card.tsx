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
      className={`glass-panel rounded-2xl p-8 shadow-2xl relative overflow-hidden ${className}`}
      {...rest}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
