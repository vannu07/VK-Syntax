import { motion } from 'framer-motion';

// Hexagonal grid with pulsing nodes for Projects page
export default function ProjectsBackground() {
  const hexagons = Array.from({ length: 30 }, (_, i) => ({
    x: (i % 6) * 150 + (Math.floor(i / 6) % 2) * 75,
    y: Math.floor(i / 6) * 130,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Hexagonal grid */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {hexagons.map((hex, i) => (
          <motion.g key={i} transform={`translate(${hex.x}, ${hex.y})`}>
            <motion.polygon
              points="50,0 100,25 100,75 50,100 0,75 0,25"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [0.95, 1, 0.95],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: hex.delay,
              }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="3"
              fill="hsl(var(--primary))"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: hex.delay + 0.5,
              }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Connection lines animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.03) 50%, transparent 100%),
            linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.03) 50%, transparent 100%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating tech icons */}
      {['🤖', '🧠', '📊', '🔬', '💡', '⚙️'].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-10"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}
