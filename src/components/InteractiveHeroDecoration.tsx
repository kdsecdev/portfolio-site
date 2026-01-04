"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useMouse } from "@uidotdev/usehooks";

export const InteractiveHeroDecoration = () => {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      const newX = (mouse.x - width / 2) / (width / 2);
      const newY = (mouse.y - height / 2) / (height / 2);
      animate(x, newX, { type: "spring", stiffness: 100, damping: 20 });
      animate(y, newY, { type: "spring", stiffness: 100, damping: 20 });
    }
  }, [mouse, ref, x, y]);

  const rotateX = useTransform(y, [-1, 1], ["15deg", "-15deg"]);
  const rotateY = useTransform(x, [-1, 1], ["-15deg", "15deg"]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{
            transform: "translateZ(-50px)",
            scale: 1.2,
          }}
          className="absolute inset-0 opacity-10"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/40 to-transparent to-70%" />
        </motion.div>

        <motion.div
          style={{
            transform: "translateZ(50px)",
            scale: 0.8,
          }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-soft-purple-start/30 to-transparent to-70%" />
        </motion.div>
        
        <motion.div
          style={{
            transform: "translateZ(100px)",
            scale: 0.9,
          }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-soft-purple-end/30 to-transparent to-70%" />
        </motion.div>
      </div>
    </motion.div>
  );
};
