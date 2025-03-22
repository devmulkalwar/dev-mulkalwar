import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  direction = 'up' // 'up', 'down', 'left', 'right' or 'none'
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Define initial and animate states based on direction
  const getDirectionAnimations = () => {
    switch (direction) {
      case 'up':
        return { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'down':
        return { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'left':
        return { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'right':
        return { initial: { x: 50, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'none':
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
      default:
        return { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
    }
  };

  const { initial, animate } = getDirectionAnimations();

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={controls}
      variants={{
        initial: initial,
        animate: {
          ...animate,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1] // Equivalent to cubic-bezier(.25,.1,.25,1)
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 