import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const rippleId = useRef(0);
  const lastPos = useRef<{ x: number; y: number }>({ x: -200, y: -200 });
  
  // Smooth spring physics for fluid movement
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  
  // Multiple layers with different spring configs for parallax water effect
  const layer1X = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.1 });
  const layer1Y = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.1 });
  
  const layer2X = useSpring(mouseX, { stiffness: 250, damping: 35, mass: 0.2 });
  const layer2Y = useSpring(mouseY, { stiffness: 250, damping: 35, mass: 0.2 });
  
  const layer3X = useSpring(mouseX, { stiffness: 200, damping: 40, mass: 0.3 });
  const layer3Y = useSpring(mouseY, { stiffness: 200, damping: 40, mass: 0.3 });
  
  const layer4X = useSpring(mouseX, { stiffness: 150, damping: 45, mass: 0.4 });
  const layer4Y = useSpring(mouseY, { stiffness: 150, damping: 45, mass: 0.4 });
  const intensityMV = useMotionValue(0);
  const intensity = useSpring(intensityMV, { stiffness: 120, damping: 20, mass: 0.2 });
  const opacityLayer4 = useTransform(intensity, v => v * 0.6);
  const opacityLayer3 = useTransform(intensity, v => v * 0.7);
  const opacityLayer2 = useTransform(intensity, v => 0.3 + v * 0.5);
  const opacityLayer1 = useTransform(intensity, v => 0.4 + v * 0.6);
  const bubbleOpacity = useTransform(intensity, v => 0.2 + v * 0.6);
  const causticOpacity = useTransform(intensity, v => 0.1 + v * 0.4);

  useEffect(() => {
    if ('ontouchstart' in window) return;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lastRippleTime = 0;

    const updatePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      const speed = Math.sqrt(dx * dx + dy * dy);
      const normalized = Math.max(0, Math.min(1, speed / 50));
      intensityMV.set(normalized);

      // Create ripples on movement (throttled)
      const now = Date.now();
      if (now - lastRippleTime > 100) {
        lastRippleTime = now;
        const id = rippleId.current++;
        setRipples(prev => [...prev.slice(-5), { id, x: e.clientX, y: e.clientY }]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== id));
        }, 1000);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, intensityMV]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Flow layer A - continuous soft stripes, parallax with cursor */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[98] mix-blend-soft-light"
        style={{
          x: layer2X,
          y: layer2Y,
          opacity: isVisible ? opacityLayer2 : 0,
        }}
      >
        <motion.div
          className="w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: `
              repeating-linear-gradient(
                135deg,
                hsl(200 100% 60% / 0.02) 0px,
                hsl(200 100% 60% / 0.02) 14px,
                transparent 14px,
                transparent 28px
              ),
              radial-gradient(circle at 50% 50%, hsl(210 100% 60% / 0.06), transparent 60%)
            `,
            filter: 'blur(22px)',
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Flow layer B - angled waves for cross-current */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[97] mix-blend-overlay"
        style={{
          x: layer3X,
          y: layer3Y,
          opacity: isVisible ? opacityLayer3 : 0,
        }}
      >
        <motion.div
          className="w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: `
              repeating-linear-gradient(
                30deg,
                hsl(190 100% 55% / 0.03) 0px,
                hsl(190 100% 55% / 0.03) 12px,
                transparent 12px,
                transparent 24px
              ),
              radial-gradient(circle at 60% 40%, hsl(200 100% 50% / 0.05), transparent 60%)
            `,
            filter: 'blur(18px)',
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Layer 4 - Slowest, largest, deepest water layer */}
      <motion.div
        className="fixed pointer-events-none z-[100]"
        style={{
          x: layer4X,
          y: layer4Y,
          opacity: isVisible ? opacityLayer4 : 0,
        }}
      >
        <motion.div
          className="w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(200 80% 60% / 0.04) 0%, hsl(220 70% 50% / 0.02) 40%, transparent 70%)',
            filter: 'blur(30px)',
            borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
          }}
        />
      </motion.div>

      {/* Layer 3 - Medium slow, organic blob */}
      <motion.div
        className="fixed pointer-events-none z-[101]"
        style={{
          x: layer3X,
          y: layer3Y,
          opacity: isVisible ? opacityLayer3 : 0,
        }}
      >
        <motion.div
          className="w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.08, 0.98, 1],
            rotate: [0, -4, 4, 0],
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(190 100% 50% / 0.08) 0%, hsl(210 80% 60% / 0.04) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Layer 2 - Faster, more responsive */}
      <motion.div
        className="fixed pointer-events-none z-[102]"
        style={{
          x: layer2X,
          y: layer2Y,
          opacity: isVisible ? opacityLayer2 : 0,
        }}
      >
        <motion.div
          className="w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            borderRadius: [
              '40% 60% 60% 40% / 60% 40% 60% 40%',
              '60% 40% 40% 60% / 40% 60% 40% 60%',
              '40% 60% 60% 40% / 60% 40% 60% 40%',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.12) 0%, hsl(180 100% 50% / 0.06) 40%, transparent 70%)',
            filter: 'blur(15px)',
          }}
        />
      </motion.div>

      {/* Layer 1 - Core glow, fastest response */}
      <motion.div
        className="fixed pointer-events-none z-[103]"
        style={{
          x: layer1X,
          y: layer1Y,
          opacity: isVisible ? opacityLayer1 : 0,
        }}
      >
        <motion.div
          className="w-[80px] h-[80px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.05, 1],
            borderRadius: [
              '50% 50% 50% 50%',
              '40% 60% 50% 50%',
              '50% 40% 60% 50%',
              '50% 50% 50% 50%',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.1) 30%, transparent 60%)',
            filter: 'blur(8px)',
            boxShadow: '0 0 60px hsl(var(--primary) / 0.15), 0 0 100px hsl(var(--primary) / 0.1)',
          }}
        />
      </motion.div>

      {/* Tiny bubbles floating up */}
      <motion.div
        className="fixed pointer-events-none z-[104]"
        style={{
          x: layer1X,
          y: layer1Y,
          opacity: isVisible ? bubbleOpacity : 0,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + i * 2,
              height: 4 + i * 2,
              left: -20 + i * 10,
              background: `radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.1))`,
              boxShadow: 'inset 0 0 3px hsl(var(--primary) / 0.3)',
            }}
            animate={{
              y: [-20, -60 - i * 15, -20],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Caustic light effect */}
      <motion.div
        className="fixed pointer-events-none z-[100] mix-blend-overlay"
        style={{
          x: layer2X,
          y: layer2Y,
          opacity: isVisible ? causticOpacity : 0,
        }}
      >
        <motion.div
          className="w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: `
              radial-gradient(ellipse at 30% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 70%, hsl(180 100% 60% / 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, hsl(200 100% 70% / 0.08) 0%, transparent 60%)
            `,
            filter: 'blur(10px)',
          }}
        />
      </motion.div>
    </>
  );
}
