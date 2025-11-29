"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative p-6 rounded-lg bg-surface border border-white/10 overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary">
          <Icon className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-display text-white">{title}</h3>
          <p className="mt-2 text-sm text-text-primary">{description}</p>
        </div>
      </div>
      {isHovered && (
        <motion.div
          style={{
            left: mousePos.x - 128,
            top: mousePos.y - 128,
          }}
          className="absolute w-64 h-64 bg-accent-primary/30 blur-3xl pointer-events-none"
        />
      )}
    </motion.div>
  );
};
