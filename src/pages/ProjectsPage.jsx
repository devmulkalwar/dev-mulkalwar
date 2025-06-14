import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData.jsx';
import { FaSearch, FaSort, FaFilter, FaTimes } from 'react-icons/fa';

const ProjectsPage = () => {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterTech, setFilterTech] = useState('');
  
  // Get unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.techStack))].sort();

  useEffect(() => {
    let filteredProjects = [...projects];
    
    // Apply search filter
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredProjects = filteredProjects.filter(project => 
        project.title.toLowerCase().includes(searchTermLower) || 
        project.description.toLowerCase().includes(searchTermLower) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchTermLower))
      );
    }
    
    // Apply technology filter
    if (filterTech) {
      filteredProjects = filteredProjects.filter(project => 
        project.techStack.includes(filterTech)
      );
    }
    
    // Apply sorting
    if (sortBy === 'newest') {
      filteredProjects.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'oldest') {
      filteredProjects.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'a-z') {
      filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'z-a') {
      filteredProjects.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    setDisplayedProjects(filteredProjects);
  }, [searchTerm, sortBy, filterTech]);

  const clearFilters = () => {
    setSearchTerm('');
    setFilterTech('');
    setSortBy('newest');
  };

  const selectClassName = "w-full bg-background-light/30 text-primary-text border border-neon-cyan/30 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 appearance-none transition-all cursor-pointer hover:border-neon-cyan";
  const optionClassName = "bg-background text-primary-text hover:bg-background-light/50";

  return (
    <div className="min-h-screen bg-background py-24">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background/90" />
      
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2 bg-neon-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 -translate-x-1/2 translate-y-1/2 bg-neon-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="down">
          <h1 className="text-4xl md:text-5xl font-exo font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-center text-secondary-text max-w-2xl mx-auto mb-12">
            A showcase of my work, personal projects, and experiments with various technologies.
          </p>
        </AnimatedSection>

        {/* Filter and Search Controls */}
        <AnimatedSection direction="up" className="mb-12 max-w-4xl mx-auto">
          <div className="rounded-xl p-6 bg-background-light/10 backdrop-blur-sm border border-neon-cyan/20 shadow-lg shadow-neon-purple/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative group">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-cyan" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full bg-background-light/30 text-primary-text border border-neon-cyan/30 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-cyan/70 hover:text-neon-cyan transition-colors"
                  >
                    <FaTimes size={14} />
                  </button>
                )}
              </div>

              {/* Filter by Technology */}
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-cyan" />
                <select
                  className={selectClassName}
                  value={filterTech}
                  onChange={(e) => setFilterTech(e.target.value)}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" className={optionClassName}>All Technologies</option>
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech} className={optionClassName}>
                      {tech}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-neon-cyan">
                  <FaSort size={12} />
                </div>
              </div>

              {/* Sort */}
              <div className="relative">
                <FaSort className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-cyan" />
                <select
                  className={selectClassName}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="newest" className={optionClassName}>Newest First</option>
                  <option value="oldest" className={optionClassName}>Oldest First</option>
                  <option value="a-z" className={optionClassName}>A-Z</option>
                  <option value="z-a" className={optionClassName}>Z-A</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-neon-cyan">
                  <FaSort size={12} />
                </div>
              </div>
            </div>
            
            {/* Active filters display */}
            {(searchTerm || filterTech !== '' || sortBy !== 'newest') && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-secondary-text">Active filters:</span>
                
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="ml-2">
                      <FaTimes size={10} />
                    </button>
                  </span>
                )}
                
                {filterTech && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                    Tech: {filterTech}
                    <button onClick={() => setFilterTech('')} className="ml-2">
                      <FaTimes size={10} />
                    </button>
                  </span>
                )}
                
                {sortBy !== 'newest' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                    Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                    <button onClick={() => setSortBy('newest')} className="ml-2">
                      <FaTimes size={10} />
                    </button>
                  </span>
                )}
                
                <button 
                  onClick={clearFilters}
                  className="ml-auto text-xs text-neon-cyan hover:text-neon-purple transition-colors underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Project count */}
        <div className="mb-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-background-light/20 text-secondary-text text-sm">
            Showing <span className="text-neon-cyan font-medium">{displayedProjects.length}</span> of {projects.length} projects
          </span>
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          {displayedProjects.length > 0 ? (
            <motion.div 
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {displayedProjects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  delay={0.1 * (index % 3)}
                  direction="up"
                >
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-16 px-4"
            >
              <div className="glassmorphism rounded-xl p-8 max-w-md mx-auto">
                <div className="text-neon-purple mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-text mb-2">No projects found</h3>
                <p className="text-secondary-text mb-6">No projects match your current search criteria. Try adjusting your filters.</p>
                <button
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple text-background font-medium transition-transform hover:scale-105 active:scale-95"
                  onClick={clearFilters}
                >
                  Reset All Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsPage;

// Add these styles to your global CSS or within a style tag
const styles = `
  select option {
    background-color: rgb(17, 24, 39);
    color: rgb(229, 231, 235);
    padding: 8px;
  }

  select option:hover {
    background-color: rgba(0, 255, 255, 0.1);
  }

  select:focus option:checked {
    background-color: rgba(0, 255, 255, 0.2);
    color: rgb(0, 255, 255);
  }
`;