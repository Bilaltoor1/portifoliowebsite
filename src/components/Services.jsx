import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data';

const Services = () => {
  const iconMap = {
    'code-s-slash-line': Code,
    'server-line': Server,
    'smartphone-line': Smartphone,
  };

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

  const serviceFeatures = [
    'Modern responsive design',
    'Cross-browser compatibility', 
    'SEO optimization',
    'Performance optimization',
    'Mobile-first approach',
    'Clean, maintainable code'
  ];

  return (
    <section id="services" className="section-padding bg-dark-800/30">
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
            What I Do
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            My <span className="text-primary-400">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            I provide end-to-end web development services to help bring your ideas to life
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </motion.div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-xl transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Process Steps */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                My <span className="text-primary-400">Development Process</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I follow a structured approach to ensure your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </div>

            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'Understanding your requirements, goals, and target audience to create a comprehensive project plan.'
              },
              {
                step: '02', 
                title: 'Design & Prototyping',
                description: 'Creating wireframes and prototypes to visualize the user experience and interface design.'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building the application with clean code, implementing features, and thorough testing.'
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'Launching your project and providing ongoing support and maintenance as needed.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {process.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Features */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-6 text-center">
                What You Get
              </h3>
              <div className="space-y-4">
                {serviceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-accent-400 flex-shrink-0" />
                    <span className="text-secondary">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-primary-400">
                Ready to Start Your Project?
              </h4>
              <p className="text-gray-400 mb-6">
                Let's discuss your requirements and bring your vision to life
              </p>
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
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
