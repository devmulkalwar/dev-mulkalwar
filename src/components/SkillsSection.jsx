import { useState } from "react";
import { skills } from "../data/portfolioData";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa"
const SkillsSection = () => {
  const categories = Object.entries(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0][0]);

  return (
    <section className="py-20 relative" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-light/5 to-background z-0"></div>
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
              Tech Stack
            </h2>
            <div className="h-px w-12 bg-neon-cyan/30"></div>
          </div>
          <p className="text-secondary-text text-center mt-4 max-w-2xl mx-auto">
            A collection of technologies I've mastered to build modern,
            responsive, and efficient web applications.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {categories.map(([category, skillList], catIndex) => (
            <motion.div
              key={category}
              className="mb-4 border border-neon-cyan/20 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <button
                className={`w-full p-4 text-left flex items-center justify-between ${
                  activeCategory === category
                    ? "bg-neon-cyan/10"
                    : "bg-background-light/5"
                }`}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? null : category
                  )
                }
              >
                <h3 className="text-xl font-bold text-neon-cyan">
                  {category
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </h3>
                <svg
                  className={`w-5 h-5 text-neon-cyan transition-transform ${
                    activeCategory === category ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeCategory === category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-background-light/10"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-md bg-background-light/20 hover:bg-neon-cyan/10 transition-colors"
                      >
                        {skill.icon && (
                          <div className="text-neon-cyan text-xl">
                            {typeof skill.icon === "string" ? (
                              React.createElement(skill.icon) // Dynamically create a React component
                            ) : (
                              <skill.icon />
                            )}
                          </div>
                        )}

                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
