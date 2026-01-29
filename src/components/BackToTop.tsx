import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass glow-border hover-glow flex items-center justify-center group"
          aria-label="Back to top"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="hsl(190 100% 50% / 0.2)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="hsl(190 100% 50%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={125.6}
              strokeDashoffset={125.6 - (scrollProgress / 100) * 125.6}
              className="transition-all duration-150"
            />
          </svg>
          
          <ArrowUp className="h-5 w-5 text-primary group-hover:translate-y-[-2px] transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
