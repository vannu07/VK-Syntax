import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Sparkles } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import profileImage from '@/assets/vannu.jpeg';

function ProfileCard() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load(profileImage);
  }, []);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -state.clock.elapsedTime * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 0.2;
      ring3Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Main Profile Image Circle */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <circleGeometry args={[1.5, 64]} />
          <meshStandardMaterial 
            map={texture} 
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Glowing Border Ring */}
        <mesh ref={ringRef} position={[0, 0, -0.01]}>
          <ringGeometry args={[1.5, 1.65, 64]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Second Rotating Ring */}
        <mesh ref={ring2Ref} position={[0, 0, -0.02]}>
          <ringGeometry args={[1.8, 1.85, 64]} />
          <meshStandardMaterial 
            color="#a855f7" 
            emissive="#a855f7" 
            emissiveIntensity={1.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Third Outer Ring with dashes */}
        <mesh ref={ring3Ref} position={[0, 0, -0.03]}>
          <ringGeometry args={[2.1, 2.15, 32]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={1}
            transparent
            opacity={0.4}
            wireframe
          />
        </mesh>

        {/* Floating Tech Icons Around */}
        <FloatingIcon position={[-2.5, 1, 0]} text="🤖" delay={0} />
        <FloatingIcon position={[2.5, 1, 0]} text="📊" delay={1} />
        <FloatingIcon position={[-2, -1.5, 0]} text="🧠" delay={2} />
        <FloatingIcon position={[2, -1.5, 0]} text="💻" delay={1.5} />
        <FloatingIcon position={[0, 2.5, 0]} text="🚀" delay={0.5} />

        {/* Data Orbit Particles */}
        <DataOrbit radius={2.5} particleCount={20} color="#00d4ff" speed={0.5} />
        <DataOrbit radius={3} particleCount={15} color="#a855f7" speed={-0.3} yOffset={0.3} />
      </group>
    </Float>
  );
}

function FloatingIcon({ position, text, delay }: { position: [number, number, number]; text: string; delay: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text
        fontSize={0.4}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

function DataOrbit({ radius, particleCount, color, speed, yOffset = 0 }: { 
  radius: number; 
  particleCount: number; 
  color: string; 
  speed: number;
  yOffset?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      return {
        angle,
        scale: Math.random() * 0.06 + 0.03,
        yVariation: (Math.random() - 0.5) * 0.5,
      };
    });
  }, [particleCount]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group ref={groupRef} position={[0, yOffset, 0]}>
      {particles.map((particle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(particle.angle) * radius,
            particle.yVariation,
            Math.sin(particle.angle) * radius,
          ]}
        >
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function BackgroundEffects() {
  return (
    <>
      <Sparkles
        count={100}
        size={2}
        scale={10}
        speed={0.5}
        color="#00d4ff"
        opacity={0.3}
      />
      <Sparkles
        count={50}
        size={3}
        scale={8}
        speed={0.3}
        color="#a855f7"
        opacity={0.2}
      />
    </>
  );
}

export default function Character3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight
          position={[0, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />
        
        <ProfileCard />
        <BackgroundEffects />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
