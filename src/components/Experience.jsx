import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Building, Award, BookOpen, Code, Trophy } from 'lucide-react';
import { experiences, education } from '../data';

const Experience = () => {
  const iconMap = {
    'code-box-line': Code,
    'building-line': Building,
    'award-line': Award,
    'graduation-cap-line': GraduationCap,
    'book-open-line': BookOpen,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const TimelineItem = ({ item, index, isExperience = true }) => {
    const IconComponent = iconMap[item.icon] || (isExperience ? Briefcase : GraduationCap);
    
    return (
      <motion.div
        variants={itemVariants}
        className="relative flex items-start space-x-6 group"
      >
        {/* Timeline Line */}
  <div className="absolute left-6 top-16 w-0.5 h-full bg-primary-700 opacity-30" />
        
        {/* Icon */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <motion.div
            className="card hover:scale-105 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            {/* Period Badge */}
            <div className="flex items-center space-x-2 mb-4">
              <Calendar size={16} className="text-primary-400" />
              <span className="text-primary-400 font-medium text-sm">{item.period}</span>
            </div>

            {/* Title and Company/Institution */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
              {isExperience ? item.title : item.degree}
            </h3>
            <h4 className="text-gray-300 mb-4 font-medium">
              {isExperience ? item.company : item.institution}
            </h4>

            {/* Additional Info for Experience */}
            {isExperience && item.company === "20+ Completed Projects" && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'MongoDB', 'Vue.js', 'Next.js'].map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">
                  Successfully delivered diverse web applications including e-commerce platforms, 
                  booking systems, and business websites for clients worldwide.
                </p>
              </div>
            )}

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="section-padding bg-dark-800/30">
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
            className="text-primary-400 font-semibold text-lg mb-2 block"
          >
            My Journey
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Experience & <span className="text-primary-400">Education</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            My professional journey and educational background that shaped my development career
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Professional Experience</h3>
            </motion.div>

            <div className="space-y-0">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={index}
                  item={experience}
                  index={index}
                  isExperience={true}
                />
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </motion.div>

            <div className="space-y-0">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  index={index}
                  isExperience={false}
                />
              ))}
            </div>

            {/* Additional Skills Card */}
            <motion.div
              variants={itemVariants}
              className="mt-8 card"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="w-6 h-6 text-accent-400" />
                <h4 className="text-lg font-semibold">Continuous Learning</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Always staying updated with the latest technologies and best practices in web development.
              </p>
              <div className="space-y-2">
                {[
                  'Modern JavaScript (ES6+)',
                  'React & Vue.js Ecosystems',
                  'Node.js & Express.js',
                  'Database Design & Optimization',
                  'Cloud Deployment & DevOps'
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Key <span className="text-primary-400">Achievements</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Milestones and accomplishments throughout my development journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Code,
                number: '20+',
                label: 'Projects Completed',
                color: 'from-primary-500 to-primary-600'
              },
              {
                icon: Trophy,
                number: '15+',
                label: 'Happy Clients',
                color: 'from-secondary-500 to-secondary-600'
              },
              {
                icon: Award,
                number: '3+',
                label: 'Years Experience',
                color: 'from-accent-500 to-accent-600'
              },
              {
                icon: Building,
                number: '8+',
                label: 'Technologies',
                color: 'from-primary-600 to-secondary-600'
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 rounded-2xl border border-dark-700 bg-dark-800/40"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-400">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Ready to start your next project? I'm here to help bring your ideas to life.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
