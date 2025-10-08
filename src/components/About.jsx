import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Coffee, Heart, Download, Eye } from 'lucide-react';
import { personalInfo, techPartners } from '../data';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Coffee, label: 'Projects Completed', value: '20+' },
    { icon: Heart, label: 'Happy Clients', value: '15+' },
    { icon: User, label: 'Technologies', value: '8+' },
  ];

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
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Image and Stats */}
          <motion.div variants={itemVariants} className="relative">
            {/* Main Image */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-dark-800 rounded-2xl p-1 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/assets/images/about/person.png"
                  alt="About me"
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
            </div>

            {/* Stats Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-primary-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Section Title */}
            <div>
              <motion.span
                variants={itemVariants}
                className="text-primary-400 font-semibold text-lg mb-2 block"
              >
                About Me
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                I Create <span className="text-primary-400">Digital Experiences</span> That Matter
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-secondary text-lg leading-relaxed"
            >
              {personalInfo.about}
            </motion.p>

            {/* Skills Highlight */}
            <motion.div
              variants={itemVariants}
              className="bg-dark-700/50 rounded-xl p-6 border border-dark-600"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-400">Core Competencies</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Frontend Development',
                  'Backend Development',
                  'Database Design',
                  'API Integration',
                  'Responsive Design',
                  'Performance Optimization'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-secondary">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Eye size={18} />
                  <span>Let's Work Together</span>
                </span>
              </motion.a>
              
              <motion.button
                className="btn-outline group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // You can add a resume download link here
                  alert('Resume download feature - Add your resume link here');
                }}
              >
                <span className="flex items-center space-x-2">
                  <Download size={18} />
                  <span>Download Resume</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Partners Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Trusted By Clients From
            </h3>
            <p className="text-gray-400">
              I've had the privilege to work with amazing clients across these platforms
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center p-6 bg-dark-700/30 rounded-xl hover:bg-dark-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:grayscale "
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">
                  {partner.name}
                </span> */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
