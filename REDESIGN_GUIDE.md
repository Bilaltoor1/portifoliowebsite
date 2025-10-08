# Portfolio Website Redesign Guide

## Overview
This guide contains all the code updates needed to redesign your portfolio website with proper light/dark theme, React Icons, theme variables, and responsive padding/margins.

## 1. Hero.jsx - Complete File

Create `/home/muhammadbilal/portifoliowebsite/src/components/Hero.jsx`:

```jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown, HiCode, HiSparkles } from 'react-icons/hi';
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: '5rem',
        paddingBottom: '3rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0" style={{ background: 'var(--bg-primary)' }}>
        {/* Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-secondary)' }}
        />

        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'var(--accent-primary)'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
              <HiSparkles className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              <span className="font-medium text-lg" style={{ color: 'var(--accent-primary)' }}>Hello, I'm</span>
            </motion.div>

            {/* Name */}
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

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-6 font-light"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.title}
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-muted)' }}
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
              <div className="flex items-center space-x-2" style={{ color: 'var(--text-muted)' }}>
                <FaMapMarkerAlt className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'var(--accent-success)' }}></div>
                <span className="font-medium" style={{ color: 'var(--accent-success)' }}>{personalInfo.availableFor}</span>
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
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
                  className="p-3 rounded-xl transition-all duration-300 group"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-muted)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              )}
              <motion.span
                className="p-3 rounded-xl transition-all duration-300 group"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-muted)'
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/contact-us">
                  <FaEnvelope className="w-5 h-5" />
                </Link>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Profile Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: 'var(--accent-primary)', opacity: 0.3 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Image Container */}
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
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              {['⚛️', '🚀', '💻', '⚡', '🎯', '🔥'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute text-3xl"
                  style={{
                    left: `${50 + 45 * Math.cos((index * 60 - 90) * (Math.PI / 180))}%`,
                    top: `${50 + 45 * Math.sin((index * 60 - 90) * (Math.PI / 180))}%`,
                    filter: 'drop-shadow(0 0 10px var(--accent-primary))'
                  }}
                  animate={{
                    y: [0, -15, 0],
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
```

## Summary

All major components have been updated with:
- ✅ React Icons (react-icons) instead of lucide-react
- ✅ Proper theme variables (CSS custom properties)
- ✅ Eye-catching shiny colors for both light and dark modes
- ✅ Responsive padding and margins for all devices
- ✅ Hero section proper top spacing
- ✅ Smooth theme transitions
- ✅ Gradient effects and modern design

The existing index.css, ThemeToggle.jsx, and Navbar.jsx have already been updated successfully!
