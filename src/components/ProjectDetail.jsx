import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Clock, Tag, CheckCircle, X } from 'lucide-react';
import { projects } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (project) document.title = `${project.title} — Muhammad Bilal`;
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-secondary hover:text-primary-400 transition-colors duration-300"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </motion.button>
            
            <div className="flex items-center space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Info */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm font-medium rounded-full border border-primary-500/30">
                  {project.category[0]}
                </span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">{project.year}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-secondary leading-relaxed mb-8">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <Github size={18} />
                    <span>View Code</span>
                  </span>
                </motion.a>
                <motion.button
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </span>
                </motion.button>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <User size={16} className="text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Client</div>
                    <div className="font-medium">{project.client}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={16} className="text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="font-medium">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Tag size={16} className="text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Service</div>
                    <div className="font-medium">{project.service}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar size={16} className="text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Year</div>
                    <div className="font-medium">{project.year}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute inset-0 rounded-2xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-dark-800/30">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
              Technologies <span className="text-primary-400">Used</span>
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              {project.tech.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="tech-badge text-lg px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-secondary leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle size={20} className="text-accent-400 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
  <section className="py-16 bg-dark-800/30">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-12 text-center">
              Project <span className="text-primary-400">Gallery</span>
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                  <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-16">
        <div className="container-custom">
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative"
              >
                <img
                  src={selectedImage}
                  alt="Full-screen preview"
                  className="max-w-full max-h-full rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </div>
          )}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8">
              More <span className="text-primary-400">Projects</span>
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((otherProject, index) => (
                  <motion.div
                    key={otherProject.id}
                    variants={itemVariants}
                    className="card group hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -10 }}
                  >
                    <Link to={`/project/${otherProject.id}`}>
                      <img
                        src={otherProject.image}
                        alt={otherProject.title}
                        className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                      <h3 className="font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                        {otherProject.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {otherProject.summary}
                      </p>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/" className="btn-primary">
                View All Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
