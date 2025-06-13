import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiGlobe, FiCode, FiDatabase, FiLayout, FiTool } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { personalInfo, skills } from "../data/portfolioData.jsx";

const AboutPage = () => {
  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [activeTab, setActiveTab] = useState('languages');

  const categories = [
    {
      id: 'languages',
      label: 'Languages',
      icon: <FiCode />,
      data: skills.programmingLanguages
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: <FiLayout />,
      data: skills.frontend
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: <FiCode />,
      data: skills.backend
    },
    {
      id: 'databases',
      label: 'Databases',
      icon: <FiDatabase />,
      data: skills.databases
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: <FiTool />,
      data: skills.tools
    }
  ];

  const socialLinks = [
    { icon: FiGithub, url: personalInfo.socialLinks.github },
    { icon: FiLinkedin, url: personalInfo.socialLinks.linkedin },
    { icon: FiTwitter, url: personalInfo.socialLinks.twitter },
    { icon: FiMail, url: `mailto:${personalInfo.email}` }
  ];

  return (
    <main className="relative min-h-screen bg-background pt-20 pb-16" role="main">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background/90" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-64 h-64 -translate-x-1/2 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 translate-x-1/2 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          aria-labelledby="about-heading"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4"
            >
              About Me
            </h1>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Passionate Full Stack Developer crafting seamless digital experiences
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            {/* Profile Card */}
            <div className="bg-background-light/10 backdrop-blur-md rounded-2xl p-6 border border-neon-cyan/20">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full animate-spin-slow opacity-20" />
                  <img
                    src="https://avatars.githubusercontent.com/u/116152141?v=4"
                    alt="Dev Mulkalwar"
                    className="rounded-full w-full h-full object-cover border-4 border-background relative z-10"
                  />
                </div>
                <h2 className="text-2xl font-bold text-primary-text mb-2">
                  {personalInfo.fullName}
                </h2>
                <p className="text-neon-cyan mb-4">Full Stack Developer</p>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background-light/20 text-neon-cyan hover:bg-neon-cyan hover:text-background transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-6">
              {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-primary-text leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          aria-labelledby="education-heading"
        >
          <motion.h2
            variants={itemVariants}
            id="education-heading"
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
          >
            Education
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {personalInfo.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background-light/10 backdrop-blur-md rounded-xl p-6 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-cyan/10">
                    <FaGraduationCap className="text-2xl text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-text mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-neon-cyan mb-1">{edu.level}</p>
                    <p className="text-secondary-text flex items-center gap-2">
                      <FiGlobe />
                      {edu.institution}
                    </p>
                    {edu.year && (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm bg-neon-cyan/10 text-neon-cyan">
                        {edu.year}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="py-12 md:py-16 px-4 bg-background-dark/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Technical Expertise
            </motion.h2>
            
            <div className="bg-glassmorphic backdrop-blur-xl rounded-2xl p-4 md:p-8 border border-neon-cyan/20 shadow-cyan-glow">
              {/* Category Tabs - Fixed outline and padding */}
              <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-6 gap-2 md:gap-3 md:justify-center">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-full border outline-none ${
                      activeTab === category.id
                        ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan"
                        : "border-neon-cyan/30 text-secondary-text hover:bg-background-light/20 hover:border-neon-cyan"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.icon}
                    <span className="text-sm md:text-base">{category.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Skills Grid - Adjusted for 2 columns on mobile */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6"
                >
                  {categories
                    .find((c) => c.id === activeTab)
                    ?.data.map((skill, index) => {
                      // Adjust radius for different screen sizes
                      const radius = window.innerWidth < 640 ? 35 : 40;
                      const circumference = 2 * Math.PI * radius;
                      const progressValue = skill.level === "Advanced" 
                        ? 90 
                        : skill.level === "Intermediate" 
                          ? 70 
                          : 50;
                      const dashoffset = circumference - (progressValue / 100) * circumference;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-glassmorphic backdrop-blur-sm p-4 md:p-6 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/40 transition-colors flex flex-col items-center justify-center"
                          whileHover={{ y: -5 }}
                        >
                          {/* Adjust circular progress size for mobile */}
                          <div className="relative w-16 h-16 md:w-24 md:h-24 mb-3">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90">
                              {/* Background circle */}
                              <circle 
                                cx="50" 
                                cy="50" 
                                r={radius} 
                                stroke="rgba(0, 255, 255, 0.1)" 
                                strokeWidth="8" 
                                fill="none" 
                              />
                              {/* Progress circle */}
                              <circle 
                                cx="50" 
                                cy="50" 
                                r={radius} 
                                stroke="url(#gradient)" 
                                strokeWidth="8" 
                                fill="none" 
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={dashoffset}
                              />
                              {/* Define gradient */}
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#00ffff" />
                                  <stop offset="100%" stopColor="#bf00ff" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl">
                              <skill.icon/>
                            </div>
                          </div>
                          
                          <h4 className="font-semibold text-base md:text-lg text-primary-text text-center">{skill.name}</h4>
                          <span className="text-xs md:text-sm text-neon-cyan mt-1 md:mt-2">{skill.level}</span>
                        </motion.div>
                      );
                    })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;

/* Global Styles */
<style>{`
  .bg-glassmorphic {
    background: rgba(16, 24, 39, 0.6);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .shadow-cyan-glow {
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.1);
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .animate-bounce {
    animation: bounce 1.5s infinite;
  }

  @keyframes spin-slow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }
`}</style>