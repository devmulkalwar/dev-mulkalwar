import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon: Icon, color, level = 'Intermediate' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Define color classes based on the color prop
  const colorClasses = {
    cyan: 'from-neon-cyan to-electric-blue',
    purple: 'from-neon-purple to-soft-pink',
    mixed: 'from-neon-cyan to-neon-purple',
  };

  const gradientClass = colorClasses[color] || colorClasses.cyan;
  
  return (
    <motion.div
      className="relative w-full h-28 md:h-32 perspective-1000"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of the card */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 rounded-lg bg-background-light/40 backdrop-blur-sm border border-neon-cyan/20 shadow-lg transform-3d-front`}
        >
          <div className={` mb-2  bg-gradient-to-r ${gradientClass}`} >< Icon className={`text-3xl text-gradient-to-r ${gradientClass}`} /></div>
          <h3 className="text-lg font-exo font-semibold text-primary-text">{name}</h3>
        </div>

        {/* Back of the card */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 rounded-lg bg-background-light/40 backdrop-blur-sm border border-neon-purple/20 shadow-lg transform-3d-back`}
        >
          <h4 className="text-lg font-exo font-bold text-primary-text mb-2">Proficiency</h4>
          <div className="w-full h-3 bg-background rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${gradientClass}`}
              initial={{ width: 0 }}
              animate={{ 
                width: level === 'Beginner' ? '40%' : level === 'Intermediate' ? '70%' : '90%' 
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-sm text-primary-text mt-2">{level}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard; 