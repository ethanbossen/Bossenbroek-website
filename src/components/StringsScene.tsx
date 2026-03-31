"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

const STRING_CONFIG = [
  { baseFreq: 1.2, amplitude: 0.015, radius: 0.010, color: "#D4A574", yOffset: 0.7 },
  { baseFreq: 1.0, amplitude: 0.018, radius: 0.012, color: "#C9986A", yOffset: 0.42 },
  { baseFreq: 0.85, amplitude: 0.022, radius: 0.016, color: "#BE8C60", yOffset: 0.14 },
  { baseFreq: 0.7, amplitude: 0.026, radius: 0.020, color: "#B38056", yOffset: -0.14 },
  { baseFreq: 0.55, amplitude: 0.030, radius: 0.026, color: "#A8744C", yOffset: -0.42 },
  { baseFreq: 0.4, amplitude: 0.035, radius: 0.032, color: "#9D6842", yOffset: -0.7 },
];

const TUBE_SEGMENTS = 256;
const RADIAL_SEGMENTS = 8;
const STRING_LENGTH = 80;

function computeDisplacement(
  t: number,
  amplitude: number,
  baseFreq: number,
  time: number
): number {
  let dy = 0;
  for (let n = 1; n <= 4; n++) {
    const harmonicAmp = amplitude / (n * n);
    // Traveling wave — no zero-amplitude endpoints
    dy += harmonicAmp * Math.sin(n * 6 * Math.PI * t - baseFreq * n * 2 * time);
  }
  return dy;
}

function VibratingString({
  config,
}: {
  config: (typeof STRING_CONFIG)[number];
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const basePositions = useRef<Float32Array | null>(null);

  const geometry = useMemo(() => {
    const path = new THREE.LineCurve3(
      new THREE.Vector3(-STRING_LENGTH / 2, 0, 0),
      new THREE.Vector3(STRING_LENGTH / 2, 0, 0)
    );
    return new THREE.TubeGeometry(
      path,
      TUBE_SEGMENTS,
      config.radius,
      RADIAL_SEGMENTS,
      false
    );
  }, [config.radius]);

  useEffect(() => {
    basePositions.current = new Float32Array(
      geometry.attributes.position.array
    );
  }, [geometry]);

  useFrame(({ clock }) => {
    if (!basePositions.current) return;
    const positions = geometry.attributes.position;
    const arr = positions.array as Float32Array;
    const base = basePositions.current;
    const time = clock.elapsedTime;
    const ringSize = RADIAL_SEGMENTS + 1;

    for (let i = 0; i <= TUBE_SEGMENTS; i++) {
      const t = i / TUBE_SEGMENTS;
      const dy = computeDisplacement(t, config.amplitude, config.baseFreq, time);
      const ringStart = i * ringSize;

      for (let j = 0; j < ringSize; j++) {
        const idx = (ringStart + j) * 3;
        arr[idx] = base[idx];
        arr[idx + 1] = base[idx + 1] + dy;
        arr[idx + 2] = base[idx + 2];
      }
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, config.yOffset, 0]}>
      <meshStandardMaterial
        color={config.color}
        metalness={0.9}
        roughness={0.25}
      />
    </mesh>
  );
}

function Strings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {STRING_CONFIG.map((config, i) => (
        <VibratingString key={i} config={config} />
      ))}
    </group>
  );
}

export default function StringsScene() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[60%] z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 90 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Environment preset="apartment" />
        <ambientLight intensity={0.4} color="#FFF8E7" />
        <directionalLight
          position={[5, 3, 5]}
          intensity={1.0}
          color="#FFF0D4"
        />
        <directionalLight
          position={[-3, -2, 3]}
          intensity={0.3}
          color="#FFE4B5"
        />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#B45309" />
        <Strings />
      </Canvas>
    </div>
  );
}
