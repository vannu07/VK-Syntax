import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface Role {
  id: string;
  title: string;
  company: string;
  duration: string;
  position: [number, number, number];
  metrics: { label: string; value: string }[];
  isAmazon?: boolean;
}

const roles: Role[] = [
  {
    id: 'amazon-1',
    title: 'SDE II',
    company: 'Amazon',
    duration: '2021-2023',
    position: [0, 5, 0],
    metrics: [
      { label: 'Systems', value: 'Scaled 1M QPS' },
      { label: 'Team', value: '5+ Engineers' },
      { label: 'Impact', value: '$2M Revenue' },
    ],
    isAmazon: true,
  },
  {
    id: 'freelance',
    title: 'Full Stack Developer',
    company: 'Freelance',
    duration: '2020-2021',
    position: [0, 0, 0],
    metrics: [
      { label: 'Projects', value: '12+' },
      { label: 'Clients', value: '8 Global' },
      { label: 'Avg Rating', value: '4.9/5' },
    ],
  },
  {
    id: 'intern',
    title: 'Software Engineering Intern',
    company: 'TechCorp',
    duration: '2019-2020',
    position: [0, -5, 0],
    metrics: [
      { label: 'Projects', value: '3' },
      { label: 'Learning', value: 'Foundation' },
    ],
  },
];

export const ExperienceZone = ({ cameraPos }: { cameraPos: THREE.Vector3 }) => {
  const spineRef = useRef<THREE.LineSegments | null>(null);
  const nodesRef = useRef<(THREE.Group | null)[]>([]);

  // Create spine geometry
  const spineGeometry = new THREE.BufferGeometry();
  const spinePositions = new Float32Array([0, 10, 0, 0, -10, 0]);
  spineGeometry.setAttribute('position', new THREE.BufferAttribute(spinePositions, 3));

  // Render spine
  useFrame(() => {
    if (spineRef.current) {
      // Animate spine if needed
    }

    // Animate nodes with hover effect
    nodesRef.current.forEach((node, idx) => {
      if (node) {
        const role = roles[idx];
        const distToCamera = cameraPos.distanceTo(new THREE.Vector3(...role.position));
        const hoverIntensity = Math.max(0, 1 - distToCamera / 30);

        node.scale.set(1 + hoverIntensity * 0.3, 1 + hoverIntensity * 0.3, 1 + hoverIntensity * 0.3);

        // Amazon node emits stronger energy
        if (role.isAmazon) {
          const meshes = node.children.filter((c) => c instanceof THREE.Mesh) as THREE.Mesh[];
          meshes.forEach((mesh) => {
            if (mesh.material instanceof THREE.MeshStandardMaterial) {
              mesh.material.emissiveIntensity = 0.4 + hoverIntensity * 0.4;
            }
          });
        }
      }
    });
  });

  return (
    <group position={[0, 0, -30]}>
      {/* Neural spine */}
      <lineSegments ref={spineRef} geometry={spineGeometry}>
        <lineBasicMaterial color={0x4444ff} linewidth={2} fog={false} />
      </lineSegments>

      {/* Timeline nodes */}
      {roles.map((role, idx) => (
        <TimelineNode key={role.id} role={role} ref={(r) => (nodesRef.current[idx] = r)} />
      ))}
    </group>
  );
};

interface TimelineNodeProps {
  role: Role;
  ref?: React.Ref<THREE.Group>;
}

const TimelineNode = ({ role }: TimelineNodeProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef} position={role.position}>
      {/* Node sphere */}
      <mesh>
        <sphereGeometry args={[role.isAmazon ? 1.5 : 1, 32, 32]} />
        <meshStandardMaterial
          color={role.isAmazon ? 0xff8800 : 0x4444ff}
          emissive={role.isAmazon ? 0xff5500 : 0x3333aa}
          emissiveIntensity={role.isAmazon ? 0.6 : 0.2}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Glow ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[role.isAmazon ? 2 : 1.5, 0.15, 16, 100]} />
        <meshStandardMaterial
          color={role.isAmazon ? 0xff8800 : 0x4444ff}
          emissive={role.isAmazon ? 0xff8800 : 0x4444ff}
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Hover label box */}
      <mesh position={[0, role.isAmazon ? 2.5 : 2, 0]}>
        <planeGeometry args={[3, 1]} />
        <meshStandardMaterial
          color={0x1a1a2e}
          emissive={0x2d2d4a}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};
