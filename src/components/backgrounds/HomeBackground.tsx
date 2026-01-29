import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Floating code snippets animation for Home page
export default function HomeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const codeSnippets = [
    'model.fit()', 'predict()', 'train_test_split', 'accuracy: 98%',
    'TensorFlow', 'PyTorch', 'sklearn', 'pandas', 'numpy',
    'CNN', 'RNN', 'LSTM', 'transformer', 'neural_network',
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['-10%', '20%', '-10%'],
          y: ['-10%', '30%', '-10%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(280 100% 50% / 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['10%', '-20%', '10%'],
          y: ['50%', '20%', '50%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-primary/20"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear',
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Grid lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="homeGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#homeGrid)" />
      </svg>
    </div>
  );
}
