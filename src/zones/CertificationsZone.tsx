import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  position: [number, number, number];
}

const certifications: Certification[] = [
  {
    id: 'aws-solutions',
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    position: [-6, 2, -120],
  },
  {
    id: 'react-expert',
    name: 'React Expert',
    issuer: 'React Academy',
    date: '2022',
    position: [0, 2, -125],
  },
  {
    id: 'data-science',
    name: 'Data Science Professional',
    issuer: 'Coursera',
    date: '2021',
    position: [6, 2, -120],
  },
  {
    id: 'cloud-architect',
    name: 'Cloud Architecture',
    issuer: 'Linux Academy',
    date: '2021',
    position: [-3, -3, -122],
  },
  {
    id: 'fullstack',
    name: 'Full Stack Development',
    issuer: 'Udemy',
    date: '2020',
    position: [3, -3, -122],
  },
];

export const CertificationsZone = ({ cameraPos }: { cameraPos: THREE.Vector3 }) => {
  const sealGroupRef = useRef<THREE.Group>(null);
  const sealsRef = useRef<(THREE.Group | null)[]>([]);

  useFrame(() => {
    if (sealGroupRef.current) {
      // Slow, authoritative rotation
      sealGroupRef.current.rotation.z += 0.00005;
    }

    // Subtle glow pulse on seals
    sealsRef.current.forEach((seal) => {
      if (seal) {
        const pulseAmount = Math.sin(Date.now() * 0.001) * 0.15 + 0.5;
        const meshes = seal.children.filter((c) => c instanceof THREE.Mesh) as THREE.Mesh[];
        meshes.forEach((mesh) => {
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.emissiveIntensity = pulseAmount;
          }
        });
      }
    });
  });

  return (
    <group ref={sealGroupRef} position={[0, 0, -120]}>
      {/* Vault door - geometric frame */}
      <VaultFrame />

      {/* Credential seals */}
      {certifications.map((cert, idx) => (
        <CredentialSeal
          key={cert.id}
          cert={cert}
          ref={(r) => (sealsRef.current[idx] = r)}
        />
      ))}
    </group>
  );
};

const VaultFrame = () => {
  return (
    <group>
      {/* Outer frame */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const x = Math.cos(angle) * 20;
        const y = Math.sin(angle) * 20;
        return (
          <mesh key={i} position={[x, y, 0]}>
            <boxGeometry args={[0.5, 12, 0.2]} />
            <meshStandardMaterial
              color={0x444455}
              emissive={0x555566}
              emissiveIntensity={0.1}
              metalness={0.8}
              roughness={0.3}
            />
          </mesh>
        );
      })}

      {/* Center ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[15, 1, 16, 100]} />
        <meshStandardMaterial
          color={0x555566}
          emissive={0x666677}
          emissiveIntensity={0.1}
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

interface CredentialSealProps {
  cert: Certification;
  ref?: React.Ref<THREE.Group>;
}

const CredentialSeal = ({ cert }: CredentialSealProps) => {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} position={cert.position}>
      {/* Seal circle */}
      <mesh rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
        <meshStandardMaterial
          color={0xb8860b}
          emissive={0xdaa520}
          emissiveIntensity={0.2}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Border ring */}
      <mesh position={[0, 0, 0.2]}>
        <torusGeometry args={[1.3, 0.1, 16, 100]} />
        <meshStandardMaterial
          color={0xffd700}
          emissive={0xffd700}
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Label placeholder */}
      <mesh position={[0, 0.3, 0.2]}>
        <planeGeometry args={[1.5, 0.3]} />
        <meshStandardMaterial color={0x333344} transparent opacity={0.5} />
      </mesh>

      {/* Issuer label placeholder */}
      <mesh position={[0, -0.2, 0.2]}>
        <planeGeometry args={[1.4, 0.2]} />
        <meshStandardMaterial color={0x444455} transparent opacity={0.4} />
      </mesh>

      {/* Year label */}
      <mesh position={[0, -0.6, 0.2]}>
        <planeGeometry args={[0.8, 0.15]} />
        <meshStandardMaterial color={0x555566} transparent opacity={0.4} />
      </mesh>
    </group>
  );
};
