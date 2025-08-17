import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Mail, Home, User, Wrench, Boxes, Briefcase, GraduationCap, Phone } from 'lucide-react';
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
    { name: 'Home', href: '/#home', Icon: Home },
    { name: 'About', href: '/#about', Icon: User },
    { name: 'Skills', href: '/#skills', Icon: Wrench },
    { name: 'Services', href: '/#services', Icon: Boxes },
    { name: 'Projects', href: '/#projects', Icon: Briefcase },
    { name: 'Experience', href: '/#experience', Icon: GraduationCap },
    { name: 'Contact', href: '/#contact', Icon: Phone },
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
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
        (scrolled ? 'bg-surface backdrop-blur-md border-b border-subtle' : 'bg-transparent')
      }
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
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-muted">
              <span className="text-muted font-bold text-xl">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="font-bold text-xl hidden sm:block">
              {personalInfo.name.split(' ')[0]}
            </span>
          </motion.div>
          {/* mobile theme toggle: top-right on small screens */}
          <div className="absolute right-4 top-3 lg:hidden">
            <ThemeToggle />
          </div>
          {/* Mobile top bar: logo only (no controls) */}

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
                  className="text-muted hover:text-accent transition-colors duration-300 font-medium relative group inline-flex items-center gap-2"
                >
                  <item.Icon size={16} />
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
            <div className="hidden lg:flex items-center"><ThemeToggle /></div>
          </div>

          {/* Right side icons (desktop only) */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent transition-colors duration-300"
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
                className="p-2 text-muted hover:text-accent transition-colors duration-300"
              >
                <Mail size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* bottom nav was moved out to avoid being contained within a transformed ancestor */}
  </motion.nav>
  {/* Bottom mobile navigation - rendered outside the animated top nav so fixed positioning targets the viewport */}
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="mx-auto max-w-[1440px]">
        <nav className="m-4 rounded-2xl bg-surface border border-subtle backdrop-blur-md">
          <ul className="grid grid-cols-5 gap-1 p-2">
            {[
              navItems.find(n => n.name === 'Home'),
              navItems.find(n => n.name === 'About'),
              navItems.find(n => n.name === 'Projects'),
              navItems.find(n => n.name === 'Skills'),
              navItems.find(n => n.name === 'Contact'),
            ].filter(Boolean).map((item) => (
              <li key={item.name}>
                <button
                  className="w-full flex flex-col items-center gap-1 p-2 rounded-xl text-muted hover:text-accent hover:bg-elevated transition-colors"
                  onClick={() => scrollToSection(item.href)}
                >
                  <item.Icon size={18} />
                  <span className="text-[11px]">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Navbar;
