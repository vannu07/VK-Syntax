import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Skill {
  name: string;
  proficiency: number; // 0-1
  category: 'frontend' | 'backend' | 'devops' | 'ml';
}

const skills: Skill[] = [
  // Frontend (Blue constellation)
  { name: 'React', proficiency: 0.95, category: 'frontend' },
  { name: 'TypeScript', proficiency: 0.93, category: 'frontend' },
  { name: 'Tailwind', proficiency: 0.92, category: 'frontend' },
  { name: 'Three.js', proficiency: 0.85, category: 'frontend' },
  { name: 'Next.js', proficiency: 0.88, category: 'frontend' },

  // Backend (Green constellation)
  { name: 'Node.js', proficiency: 0.94, category: 'backend' },
  { name: 'Python', proficiency: 0.89, category: 'backend' },
  { name: 'SQL', proficiency: 0.91, category: 'backend' },
  { name: 'MongoDB', proficiency: 0.87, category: 'backend' },
  { name: 'GraphQL', proficiency: 0.84, category: 'backend' },

  // DevOps (Orange constellation)
  { name: 'AWS', proficiency: 0.90, category: 'devops' },
  { name: 'Docker', proficiency: 0.88, category: 'devops' },
  { name: 'CI/CD', proficiency: 0.86, category: 'devops' },
  { name: 'Kubernetes', proficiency: 0.75, category: 'devops' },

  // ML/AI (Purple constellation)
  { name: 'GenAI', proficiency: 0.87, category: 'ml' },
  { name: 'LLMs', proficiency: 0.86, category: 'ml' },
  { name: 'RAG', proficiency: 0.85, category: 'ml' },
  { name: 'Data Analysis', proficiency: 0.82, category: 'ml' },
];

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    frontend: '#4444ff',
    backend: '#44ff44',
    devops: '#ff8800',
    ml: '#ff44ff',
  };
  return colors[category] || '#ffffff';
};

export const SkillsZone = ({ cameraPos }: { cameraPos: THREE.Vector3 }) => {
  const sphereRef = useRef<THREE.Group>(null);
  const skillNodesRef = useRef<(THREE.Group | null)[]>([]);

  // Generate positions on a sphere with proficiency-based radius
  const skillPositions = useMemo(() => {
    return skills.map((skill, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;

      const radius = 8 + skill.proficiency * 8; // Stronger skills closer to center
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      return { x, y, z, skill };
    });
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.0002;
      sphereRef.current.rotation.y += 0.0005;
      sphereRef.current.rotation.z += 0.0001;
    }

    // Animate nodes with distance-based pulse
    skillNodesRef.current.forEach((node, idx) => {
      if (node) {
        const pos = skillPositions[idx];
        const distToCamera = cameraPos.distanceTo(new THREE.Vector3(pos.x, pos.y, pos.z));
        const isNear = distToCamera < 50;

        // Pulse when near camera
        const pulseIntensity = isNear ? Math.sin(Date.now() * 0.003) * 0.5 + 0.5 : 0.3;
        const meshes = node.children.filter((c) => c instanceof THREE.Mesh) as THREE.Mesh[];
        meshes.forEach((mesh) => {
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.emissiveIntensity = pulseIntensity;
          }
        });

        // Scale based on proximity
        const proximity = Math.max(0, 1 - distToCamera / 100);
        node.scale.set(1 + proximity * 0.2, 1 + proximity * 0.2, 1 + proximity * 0.2);
      }
    });
  });

  return (
    <group ref={sphereRef} position={[0, 0, -80]}>
      {/* Connection lines between nearby skills */}
      {skillPositions.map((posA, i) =>
        skillPositions.slice(i + 1).map((posB, j) => {
          const dist = Math.sqrt(
            Math.pow(posA.x - posB.x, 2) +
            Math.pow(posA.y - posB.y, 2) +
            Math.pow(posA.z - posB.z, 2)
          );
          if (dist < 20) {
            const lineGeo = new THREE.BufferGeometry();
            lineGeo.setAttribute(
              'position',
              new THREE.BufferAttribute(
                new Float32Array([posA.x, posA.y, posA.z, posB.x, posB.y, posB.z]),
                3
              )
            );
            return (
              <lineSegments key={`${i}-${i + j + 1}`} geometry={lineGeo}>
                <lineBasicMaterial color={0x4444ff} linewidth={0.5} opacity={0.2} transparent fog={false} />
              </lineSegments>
            );
          }
          return null;
        })
      )}

      {/* Skill nodes */}
      {skillPositions.map((pos, idx) => (
        <SkillNode
          key={skills[idx].name}
          skill={skills[idx]}
          position={[pos.x, pos.y, pos.z]}
          ref={(r) => (skillNodesRef.current[idx] = r)}
        />
      ))}
    </group>
  );
};

interface SkillNodeProps {
  skill: Skill;
  position: [number, number, number];
  ref?: React.Ref<THREE.Group>;
}

const SkillNode = ({ skill, position }: SkillNodeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const color = getCategoryColor(skill.category);

  return (
    <group ref={groupRef} position={position}>
      {/* Skill sphere - size based on proficiency */}
      <mesh>
        <sphereGeometry args={[0.3 + skill.proficiency * 0.3, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Glow aura */}
      <mesh>
        <sphereGeometry args={[0.6 + skill.proficiency * 0.4, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Label placeholder (subtle plane) */}
      <mesh position={[0, 1, 0]}>
        <planeGeometry args={[0.8, 0.3]} />
        <meshStandardMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </group>
  );
};
