import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown, HiCode, HiSparkles } from 'react-icons/hi';
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      <div className="absolute inset-0" style={{ background: 'var(--bg-primary)' }}>
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-secondary)' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
            >
              <HiSparkles className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              <span className="font-medium text-lg" style={{ color: 'var(--accent-primary)' }}>Hello, I am</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block gradient-text font-display">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-6 font-light"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-muted)' }}
            >
              {personalInfo.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
            >
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <FaEnvelope className="w-4 h-4" />
                  <span>Get In Touch</span>
                </span>
              </motion.a>
              
              <motion.a
                href="#projects"
                className="btn-outline group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <HiCode className="w-5 h-5" />
                  <span>View Projects</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: 'var(--accent-primary)', opacity: 0.3 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute inset-12 rounded-full p-1" style={{ background: 'var(--gradient-primary)' }}>
                <div 
                  className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                  style={{ 
                    background: 'var(--bg-secondary)',
                    border: '3px solid var(--card-border)'
                  }}
                >
                  <img 
                    src="/assets/images/about/person1.png" 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300"
        style={{ color: 'var(--text-muted)' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <HiChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
