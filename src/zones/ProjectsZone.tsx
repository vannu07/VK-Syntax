import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Project {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  tags: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: 'farm-iq',
    title: 'Farm-IQ',
    description: 'AI-powered agricultural analytics platform',
    position: [-8, 10, -50],
    tags: ['AI', 'Agriculture', 'IoT'],
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Users', value: '5K+' },
    ],
  },
  {
    id: 'personal-ai',
    title: 'Personal AI',
    description: 'Autonomous AI assistant with RAG',
    position: [0, 5, -55],
    tags: ['GenAI', 'RAG', 'LLM'],
    metrics: [
      { label: 'Response Time', value: '200ms' },
      { label: 'Accuracy', value: '92%' },
    ],
  },
  {
    id: 'fintech-app',
    title: 'FinTech Dashboard',
    description: 'Real-time financial analytics',
    position: [8, 0, -50],
    tags: ['Finance', 'React', 'WebSocket'],
    metrics: [
      { label: 'Throughput', value: '1M TPS' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
];

export const ProjectsZone = ({ cameraPos }: { cameraPos: THREE.Vector3 }) => {
  const artifactsRef = useRef<(THREE.Group | null)[]>([]);

  useFrame(() => {
    artifactsRef.current.forEach((artifact, idx) => {
      if (artifact) {
        // Subtle floating motion
        artifact.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.002;

        // Hover effect toward camera
        const distToCamera = cameraPos.distanceTo(
          new THREE.Vector3(...projects[idx].position)
        );
        const hoverIntensity = Math.max(0, 1 - distToCamera / 40);

        // Magnetic pull when close
        if (hoverIntensity > 0.2) {
          const direction = cameraPos
            .clone()
            .sub(new THREE.Vector3(...projects[idx].position))
            .normalize();
          artifact.position.addScaledVector(direction, hoverIntensity * 0.01);
        }

        // Rotation effect
        artifact.rotation.x += 0.0003;
        artifact.rotation.z += 0.0002;
      }
    });
  });

  return (
    <group position={[0, 0, 0]}>
      {projects.map((project, idx) => (
        <ProjectArtifact
          key={project.id}
          project={project}
          ref={(r) => (artifactsRef.current[idx] = r)}
        />
      ))}
    </group>
  );
};

interface ProjectArtifactProps {
  project: Project;
  ref?: React.Ref<THREE.Group>;
}

const ProjectArtifact = ({ project }: ProjectArtifactProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <group
      ref={groupRef}
      position={project.position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Main panel */}
      <mesh scale={hovered ? 1.1 : 1}>
        <planeGeometry args={[4, 5]} />
        <meshStandardMaterial
          color={0x1a1a2e}
          emissive={0x2d2d4a}
          emissiveIntensity={hovered ? 0.4 : 0.15}
          metalness={0.5}
          roughness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Border glow */}
      {hovered && (
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[4.1, 5.1]} />
          <meshStandardMaterial
            color={0x4444ff}
            emissive={0x4444ff}
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      )}

      {/* Title */}
      <mesh position={[0, 1.5, 0.02]}>
        <planeGeometry args={[3.5, 0.4]} />
        <meshStandardMaterial color={0x2d2d4a} transparent opacity={0.6} />
      </mesh>

      {/* Description (only on hover) */}
      {hovered && (
        <mesh position={[0, 0.5, 0.02]}>
          <planeGeometry args={[3.5, 0.3]} />
          <meshStandardMaterial color={0x1a1a2e} transparent opacity={0.7} />
        </mesh>
      )}

      {/* Tags visualization */}
      {hovered && (
        <group position={[0, -1.2, 0.02]}>
          {project.tags.map((_, i) => (
            <mesh key={i} position={[0, -i * 0.3, 0]}>
              <planeGeometry args={[2.5, 0.2]} />
              <meshStandardMaterial color={0x2d4a2d} transparent opacity={0.5} />
            </mesh>
          ))}
        </group>
      )}
    </group>
  );
};
