import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, TrendingUp, Award, Rocket } from 'lucide-react';
import { skills } from '../data';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percent) => ({
      width: `${percent}%`,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4"
            style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid var(--card-border)' 
            }}
          >
            <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />
            <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>
              Technical Expertise
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Mastering modern technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -8 }}
            >
              <div 
                className="relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-500"
                style={{
                  background: hoveredSkill === index 
                    ? 'var(--surface-hover)' 
                    : 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: hoveredSkill === index 
                    ? 'var(--shadow-lg)' 
                    : 'var(--shadow-sm)',
                }}
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ 
                    background: 'var(--gradient-primary)',
                  }}
                />

                {/* Skill Icon */}
                <div className="relative z-10 mb-4">
                  <motion.div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto"
                    style={{ 
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--card-border)'
                    }}
                    animate={{
                      scale: hoveredSkill === index ? 1.1 : 1,
                      rotate: hoveredSkill === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <Code2 className="w-10 h-10" style={{ color: 'var(--accent-primary)' }} />
                    )}
                  </motion.div>
                </div>

                {/* Skill Name */}
                <h3 
                  className="text-lg font-bold text-center mb-4 transition-colors duration-300"
                  style={{ 
                    color: hoveredSkill === index 
                      ? 'var(--accent-primary)' 
                      : 'var(--text-primary)' 
                  }}
                >
                  {skill.name}
                </h3>

                {/* Progress Section */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                      Proficiency
                    </span>
                    <motion.span 
                      className="text-sm font-bold"
                      style={{ color: 'var(--accent-primary)' }}
                      animate={{
                        scale: hoveredSkill === index ? 1.1 : 1,
                      }}
                    >
                      {skill.percent}%
                    </motion.span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div 
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: 'var(--bg-tertiary)' }}
                  >
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{ background: 'var(--gradient-primary)' }}
                      variants={progressVariants}
                      custom={Math.max(0, Math.min(100, skill.percent))}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 opacity-50"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        }}
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-5"
                  style={{
                    background: 'var(--gradient-primary)',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: Code2,
              title: "Clean Code",
              description: "Writing maintainable, scalable code following industry best practices and modern design patterns.",
            },
            {
              icon: TrendingUp,
              title: "Performance",
              description: "Optimizing applications for blazing-fast load times and seamless user experiences.",
            },
            {
              icon: Zap,
              title: "Innovation",
              description: "Staying ahead with cutting-edge technologies and implementing creative solutions.",
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div 
                className="p-8 rounded-2xl text-center h-full transition-all duration-300"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    background: 'var(--gradient-primary)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-8 h-8" style={{ color: 'var(--bg-primary)' }} />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div
            className="inline-block p-10 rounded-3xl relative overflow-hidden"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--shadow-lg)'
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{ background: 'var(--gradient-primary)' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Rocket size={28} style={{ color: 'var(--accent-primary)' }} />
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  Ready to Build Something Amazing?
                </h3>
              </div>
              
              <p className="mb-8 text-lg max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
                Let's collaborate and bring your ideas to life with modern technologies
              </p>
              
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Start a Project</span>
                  <Award size={18} />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
