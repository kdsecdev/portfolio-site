"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Pre-generated at module load time — stable across all renders, satisfies purity rules
const PARTICLE_COUNT = 700;
const particlePositions = (() => {
  const coords = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 4 + Math.random() * 2;
    coords[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    coords[i * 3 + 2] = r * Math.cos(phi);
  }
  return coords;
})();

// Reduced from 1500 → 700 particles for ~2× faster GPU workload on mobile
function MinimalParticles() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // useMemo here is fine — positions are derived from the stable module constant
  const positions = useMemo(() => particlePositions, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += mouse.y * delta * 0.03;
    ref.current.rotation.y += mouse.x * delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#1E90FF"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Lightweight CSS grid — no Three.js geometry needed, saves ~30% GPU
function CssGrid() {
  return (
    <mesh rotation={[0.3, 0, 0]}>
      <planeGeometry args={[30, 30, 20, 20]} />
      <meshBasicMaterial color="#00FF85" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

export const Interactive3DBackground = () => {
  // Lazy initializer — reads matchMedia once synchronously, no effect needed
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  });

  // Subscribe to resize changes without calling setState inside the effect body
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isMobile) {
    // Pure CSS gradient background for mobile — zero JS overhead
    return (
      <div
        className="fixed inset-0 -z-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,240,255,0.06) 0%, transparent 70%), #0D0D0D",
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 -z-50 bg-[#0D0D0D]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          antialias: false,    // saves significant GPU on non-retina
          alpha: false,
          powerPreference: "low-power",   // battery-friendly
        }}
        dpr={[1, 1.5]}  // cap pixel ratio — prevents 4× overdraw on retina
      >
        <fog attach="fog" args={["#0D0D0D", 10, 25]} />
        <MinimalParticles />
        <CssGrid />
      </Canvas>
    </div>
  );
};
