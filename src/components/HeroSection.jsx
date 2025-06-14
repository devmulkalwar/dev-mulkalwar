import React, { useState } from "react";
import HeroBackground from "./HeroBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import TerminalTypeWriter from "./TerminalTypeWriter.jsx";
import { Link } from "react-router-dom";
import { FaChevronDown, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  // State to track if user has scrolled past the hero section
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  
  // Effect to listen for scroll events
  React.useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the hero section (viewport height)
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Function to handle scroll down click
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    // Optionally set scrolled state immediately for faster UI response
    setIsScrolledPastHero(true);
  };

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-20">
        <motion.div style={{ opacity, scale }} className="w-full max-w-4xl mx-auto">
          <div className="space-y-6 text-left">
            {/* Glitch text */}
            <motion.div
              className="glitch-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glitch text-xs sm:text-sm font-mono text-neon-cyan/80"
                  data-text="DEVELOPER · PROBLEM SOLVER · CREATOR">
                DEVELOPER · PROBLEM SOLVER · STUDENT
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
                {personalInfo.fullName}
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="text-lg sm:text-xl md:text-2xl min-h-[4rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TerminalTypeWriter
                text={personalInfo.tagline}
                speed={30}
                className="text-secondary-text"
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 bg-neon-cyan text-background font-medium rounded-md hover:bg-neon-purple transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>Explore My Work</span>
                  <span className="w-5 h-5 rounded-full bg-background text-neon-cyan flex items-center justify-center text-sm">
                    →
                  </span>
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 border border-neon-cyan text-neon-cyan font-medium rounded-md hover:bg-neon-cyan/10 transition-colors duration-300">
                  Get In Touch
                </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neon-cyan/50 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neon-cyan/50 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neon-cyan/50 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Fixed positioning */}
      {!isScrolledPastHero && (
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleScrollDown}
        >
          <button 
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-neon-cyan/30 
                     hover:bg-background hover:border-neon-cyan transition-all duration-300 cursor-pointer group"
          >
            <FaChevronDown className="text-2xl text-neon-cyan group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;