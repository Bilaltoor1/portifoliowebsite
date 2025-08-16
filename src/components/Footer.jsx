import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Heart, ArrowUp, Code, Coffee, Zap } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Solutions',
    'Web Applications',
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
  className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container-custom py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-primary-400 text-sm">
                  {personalInfo.title}
                </p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Passionate about creating exceptional digital experiences through clean code, 
              modern design, and innovative solutions. Let's build something amazing together.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              {personalInfo.social.github && (
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-700 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              )}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-dark-700 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span>{personalInfo.availableFor}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.div
                    className="text-gray-400 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <Code size={14} className="text-primary-400 group-hover:text-secondary-400 transition-colors duration-300" />
                    <span className="group-hover:text-gray-300 transition-colors duration-300">
                      {service}
                    </span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-dark-700 mt-12 pt-12"
        >
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          >
            {[
              { icon: Code, label: 'Projects Completed', value: '20+', color: 'from-primary-500 to-primary-600' },
              { icon: Coffee, label: 'Cups of Coffee', value: '500+', color: 'from-secondary-500 to-secondary-600' },
              { icon: Heart, label: 'Happy Clients', value: '15+', color: 'from-accent-500 to-accent-600' },
              { icon: Zap, label: 'Years Experience', value: '3+', color: 'from-primary-600 to-secondary-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-dark-700 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.button
                onClick={() => {
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-primary-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-primary-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-8 pt-8 border-t border-dark-700"
        >
          <motion.p
            className="text-gray-400 text-sm italic"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            "The best way to predict the future is to create it." - Peter Drucker
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
