import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, MapPin, Code, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
  document.title = 'Muhammad Bilal — Full Stack Web Developer';
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32">
      {/* Background */}
      <div className="absolute inset-0">
  <div className="absolute inset-0" />

        {/* Subtle particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

  {/* Removed large gradient blob for a cleaner look */}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
            >
              <Sparkles className="text-accent" size={20} />
              <span className="text-accent font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-accent font-display">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted mb-6 font-light"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.intro}
            </motion.p>

            {/* Location & Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8"
            >
              <div className="flex items-center space-x-2 text-muted">
                <MapPin size={16} className="text-accent" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent font-medium">{personalInfo.availableFor}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent text-muted font-semibold px-6 py-3 transition-colors hover:opacity-90 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Mail size={18} />
                  <span>Get In Touch</span>
                </span>
              </motion.a>
              
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-md border-2 border-accent text-accent font-semibold px-6 py-3 transition-colors hover:bg-accent hover:text-muted group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Code size={18} />
                  <span>View Projects</span>
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-4"
            >
              {personalInfo.social.github && (
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface hover:bg-accent text-muted hover:text-muted rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              )}
              <motion.div
                className="p-3 bg-surface hover:bg-accent text-muted hover:text-muted rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/contact-us" className="block">
                  <Mail size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Minimal static ring */}
              <div className="absolute inset-0 rounded-full border-2 border-subtle" />
              
              {/* Profile Image Container */}
              <div className="absolute inset-12 rounded-full p-1">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden border border-subtle">
                  {/* Placeholder for profile image */}
                  <img 
                    src="/assets/images/about/person1.png" 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              {['⚛️', '🚀', '💻', '⚡', '🎯', '🔥'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  style={{
                    left: `${50 + 40 * Math.cos((index * 60 - 90) * (Math.PI / 180))}%`,
                    top: `${50 + 40 * Math.sin((index * 60 - 90) * (Math.PI / 180))}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={scrollToAbout}
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted hover:text-accent transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
