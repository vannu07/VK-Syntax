import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Timeline / journey path animation for Experience page
export default function ExperienceBackground() {
  const { scrollYProgress } = useScroll();
  const pulse = useSpring(useTransform(scrollYProgress, [0, 1], [0.15, 0.4]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated timeline path */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <motion.path
          d="M 100 0 C 100 200, 300 200, 300 400 C 300 600, 100 600, 100 800 C 100 1000, 300 1000, 300 1200"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          strokeDasharray="20 10"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            strokeDashoffset: [0, -100],
          }}
          transition={{
            pathLength: { duration: 3, ease: 'easeOut' },
            strokeDashoffset: { duration: 5, repeat: Infinity, ease: 'linear' },
          }}
        />

        {/* Milestone markers */}
        {[200, 400, 600, 800, 1000].map((y, i) => (
          <motion.circle
            key={i}
            cx={i % 2 === 0 ? 100 : 300}
            cy={y}
            r="8"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* Floating work icons */}
      {[
        { icon: '💼', x: '75%', y: '15%' },
        { icon: '📈', x: '80%', y: '35%' },
        { icon: '🎯', x: '70%', y: '55%' },
        { icon: '🚀', x: '85%', y: '75%' },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-15"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Gradient sweep */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, transparent 50%, hsl(var(--primary) / 0.05) 100%)',
          opacity: pulse,
        }}
      />
    </div>
  );
}
