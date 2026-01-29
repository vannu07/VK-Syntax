import { motion } from 'framer-motion';

// Neural network visualization for Skills page
export default function SkillsBackground() {
  const nodes = Array.from({ length: 25 }, (_, i) => ({
    x: 100 + (i % 5) * 200 + Math.random() * 50,
    y: 100 + Math.floor(i / 5) * 150 + Math.random() * 50,
    size: 4 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  const connections: Array<[number, number]> = [];
  nodes.forEach((_, i) => {
    if (i % 5 < 4) connections.push([i, i + 1]);
    if (i < 20) connections.push([i, i + 5]);
    if (i % 5 < 4 && i < 20) connections.push([i, i + 6]);
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {/* Neural network connections */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Neural network nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: node.delay,
            }}
          />
        ))}

        {/* Data flow pulses */}
        {connections.slice(0, 10).map(([from, to], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2"
            fill="hsl(var(--primary))"
            animate={{
              cx: [nodes[from].x, nodes[to].x],
              cy: [nodes[from].y, nodes[to].y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Skill bubbles */}
      {['Python', 'ML', 'AI', 'Data', 'Cloud'].map((skill, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-sm text-primary/10"
          style={{
            left: `${10 + i * 18}%`,
            top: `${70 + (i % 2) * 15}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}
