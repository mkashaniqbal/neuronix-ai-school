'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes component
function FloatingGeometry({ position, geometry, color, speed = 1 }: {
  position: [number, number, number];
  geometry: 'icosahedron' | 'octahedron' | 'tetrahedron';
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.01;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1, 0]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={Math.random() * 0.5 + 0.3}>
        <GeometryComponent />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

// Neural network visualization
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const nodes = Array.from({ length: 20 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
    ] as [number, number, number],
    color: i % 3 === 0 ? '#667eea' : i % 3 === 1 ? '#764ba2' : '#667eea',
  }));

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <Float key={index} speed={1 + Math.random()} rotationIntensity={0.2}>
          <Sphere position={node.position} args={[0.1]}>
            <meshBasicMaterial color={node.color} transparent opacity={0.8} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

// Particle system
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.001;
      pointsRef.current.rotation.y += 0.002;
    }
  });

  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#667eea"
        size={0.05}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

// Camera controller for mouse interaction
function CameraController() {
  const { camera } = useThree();

  useFrame((state) => {
    const mouseX = (state.mouse.x * 0.5);
    const mouseY = (state.mouse.y * 0.5);

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (mouseY - camera.position.y) * 0.05;
  });

  return null;
}

// Loading fallback
function Loader() {
  return (
    <div className="fixed inset-0 z-[-1] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-white/20 border-t-blue-400 rounded-full animate-spin"></div>
    </div>
  );
}

// Main scene component
function Scene() {
  const geometries: ('icosahedron' | 'octahedron' | 'tetrahedron')[] = ['icosahedron', 'octahedron', 'tetrahedron'];
  const colors = ['#667eea', '#764ba2', '#667eea'];

  const floatingShapes = Array.from({ length: 15 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number],
    geometry: geometries[Math.floor(Math.random() * geometries.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 0.5 + 0.5,
  }));

  return (
    <>
      <CameraController />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <ParticleField />
      <NeuralNetwork />
      {floatingShapes.map((shape, index) => (
        <FloatingGeometry
          key={index}
          position={shape.position}
          geometry={shape.geometry}
          color={shape.color}
          speed={shape.speed}
        />
      ))}
    </>
  );
}

export default function ThreeJSVisualization() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}