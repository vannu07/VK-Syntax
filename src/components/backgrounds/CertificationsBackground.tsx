import { motion } from 'framer-motion';

// Achievement badges / certificates floating animation
export default function CertificationsBackground() {
  const badges = Array.from({ length: 15 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 40 + Math.random() * 30,
    delay: Math.random() * 3,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating certificate shapes */}
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg border border-primary/10"
          style={{
            left: `${badge.x}%`,
            top: `${badge.y}%`,
            width: badge.size,
            height: badge.size * 0.7,
            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, transparent 100%)',
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [-5, 5, -5],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            delay: badge.delay,
            ease: 'easeInOut',
          }}
        >
          {/* Certificate seal */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-primary/20"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: badge.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Star sparkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: 8 + Math.random() * 8,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Achievement icons */}
      {['🏆', '🎖️', '📜', '⭐', '🥇'].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-10"
          style={{
            left: `${15 + i * 18}%`,
            top: `${80 + (i % 2) * 10}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}
