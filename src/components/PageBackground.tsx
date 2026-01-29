import { useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';

const HomeBackground = lazy(() => import('./backgrounds/HomeBackground'));
const AboutBackground = lazy(() => import('./backgrounds/AboutBackground'));
const ProjectsBackground = lazy(() => import('./backgrounds/ProjectsBackground'));
const SkillsBackground = lazy(() => import('./backgrounds/SkillsBackground'));
const ExperienceBackground = lazy(() => import('./backgrounds/ExperienceBackground'));
const CertificationsBackground = lazy(() => import('./backgrounds/CertificationsBackground'));
const ContactBackground = lazy(() => import('./backgrounds/ContactBackground'));

export default function PageBackground() {
  const location = useLocation();
  const path = location.pathname;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 50, damping: 20, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20, mass: 0.5 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 16;
      const offsetY = (event.clientY / innerHeight - 0.5) * 16;
      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  const getBackground = () => {
    switch (path) {
      case '/':
        return <HomeBackground />;
      case '/about':
        return <AboutBackground />;
      case '/projects':
        return <ProjectsBackground />;
      case '/skills':
        return <SkillsBackground />;
      case '/experience':
        return <ExperienceBackground />;
      case '/certifications':
        return <CertificationsBackground />;
      case '/contact':
        return <ContactBackground />;
      default:
        return <HomeBackground />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ x: smoothX, y: smoothY }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.12), transparent 55%), radial-gradient(circle at 80% 30%, hsl(var(--glow-secondary) / 0.08), transparent 60%)',
          }}
          animate={{
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <Suspense fallback={null}>
          {getBackground()}
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}
