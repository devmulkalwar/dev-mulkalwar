import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import SocialIcons from '../components/SocialIcons';
import Footer from '../components/Footer';
import * as Icons from "react-icons/fa"
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary-text font-poppins">
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow relative z-10">
      
          {children}
      
      </main>
      <ScrollToTop />
      {/* Footer */}
      <Footer navLinks={navLinks}/>
    </div>
  );
};

export default MainLayout;