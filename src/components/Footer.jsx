import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Social Icons Component with animations
const SocialIcons = ({ className }) => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/devmulkalwar", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/devmulkalwar", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/devmulkalwar", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com/devmulkalwar", label: "Instagram" },
  ];

  return (
    <div className={className}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-10 h-10 rounded-full flex items-center justify-center text-neon-cyan hover:text-background border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan transition-all duration-300"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

const Footer = ({ navLinks = [] }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-background/80 backdrop-blur-lg border-t border-neon-cyan/20 pt-12 pb-6">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
      <div aria-hidden="true" className="absolute -top-10 left-1/4 w-32 h-32 bg-neon-cyan/5 rounded-full blur-xl"></div>
      <div aria-hidden="true" className="absolute -top-10 right-1/4 w-32 h-32 bg-neon-purple/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand Section - 4 columns */}
          <motion.div className="md:col-span-4 space-y-4" variants={itemVariants}>
            <div className="relative">
              <div aria-hidden="true" className="absolute -top-4 -left-4 w-16 h-16 bg-neon-cyan/5 rounded-full blur-lg"></div>
              <motion.div 
                className="flex items-center gap-3 relative z-10"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30">
                  <FaRocket className="text-neon-cyan text-lg" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  Dev Mulkalwar
                </h3>
              </motion.div>
            </div>
            
            <p className="text-secondary-text pl-3 border-l-2 border-neon-cyan/30">
              Transforming ideas into exceptional digital experiences that stand out in today's competitive landscape.
            </p>
            
            <motion.a
              href="mailto:devmulkalwar95@gmail.com"
              className="inline-flex items-center gap-2 text-secondary-text hover:text-neon-cyan group transition-colors mt-4"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-neon-cyan group-hover:animate-pulse" aria-hidden="true" />
              <span className="underline decoration-neon-cyan/30 underline-offset-4 hover:decoration-neon-cyan">
                devmulkalwar95@gmail.com
              </span>
            </motion.a>
          </motion.div>
          
          {/* Navigation Links - 4 columns */}
          <motion.div className="md:col-span-4" variants={itemVariants}>
            <div className="relative">
              <div aria-hidden="true" className="absolute -top-4 -left-4 w-16 h-16 bg-neon-purple/5 rounded-full blur-lg"></div>
              <h4 className="text-lg font-semibold text-neon-cyan mb-5 relative z-10">Quick Links</h4>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.path || index}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (index * 0.05) }}
                >
                  <Link
                    to={link.path}
                    className="text-secondary-text hover:text-neon-cyan flex items-center gap-2 group transition-colors"
                  >
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50 group-hover:bg-neon-cyan transition-colors"></span>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Section - 4 columns */}
          <motion.div className="md:col-span-4 flex flex-col items-start md:items-end" variants={itemVariants}>
            <div className="relative mb-5 w-full md:text-right">
              <div aria-hidden="true" className="absolute -top-4 -right-4 md:-right-4 w-16 h-16 bg-neon-cyan/5 rounded-full blur-lg"></div>
              <h4 className="text-lg font-semibold text-neon-cyan relative z-10">Let's Connect</h4>
            </div>
            
            <p className="text-secondary-text mb-6 md:text-right">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            
            <SocialIcons className="flex md:justify-end gap-3 mt-2" />
            
            <motion.div 
              className="mt-6 inline-flex items-center gap-2 bg-background-light/10 border border-neon-cyan/20 rounded-lg px-4 py-2"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-secondary-text">Open to new opportunities</span>
              <div aria-hidden="true" className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Divider with gradient */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-neon-cyan">
              <FaHeart className="animate-pulse" aria-hidden="true" />
            </span>
          </div>
        </div>
        
        {/* Copyright section with animation */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-secondary-text">
            © {currentYear} <span className="text-neon-cyan">Dev Mulkalwar</span>. All rights reserved.
          </p>
          <p className="text-sm text-secondary-text/70 mt-2">
            Crafted with passion and modern technologies
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;