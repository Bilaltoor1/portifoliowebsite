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
    <footer 
      style={{ 
        background: 'var(--bg-secondary)', 
        borderTop: '1px solid var(--border-color)' 
      }}
    >
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        style={{
          background: 'var(--gradient-primary)',
          color: 'var(--bg-primary)',
          boxShadow: 'var(--shadow-lg)'
        }}
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
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <span className="font-bold text-xl" style={{ color: 'var(--bg-primary)' }}>
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {personalInfo.name}
                </h3>
                <p className="text-sm" style={{ color: 'var(--accent-primary)' }}>
                  {personalInfo.title}
                </p>
              </div>
            </div>
            
            <p className="leading-relaxed mb-6 max-w-md" style={{ color: 'var(--text-muted)' }}>
              Passionate about creating exceptional digital experiences through clean code, 
              modern design, and innovative solutions. Let's build something amazing together.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              {personalInfo.social.github && (
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all duration-300"
                  style={{
                    background: 'var(--card-bg)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--card-border)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              )}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg transition-all duration-300"
                style={{
                  background: 'var(--card-bg)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--card-border)'
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>

            <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-success)' }}></div>
              <span>{personalInfo.availableFor}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="transition-colors duration-300 flex items-center space-x-2 group"
                    style={{ color: 'var(--text-muted)' }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--accent-primary)' }}></span>
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.div
                    className="flex items-center space-x-2 group"
                    style={{ color: 'var(--text-muted)' }}
                    whileHover={{ x: 5 }}
                  >
                    <Code size={14} style={{ color: 'var(--accent-primary)' }} className="transition-colors duration-300" />
                    <span className="transition-colors duration-300">
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
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
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
          className="pt-8 mt-8"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={16} className="fill-current" style={{ color: 'var(--accent-secondary)' }} />
              </motion.div>
              <span>and lots of coffee</span>
            </div>

            <div className="flex items-center space-x-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              <motion.button
                onClick={() => {
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="transition-colors duration-300"
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
          className="text-center mt-8 pt-8"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <motion.p
            className="text-sm italic"
            style={{ color: 'var(--text-muted)' }}
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
