"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function CodeGrid() {
  const ref = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.08;
    }
  });

  const lines = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = 20;
    const divisions = 40;

    // Horizontal lines
    for (let i = -size; i <= size; i += size / divisions) {
      vertices.push(-size, i, 0, size, i, 0);
    }
    // Vertical lines
    for (let i = -size; i <= size; i += size / divisions) {
      vertices.push(i, -size, 0, i, size, 0);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  return (
    <lineSegments ref={ref} geometry={lines}>
      <lineBasicMaterial color="#00FF85" transparent opacity={0.08} />
    </lineSegments>
  );
}

function MinimalParticles(props: any) {
  const ref = useRef<any>(null);
  const { mouse } = useThree();
  
  const [positions] = useMemo(() => {
    const coords = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 2;
      
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return [coords];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      
      const x = mouse.x * 0.05;
      const y = mouse.y * 0.05;
      ref.current.rotation.x += y * delta;
      ref.current.rotation.y += x * delta;
      
      const scrollY = window.scrollY;
      ref.current.rotation.z = scrollY * 0.0002;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
      <PointMaterial
        transparent
        color="#1E90FF"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export const Interactive3DBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-[#0D0D0D]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: false, alpha: false }}>
        <fog attach="fog" args={['#0D0D0D', 10, 25]} />
        <ambientLight intensity={0.2} />
        <MinimalParticles />
        <CodeGrid />
      </Canvas>
    </div>
  );
};
