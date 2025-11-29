"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

const colors = [
  "rgba(0, 240, 255, 0.8)", // neon-blue
  "rgba(138, 43, 226, 0.8)", // soft-purple-start
  "rgba(218, 112, 214, 0.8)", // soft-purple-end
];

export const InteractiveParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const initParticles = useCallback((numParticles: number, width: number, height: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5, // -0.75 to 0.75
        vy: (Math.random() - 0.5) * 1.5, // -0.75 to 0.75
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, i) => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off walls
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Draw lines to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

        if (distance < 100) { // Connect if within 100px
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / 100})`; // Neon blue, fades with distance
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
  }, [particles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particles.length === 0) { // Only init on first mount or resize if no particles
        initParticles(50, canvas.width, canvas.height); // Number of particles
      }
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const animate = () => {
      drawParticles(ctx, canvas.width, canvas.height);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initParticles, drawParticles, particles.length]); // Re-run if particles change for some reason

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50" // Ensure it's behind other content
      style={{ backgroundColor: "#08080D" }} // Fallback/base background
    />
  );
};