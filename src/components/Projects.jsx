import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['all', 'frontend', 'fullstack'];

  const handleFilter = (category) => {
    setFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category.includes(category)
      ));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-primary-400 font-semibold text-lg mb-2 block"
          >
            My Work
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Featured <span className="text-primary-400">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and expertise
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-2 bg-dark-800/50 p-2 rounded-xl border border-dark-700">
            <Filter size={16} className="text-gray-400 ml-2" />
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="card group hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-800/80 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={16} />
                      </motion.a>
                      <Link to={`/project/${project.id}`}>
                        <motion.div
                          className="p-2 bg-dark-800/80 hover:bg-secondary-600 text-white rounded-lg transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye size={16} />
                        </motion.div>
                      </Link>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600/90 text-white text-xs font-medium rounded-full">
                      {project.category[0]}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-badge"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-badge">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex justify-between items-center pt-4 border-t border-dark-700">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <Link
                      to={`/project/${project.id}`}
                      className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center space-x-1 transition-colors duration-300"
                    >
                      <span>View Details</span>
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 rounded-2xl border border-dark-700 bg-dark-800/40"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-400">
              Interested in My Work?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I have more projects in my portfolio. Let's discuss how I can help with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
              <motion.a
                href="https://github.com/Bilaltoor1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Github size={18} />
                  <span>View GitHub</span>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
