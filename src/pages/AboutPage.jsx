import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiCode, FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiAward, FiGlobe ,FiDatabase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { personalInfo, skills } from "../data/portfolioData.jsx";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [visibleBio, setVisibleBio] = useState(1);
  const bioParagraphs = personalInfo.bio.split("\n\n").map((p) => p.trim());

  useEffect(() => {
    if (visibleBio < bioParagraphs.length) {
      const timer = setTimeout(() => setVisibleBio((prev) => prev + 1), 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleBio, bioParagraphs.length]);

  // Personal info data
  const personalInfoData = {
    name: "Dev Mulkalwar",
    tagline: "Full Stack Developer & UI/UX Enthusiast",
    email: "dev.mulkalwar@example.com",
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/devmulkalwar",
        icon: FiGithub,
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/devmulkalwar",
        icon: FiLinkedin,
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/devmulkalwar",
        icon: FiTwitter,
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/devmulkalwar",
        icon: FiInstagram,
      },
    ],
  };

  // Education Section Component
  const EducationSection = () => (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Education Journey
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {personalInfo.education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-glassmorphic backdrop-blur-xl p-6 rounded-2xl border border-neon-cyan/20 shadow-cyan-glow hover:shadow-lg hover:border-neon-cyan/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-neon-cyan/10">
                  <FaGraduationCap className="text-2xl text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                    {edu.degree}
                  </h4>
                  {edu.year && (
                    <span className="text-sm px-2 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan mt-1 inline-block">
                      {edu.year}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-secondary-text ml-12">{edu.level}</p>
              {edu.institution && (
                <p className="text-secondary-text mt-3 flex items-center gap-2 ml-12">
                  <FiGlobe className="text-neon-cyan" /> {edu.institution}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Skills Component with Circular Progress
  const SkillsSection = () => {
    const categories = [
      {
        id: "languages",
        label: "Languages",
        icon: <FiCode />,
        data: skills.programmingLanguages,
      },
      {
        id: "frontend",
        label: "Frontend",
        icon: <FiUser />,
        data: skills.frontend,
      },
      {
        id: "backend",
        label: "Backend",
        icon: <FiAward />,
        data: skills.backend,
      },
      {
        id: "databases",
        label: "Databases",
        icon: <FiDatabase />,
        data: skills.databases,
      },
      { id: "tools", label: "Tools", icon: <FiCode />, data: skills.tools },
    ];

    return (
      <section className="py-16 px-4 md:px-8 bg-background-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Technical Expertise
          </motion.h2>
          
          <div className="bg-glassmorphic backdrop-blur-xl rounded-2xl p-8 border border-neon-cyan/20 shadow-cyan-glow">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all ${
                    activeTab === category.id
                      ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan"
                      : "border-neon-cyan/30 text-secondary-text hover:bg-background-light/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Skills Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
              >
                {categories
                  .find((c) => c.id === activeTab)
                  ?.data.map((skill, index) => {
                    // Calculate stroke-dasharray and stroke-dashoffset for circular progress
                    const radius = 40;
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
                        className="bg-glassmorphic backdrop-blur-sm p-6 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/40 transition-colors flex flex-col items-center justify-center"
                        whileHover={{ y: -5 }}
                      >
                        {/* Circular Progress */}
                        <div className="relative w-24 h-24 mb-3">
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
                          {/* Center icon */}
                          <div 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl"
                            style={{ color: skill.color }}
                          >
                            <skill.icon/>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-lg text-primary-text">{skill.name}</h4>
                        <span className="text-sm text-neon-cyan mt-2">{skill.level}</span>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background text-primary-text">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background/90" />
      
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-neon-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-neon-purple/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="pt-24 pb-12">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-white bg-clip-text text-transparent">
                Crafting Digital Experiences
              </span>
            </motion.h1>

            <div className="max-w-7xl mx-auto bg-glassmorphic backdrop-blur-xl rounded-2xl p-8 border border-neon-cyan/20 shadow-cyan-glow overflow-hidden">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Profile Section (Left) */}
                <div className="md:col-span-1">
                  <motion.div
                    className="relative mx-auto mb-6 w-48 h-48 rounded-full border-4 border-neon-cyan/30 overflow-hidden shadow-2xl"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/116152141?v=4"
                      alt={personalInfoData.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                      {personalInfoData.name}
                    </h2>
                    <p className="text-secondary-text mb-4">{personalInfoData.tagline}</p>

                    {/* Email Button */}
                    <motion.div
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-background-light/10 hover:bg-background-light/20 border border-neon-cyan/30 cursor-pointer mb-6"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => navigator.clipboard.writeText(personalInfoData.email)}
                    >
                      <FiMail className="text-neon-cyan" />
                      <span className="text-primary-text">{personalInfoData.email}</span>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mt-4">
                      {personalInfoData.social.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-background-light/10 border border-neon-cyan/30 text-neon-cyan hover:text-white hover:bg-neon-cyan/70 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            title={social.platform}
                          >
                            <Icon size={20} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bio Section (Right) */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-neon-cyan/10">
                      <FiUser className="text-2xl text-neon-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                      My Development Journey
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {bioParagraphs.map((para, index) => (
                      <AnimatePresence key={index}>
                        {index < visibleBio && (
                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="text-primary-text pl-4 border-l-2 border-neon-cyan/30"
                          >
                            {para}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    ))}
                  </div>

                  {visibleBio < bioParagraphs.length && (
                    <motion.div
                      className="mt-6 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <button
                        onClick={() => setVisibleBio(bioParagraphs.length)}
                        className="px-6 py-2 rounded-full bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/30 text-neon-cyan transition-all flex items-center gap-2 mx-auto"
                      >
                        <span>Reveal Full Story</span>
                        <FiAward className="animate-bounce" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-20">
            <EducationSection />
          </section>

          {/* Skills Section */}
          <section className="py-20">
            <SkillsSection />
          </section>
        </div>
      </main>
    </div>
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
`}</style>