import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import * as Icons from "react-icons/fa"
const SocialIcons = ({ className = '', iconSize = 'md' }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/devmulkalwar',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/dev-mulkalwar-b2745a258/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter/X',
      icon: <FaTwitter />,
      url: 'https://x.com/dev_mulkalwar',
      color: 'hover:text-sky-400',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/dev_mulkalwar/',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/dev.mulkalwar',
      color: 'hover:text-blue-500',
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/u/devmulkalwar95/',
      color: 'hover:text-yellow-400',
    },
  ];

  // Size classes based on the iconSize prop
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const sizeClass = sizeClasses[iconSize] || sizeClasses.md;

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClass} ${social.color} transition-colors duration-300`}
          whileHover={{ 
            scale: 1.2, 
            filter: 'drop-shadow(0 0 8px currentColor)' 
          }}
          whileTap={{ scale: 0.9 }}
          aria-label={social.name}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons; 