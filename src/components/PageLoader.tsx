import { motion } from 'framer-motion';

interface PageLoaderProps {
  isLoading: boolean;
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
    >
      <div className="relative">
        {/* Animated logo */}
        <motion.div
          className="text-5xl font-bold text-gradient glow-text"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          VK
        </motion.div>

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary"
            style={{
              top: '50%',
              left: '50%',
              marginTop: -6,
              marginLeft: -6,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.2,
            }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-primary"
              style={{
                transform: `translateX(${40 + i * 10}px)`,
                boxShadow: '0 0 10px hsl(190 100% 50%), 0 0 20px hsl(190 100% 50% / 0.5)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Loading text */}
      <motion.p
        className="absolute bottom-1/3 text-muted-foreground font-mono text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}
