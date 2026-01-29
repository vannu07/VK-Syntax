import { motion } from 'framer-motion';

// Communication / connection themed background for Contact page
export default function ContactBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ripple effects from center */}
      {[1, 2, 3, 4, 5].map((ring, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
          style={{
            width: ring * 200,
            height: ring * 200,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Flying message icons */}
      {[
        { icon: '✉️', startX: -50, endX: '100%', y: '20%', duration: 12 },
        { icon: '💬', startX: '100%', endX: -50, y: '40%', duration: 15 },
        { icon: '📧', startX: -50, endX: '100%', y: '60%', duration: 10 },
        { icon: '🔔', startX: '100%', endX: -50, y: '80%', duration: 18 },
      ].map((msg, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-15"
          style={{ top: msg.y }}
          animate={{
            x: [msg.startX, msg.endX],
          }}
          transition={{
            duration: msg.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {msg.icon}
        </motion.div>
      ))}

      {/* Connection dots */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 50 + Math.cos(angle) * 35;
          const y = 50 + Math.sin(angle) * 35;
          return (
            <motion.circle
              key={i}
              cx={`${x}%`}
              cy={`${y}%`}
              r="4"
              fill="hsl(var(--primary))"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}

        {/* Connection lines to center */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 50 + Math.cos(angle) * 35;
          const y = 50 + Math.sin(angle) * 35;
          return (
            <motion.line
              key={`line-${i}`}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          );
        })}
      </svg>

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
