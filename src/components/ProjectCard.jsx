import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-background-light/10 border border-neon-cyan/20 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Preview */}
      <div className="h-48 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/10 relative overflow-hidden">
        {/* Animated code pattern background */}
        <div className="absolute inset-0 opacity-20 font-mono text-[8px] leading-tight p-2 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {`import { useState, useEffect } from 'react'; function ${project.title.replace(
                /\s+/g,
                ""
              )}() { /* ${project.description} */ }`}
            </div>
          ))}
        </div>

        {/* Project Initial/Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center border-2 border-neon-cyan text-4xl font-bold text-neon-cyan">
            {project.title.charAt(0)}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neon-cyan mb-2 group-hover:text-neon-purple transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-secondary-text text-sm mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <motion.span
              key={idx}
              className="px-2 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-neon-cyan text-background text-sm font-medium rounded-md hover:bg-neon-purple transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 border border-neon-cyan text-neon-cyan text-sm font-medium rounded-md hover:bg-neon-cyan/10 transition-colors duration-300"
          >
            <FaGithub className="inline mr-1" /> GitHub
          </a>
        </div>
      </div>

      {/* Animated Border on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-slide-right" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent animate-slide-down" />
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-neon-cyan to-transparent animate-slide-left" />
            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-neon-purple to-transparent animate-slide-up" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;