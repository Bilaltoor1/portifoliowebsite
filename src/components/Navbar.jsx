import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    // { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-700'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              {personalInfo.name.split(' ')[0]}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  to={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

            {/* Theme toggle, Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Link
                  to="/contact-us"
                  className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Mail size={20} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-900/95 backdrop-blur-md border-b border-dark-700"
          >
            <div className="container-custom py-4">
              <div className="flex items-center justify-between pb-4">
                <span className="text-gray-400 text-sm">Theme</span>
                <ThemeToggle />
              </div>
              <div className="flex flex-col space-y-4 border-t border-dark-700 pt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Contact Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-dark-700">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <Link
                    to="/contact-us"
                    className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <Mail size={20} />
                  </Link>
                </div>
              </div>

            {/* Theme toggle */}
            <div className="hidden sm:flex items-center">
              <ThemeToggle />
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
