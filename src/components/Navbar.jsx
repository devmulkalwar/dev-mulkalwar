import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaRocket, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  // Detect scroll for enhanced header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 shadow-lg shadow-neon-cyan/10 backdrop-blur-md py-2' 
          : 'bg-background/80 backdrop-blur-sm py-4'
      } border-b border-neon-cyan/20`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <motion.div 
              className="flex items-center gap-2 text-2xl font-exo font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-purple p-1.5 rounded-lg"
              >
                <FaRocket className="text-background h-5 w-5" />
              </motion.div>
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Dev Mulkalwar
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  className={`relative py-2 px-4 font-medium rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 text-neon-cyan' 
                      : 'text-primary-text hover:text-neon-cyan hover:bg-background-light/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.title}
                    {isActive(link.path) && <FaChevronRight className="text-xs opacity-70" />}
                  </span>
                  
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navigation-underline"
                      className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden relative p-2 rounded-lg overflow-hidden"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 opacity-0 hover:opacity-100 transition-opacity" />
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-neon-cyan relative z-10" />
            ) : (
              <FaBars className="h-6 w-6 text-neon-cyan relative z-10" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden w-full bg-background/95 backdrop-blur-xl border-b border-neon-cyan/20"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        className={`p-3 rounded-lg transition-colors ${
                          isActive(link.path)
                            ? 'bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 text-neon-cyan'
                            : 'hover:bg-background-light/20 text-primary-text'
                        }`}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex justify-between items-center">
                          {link.title}
                          <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: isActive(link.path) ? 1 : 0, x: isActive(link.path) ? 0 : -5 }}
                          >
                            <FaChevronRight className="text-neon-cyan text-xs" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;