"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface ShapeStyle {
  width: string;
  height: string;
  top: string;
  left: string;
  backgroundColor: string;
}

export const FloatingShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapeStyles, setShapeStyles] = useState<ShapeStyle[]>([]);

  useEffect(() => {
    // Generate random styles only on the client
    const newShapeStyles: ShapeStyle[] = Array.from({ length: 15 }).map(() => ({
      width: `${Math.random() * 80 + 20}px`,
      height: `${Math.random() * 80 + 20}px`,
      top: `${Math.random() * 120}%`,
      left: `${Math.random() * 100}%`,
      backgroundColor: `hsla(${Math.random() * 360}, 90%, 70%, 0.05)`,
    }));
    setShapeStyles(newShapeStyles);

    const ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray(".floating-shape");
      shapes.forEach((shape: any) => {
        gsap.to(shape, {
          y: "-=300", // Float upwards
          opacity: 0,
          duration: gsap.utils.random(5, 10),
          delay: gsap.utils.random(0, 5),
          repeat: -1,
          ease: "sine.inOut",
          yoyo: true, // Float back down
        });

        gsap.to(shape, {
          x: `+=${gsap.utils.random(-100, 100)}`, // Horizontal drift
          rotation: gsap.utils.random(0, 360), // Rotate
          duration: gsap.utils.random(10, 20),
          repeat: -1,
          ease: "sine.inOut",
          yoyo: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-50 overflow-hidden"
    >
      {shapeStyles.map((style, i) => (
        <div
          key={i}
          className="floating-shape absolute rounded-full"
          style={style}
        />
      ))}
    </div>
  );
};
