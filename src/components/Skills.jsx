import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, TrendingUp, Zap } from 'lucide-react';
import { skills } from '../data';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percent) => ({
      width: `${percent}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="section-padding">
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
            className="text-accent font-semibold text-lg mb-2 block"
          >
            My Skills
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Technical <span className="text-accent">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* <Code2 className="w-8 h-8 text-muted" /> */}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-accent transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Proficiency</span>
                  <span className="text-sm font-semibold text-accent">{skill.percent}%</span>
                </div>
        <div className="skill-bar">
                  <motion.div
          className="skill-progress"
                    variants={progressVariants}
          custom={Math.max(0, Math.min(100, skill.percent))}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                  />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Code2,
              title: "Clean Code",
              description: "Writing maintainable, scalable, and well-documented code following industry best practices.",
              color: "from-primary-500 to-primary-600"
            },
            {
              icon: TrendingUp,
              title: "Performance",
              description: "Optimizing applications for speed, efficiency, and exceptional user experience.",
              color: "from-secondary-500 to-secondary-600"
            },
            {
              icon: Zap,
              title: "Innovation",
              description: "Staying updated with latest technologies and implementing cutting-edge solutions.",
              color: "from-accent-500 to-accent-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-surface rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 rounded-2xl border border-subtle bg-surface"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Ready to Work Together?
            </h3>
            <p className="text-muted mb-6 max-w-md mx-auto">
              Let's discuss how my skills can help bring your project to life
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center rounded-md bg-accent text-muted font-semibold px-6 py-3 transition-colors hover:opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
