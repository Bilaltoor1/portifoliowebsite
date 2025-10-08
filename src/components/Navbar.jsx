import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? 'backdrop-blur-xl border-b' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--surface)' : 'transparent',
        borderColor: scrolled ? 'var(--border-color)' : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-3"
          >
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center relative overflow-hidden group"
              style={{
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <span className="font-bold text-xl relative z-10" style={{ color: 'var(--bg-primary)' }}>
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="font-bold text-xl hidden sm:block gradient-text">
              {personalInfo.name.split(' ')[0]}
            </span>
          </motion.div>

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
                  className="relative font-medium transition-all duration-300 group py-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.name}
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: 'var(--gradient-primary)' }}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
                style={{
                  color: 'var(--text-muted)',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)'
                }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Link
                  to="/contact-us"
                  className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
                  style={{
                    color: 'var(--text-muted)',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  <FaEnvelope className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            <div className="hidden sm:flex">
              <ThemeToggle />
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl transition-all duration-300"
              style={{
                color: 'var(--accent-primary)',
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)'
              }}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl border-b"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border-color)'
            }}
          >
            <div className="container-custom py-6">
              <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--text-muted)' }} className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
              
              <div className="flex flex-col space-y-3">
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
                      className="block font-medium py-3 px-4 rounded-lg transition-all duration-300"
                      style={{
                        color: 'var(--text-secondary)',
                        background: 'transparent'
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
                
              <div className="flex items-center space-x-3 pt-6 mt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all duration-300"
                  style={{
                    color: 'var(--text-muted)',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <Link
                  to="/contact-us"
                  className="p-3 rounded-xl transition-all duration-300"
                  style={{
                    color: 'var(--text-muted)',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  <FaEnvelope className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
