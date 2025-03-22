import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FaChevronDown, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personalInfo, skills, projects } from "../data/portfolioData.jsx";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import * as THREE from "three";
import SkillsSection from "../components/SkillsSection.jsx";
import TerminalTypewriter from "../components/TerminalTypewriter.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import * as Icons from "react-icons/fa";
import HeroSection from "../components/HeroSection.jsx";
import HeroBackground from "../components/HeroBackground.jsx";
// Enhanced HomePage Component
const HomePage = () => {
  const featuredProjects = projects.slice(0, 3);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className=" bg-background text-primary-text overflow-hidden">
      {/* Hero Section with 3D Background */}
      
      <HeroSection/>
      {/* About Me Terminal Section */}
      <section className="max-w-6xl py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg overflow-hidden border border-neon-cyan/30 backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="bg-background-light/20 p-3 border-b border-neon-cyan/30 flex items-center">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="font-mono text-sm text-neon-cyan/80">
                  ~/about-me
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 md:p-6 bg-background-light/10 font-mono text-sm md:text-base">
                <div className="mb-4">
                  <span className="text-neon-cyan">~/about-me $ </span>
                  <span className="text-white">cat bio.txt</span>
                </div>

                <p className="text-secondary-text mb-4 leading-relaxed">
                  {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                    <React.Fragment key={i}>
                      {paragraph}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
                </p>

                <div className="text-neon-cyan animate-pulse">
                  ~/about-me ${" "}
                  <span className="inline-block w-2 h-4 bg-neon-cyan ml-1 animate-blink"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with Hexagon Grid */}
      <SkillsSection />

      {/* Featured Projects Section */}
      <section className="max-w-6xl py-10 relative mx-auto" id="projects">
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-neon-cyan/30"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="h-px w-12 bg-neon-cyan/30"></div>
            </div>
            <p className="text-secondary-text text-center mt-4 max-w-2xl mx-auto">
              A showcase of my recent work - from web applications to
              interactive experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/projects">
              <button className="px-6 py-3 border border-neon-cyan text-neon-cyan font-medium rounded-md hover:bg-neon-cyan/10 transition-colors duration-300 group">
                <span>View All Projects</span>
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto p-8 md:p-12 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-background-light/5 backdrop-blur-sm border border-neon-cyan/20 rounded-lg z-0">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
            </div>

            {/* CTA Content */}
            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-neon-cyan/10 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              >
                <span className="text-2xl text-neon-cyan">✉️</span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to Collaborate?
              </motion.h2>

              <motion.p
                className="text-secondary-text text-center mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </motion.p>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-neon-cyan text-background font-medium rounded-md hover:bg-neon-purple transition-colors duration-300 flex items-center gap-2 group">
                    <span>Let's Talk</span>
                    <span className="w-6 h-6 rounded-full bg-background text-neon-cyan flex items-center justify-center text-sm group-hover:rotate-45 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS for custom animations and shapes */}
      <style>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes slide-right {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100%);
          }
        }

        @keyframes slide-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(-100%);
          }
        }

        .animate-slide-right {
          animation: slide-right 2s linear infinite;
        }

        .animate-slide-down {
          animation: slide-down 2s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 2s linear infinite;
        }

        .animate-slide-up {
          animation: slide-up 2s linear infinite;
        }

        .glitch {
          position: relative;
          text-shadow: 0.05em 0 0 rgba(0, 255, 255, 0.75),
            -0.05em -0.025em 0 rgba(255, 0, 255, 0.75);
          animation: glitch 1s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100;
          animation: glitch 1s infinite;
        }

        .glitch::before {
          left: 0.05em;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          animation: glitch-top 1s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -0.05em;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          animation: glitch-bottom 1s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 rgba(0, 255, 255, 0.75),
              -0.05em -0.025em 0 rgba(255, 0, 255, 0.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(0, 255, 255, 0.75),
              -0.05em -0.025em 0 rgba(255, 0, 255, 0.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(0, 255, 255, 0.75),
              0.025em 0.025em 0 rgba(255, 0, 255, 0.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(0, 255, 255, 0.75),
              0.025em 0.025em 0 rgba(255, 0, 255, 0.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(0, 255, 255, 0.75),
              0.05em 0 0 rgba(255, 0, 255, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 255, 0.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(0, 255, 255, 0.75),
              0.05em 0 0 rgba(255, 0, 255, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 255, 0.75);
          }
          100% {
            text-shadow: -0.025em 0 0 rgba(0, 255, 255, 0.75),
              -0.025em -0.025em 0 rgba(255, 0, 255, 0.75);
          }
        }

        @keyframes glitch-top {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-bottom {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
