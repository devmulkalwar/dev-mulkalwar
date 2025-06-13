import React from "react";
import { motion } from "framer-motion";
import { personalInfo, projects } from "../data/portfolioData.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <div className="min-h-screen">
        <HeroSection />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <section className="py-12 md:py-24" aria-labelledby="about-heading">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="about-heading" className="sr-only">
                About Me
              </h2>
              <div className="rounded-2xl overflow-hidden border border-neon-cyan/30 backdrop-blur-sm">
                <div className="bg-background-light/20 p-4 border-b border-neon-cyan/30 flex items-center">
                  <div className="flex gap-2 mr-4">
                    {["bg-red-400", "bg-yellow-400", "bg-green-400"].map(
                      (color, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${color}`}
                          aria-hidden="true"
                        />
                      )
                    )}
                  </div>
                  <div className="font-mono text-sm text-neon-cyan/80">
                    ~/about-me
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-background-light/10 font-mono text-base md:text-lg">
                  <div className="mb-4 flex items-center">
                    <span className="text-neon-cyan">~/about-me $ </span>
                    <span className="text-white ml-2">cat bio.txt</span>
                  </div>

                  <div className="space-y-4 text-secondary-text">
                    {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="text-neon-cyan mt-6 flex items-center">
                    <span>~/about-me $ </span>
                    <span
                      className="w-4 h-6 bg-neon-cyan/80 ml-2 animate-pulse"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section
            className="py-12 md:py-24"
            aria-labelledby="skills-heading"
          >
            <SkillsSection />
          </section>

          {/* Featured Projects Section */}
          <section
            className="py-12 md:py-24"
            aria-labelledby="projects-heading"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center"
              >
                <div
                  className="h-px w-12 bg-neon-cyan/30"
                  aria-hidden="true"
                />
                <h2
                  id="projects-heading"
                  className="text-3xl md:text-4xl font-bold mx-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
                >
                  Featured Work
                </h2>
                <div
                  className="h-px w-12 bg-neon-cyan/30"
                  aria-hidden="true"
                />
              </motion.div>

              <p className="mt-4 text-secondary-text max-w-2xl mx-auto">
                Explore a selection of my recent projects and technical experiments
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* View All Projects CTA */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-neon-cyan text-background font-medium 
                         hover:bg-neon-purple transition-all duration-300 group focus:outline-none focus:ring-2 
                         focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-background">
                View All Projects
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </section>

          {/* Contact CTA Section */}
          <section
            className="py-12 md:py-24 mb-16"
            aria-labelledby="contact-heading"
          >
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-2xl p-8 md:p-12 bg-background-light/10 border border-neon-cyan/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-neon-purple/5 pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  Let's Work Together
                </h2>
                <p className="text-secondary-text mb-8 max-w-2xl mx-auto">
                  Have a project in mind? I'm always open to discussing new opportunities and ideas.
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple 
                           text-white font-medium transition-all duration-300 hover:scale-105 focus:outline-none 
                           focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-background">
                  Start a Conversation
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
