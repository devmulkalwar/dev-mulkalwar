import React, { useState } from "react";
import HeroBackground from "./HeroBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import TerminalTypeWriter from "./TerminalTypewriter";
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
    <section className="min-h-screen flex items-center justify-center relative">
      <HeroBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none"></div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 z-10 relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glitch-wrapper mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="glitch text-sm font-mono text-neon-cyan/80"
              data-text="DEVELOPER · PROBLEM SOLVER · CREATOR"
            >
              DEVELOPER · PROBLEM SOLVER · STUDENT
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              {personalInfo.fullName}
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-8 h-18"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TerminalTypeWriter
              text={personalInfo.tagline}
              speed={30}
              className="text-secondary-text "
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mt-8 mb-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/projects">
              <button className="px-6 py-3 bg-neon-cyan text-background font-medium rounded-md hover:bg-neon-purple transition-colors duration-300 flex items-center gap-2">
                <span>Explore My Work</span>
                <span className="w-5 h-5 rounded-full bg-background text-neon-cyan flex items-center justify-center text-sm">
                  →
                </span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-3 border border-neon-cyan text-neon-cyan font-medium rounded-md hover:bg-neon-cyan/10 transition-colors duration-300">
                Get In Touch
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-4"
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

      {/* Scroll down icon with conditional rendering based on scroll position */}
      {!isScrolledPastHero && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-neon-cyan cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleScrollDown}
        >
          <FaChevronDown className="text-2xl" />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;