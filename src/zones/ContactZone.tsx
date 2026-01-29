import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export const ContactZone = ({ cameraPos }: { cameraPos: THREE.Vector3 }) => {
  const particlesRef = useRef<THREE.Points | null>(null);
  const velocityRef = useRef<Float32Array | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Detect when camera stops moving (low velocity)
  useEffect(() => {
    let previousPos = cameraPos.clone();
    let isStationary = false;

    const checkStationarity = setInterval(() => {
      const movement = previousPos.distanceTo(cameraPos);
      if (movement < 0.1 && !isStationary) {
        isStationary = true;
        setShowForm(true);
      } else if (movement > 0.5) {
        isStationary = false;
      }
      previousPos = cameraPos.clone();
    }, 500);

    return () => clearInterval(checkStationarity);
  }, [cameraPos]);

  // Converging particles animation
  useFrame((state) => {
    if (particlesRef.current && velocityRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const vel = velocityRef.current;

      for (let i = 0; i < positions.length; i += 3) {
        // Target: converge toward origin
        const tx = 0;
        const ty = 0;
        const tz = 0;

        const px = positions[i];
        const py = positions[i + 1];
        const pz = positions[i + 2];

        const dx = tx - px;
        const dy = ty - py;
        const dz = tz - pz;

        // Add velocity toward center
        const acceleration = 0.001;
        vel[i] += dx * acceleration;
        vel[i + 1] += dy * acceleration;
        vel[i + 2] += dz * acceleration;

        // Friction
        vel[i] *= 0.98;
        vel[i + 1] *= 0.98;
        vel[i + 2] *= 0.98;

        // Update position
        positions[i] += vel[i];
        positions[i + 1] += vel[i + 1];
        positions[i + 2] += vel[i + 2];
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Generate particle cloud
  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100; // x
    positions[i + 1] = (Math.random() - 0.5) * 100; // y
    positions[i + 2] = (Math.random() - 0.5) * 100; // z

    velocities[i] = (Math.random() - 0.5) * 0.2;
    velocities[i + 1] = (Math.random() - 0.5) * 0.2;
    velocities[i + 2] = (Math.random() - 0.5) * 0.2;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  velocityRef.current = velocities;

  return (
    <group position={[0, 0, -200]}>
      {/* Converging particle field */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          color={0x4444ff}
          size={0.3}
          sizeAttenuation
          transparent
          opacity={0.6}
          fog={false}
        />
      </points>

      {/* Central point of convergence */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={0x4444ff}
          emissive={0x4444ff}
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Expanding rings */}
      {[1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <torusGeometry args={[i * 2, 0.1, 16, 100]} />
          <meshStandardMaterial
            color={0x4444ff}
            emissive={0x4444ff}
            emissiveIntensity={0.3}
            transparent
            opacity={0.5 - i * 0.15}
          />
        </mesh>
      ))}

      {/* Contact form overlay (appears when stationary) */}
      {showForm && <ContactFormOverlay />}
    </group>
  );
};

const ContactFormOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '320px',
        padding: '24px',
        backgroundColor: 'rgba(10, 10, 15, 0.95)',
        border: '1px solid rgba(68, 68, 255, 0.3)',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>
        Let's Connect
      </h2>
      <p style={{ color: '#aaaaaa', marginBottom: '16px', fontSize: '14px' }}>
        Ready to explore further? Reach out.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <a
          href="mailto:kumar.varnit.16@gmail.com"
          style={{
            padding: '10px 16px',
            backgroundColor: '#4444ff',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '4px',
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 500,
            transition: 'all 0.3s',
          }}
        >
          Send Email
        </a>
        <a
          href="https://linkedin.com/in/varnit-kumar"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '10px 16px',
            backgroundColor: 'transparent',
            border: '1px solid #4444ff',
            color: '#4444ff',
            textDecoration: 'none',
            borderRadius: '4px',
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
};
