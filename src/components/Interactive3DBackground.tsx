"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Pre-generated at module load time — stable across all renders
const PARTICLE_COUNT = 700;
const particlePositions = (() => {
  const coords = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 4 + Math.random() * 2.2;
    coords[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    coords[i * 3 + 2] = r * Math.cos(phi);
  }
  return coords;
})();

function MinimalParticles() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const positions = useMemo(() => particlePositions, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.035;
    ref.current.rotation.x += mouse.y * delta * 0.025;
    ref.current.rotation.y += mouse.x * delta * 0.025;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#FF6B00"
        size={0.013}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CssGrid() {
  return (
    <mesh rotation={[0.3, 0, 0]}>
      <planeGeometry args={[32, 32, 22, 22]} />
      <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.035} />
    </mesh>
  );
}

export const Interactive3DBackground = () => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isMobile) {
    return (
      <div
        className="fixed inset-0 -z-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,107,0,0.07) 0%, transparent 70%), #080808",
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 -z-50 bg-[#080808]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "low-power",
        }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={["#080808", 9, 24]} />
        <MinimalParticles />
        <CssGrid />
      </Canvas>
    </div>
  );
};
