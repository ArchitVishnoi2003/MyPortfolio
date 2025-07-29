import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Add event listeners for hover effects
    const buttons = document.querySelectorAll('button, a, .cursor-hover');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      mixBlendMode: 'difference' as const,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={isHovered ? 'hover' : 'default'}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-300 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;