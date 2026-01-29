import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const EntryZone = ({ onEntryComplete }: { onEntryComplete: () => void }) => {
  const { camera, scene } = useThree();
  const textMeshRef = useRef<THREE.Group>(null);
  const [showTagline, setShowTagline] = useState(false);
  const [entryPhase, setEntryPhase] = useState<'void' | 'emergence' | 'tagline' | 'advance'>('void');

  useEffect(() => {
    const timeline = [
      { delay: 0, phase: 'void' as const, duration: 2000 },
      { delay: 2000, phase: 'emergence' as const, duration: 3000 },
      { delay: 5000, phase: 'tagline' as const, duration: 2000 },
      { delay: 7000, phase: 'advance' as const, duration: 4000 },
    ];

    const timers = timeline.map((t) => {
      return setTimeout(() => {
        setEntryPhase(t.phase);
        if (t.phase === 'tagline') setShowTagline(true);
        if (t.phase === 'advance') {
          const startPos = camera.position.clone();
          const startTime = Date.now();
          const moveDuration = 4000;

          const moveInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / moveDuration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            camera.position.z = startPos.z - easeProgress * 15;

            if (progress >= 1) {
              clearInterval(moveInterval);
              onEntryComplete();
            }
          }, 16);
        }
      }, t.delay);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, [camera, onEntryComplete]);

  useFrame(() => {
    if (textMeshRef.current && entryPhase !== 'void') {
      textMeshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group>
      {/* Dark void background */}
      <mesh position={[0, 0, -100]}>
        <sphereGeometry args={[500, 32, 32]} />
        <meshStandardMaterial
          transparent
          opacity={0.3}
          color={0x000000}
          emissive={0x0a0a0f}
          emissiveIntensity={entryPhase === 'void' ? 1 : 0.3}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Name - simple box for now, will be replaced with canvas text */}
      <group ref={textMeshRef} position={[0, 2, 0]}>
        <mesh>
          <boxGeometry args={[6, 2, 0.1]} />
          <meshStandardMaterial
            color={entryPhase === 'void' ? 0x000000 : 0x4444ff}
            emissive={0x4444ff}
            emissiveIntensity={entryPhase === 'emergence' ? 0.5 : 0.1}
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* Tagline box */}
      {showTagline && (
        <mesh position={[0, -3, 0]}>
          <boxGeometry args={[4, 0.8, 0.05]} />
          <meshStandardMaterial
            color={0x4444ff}
            emissive={0x4444ff}
            emissiveIntensity={0.2}
          />
        </mesh>
      )}
    </group>
  );
};
