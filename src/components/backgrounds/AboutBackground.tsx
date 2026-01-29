import { motion } from 'framer-motion';

// DNA helix / data strand animation for About page
export default function AboutBackground() {
  const strands = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Flowing data strands */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {strands.map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-50 + i * 80} 0 Q ${i * 80} ${200 + Math.sin(i) * 100} ${-50 + i * 80} 400 Q ${i * 80} ${600 + Math.sin(i) * 100} ${-50 + i * 80} 800 Q ${i * 80} ${1000 + Math.sin(i) * 100} ${-50 + i * 80} 1200`}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.1, 0.3, 0.1],
              strokeDashoffset: [0, -200],
            }}
            transition={{
              pathLength: { duration: 2, delay: i * 0.1 },
              opacity: { duration: 4, repeat: Infinity, delay: i * 0.2 },
              strokeDashoffset: { duration: 8, repeat: Infinity, ease: 'linear' },
            }}
            strokeDasharray="10 20"
          />
        ))}
      </svg>

      {/* Floating achievement badges */}
      {[
        { x: '10%', y: '20%', delay: 0, icon: '🎓' },
        { x: '85%', y: '30%', delay: 1, icon: '💼' },
        { x: '15%', y: '70%', delay: 2, icon: '🏆' },
        { x: '80%', y: '75%', delay: 3, icon: '⚡' },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          <span className="opacity-20">{item.icon}</span>
        </motion.div>
      ))}

      {/* Gradient orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
