import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Crown } from 'lucide-react';
import { pricing } from '../data';

const Pricing = () => {
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

  const getIcon = (index) => {
    switch (index) {
      case 0: return Star;
      case 1: return Zap;
      case 2: return Crown;
      default: return Star;
    }
  };

  const getGradient = (index) => {
    switch (index) {
      case 0: return 'from-primary-500 to-primary-600';
      case 1: return 'from-secondary-500 to-secondary-600';
      case 2: return 'from-accent-500 to-accent-600';
      default: return 'from-primary-500 to-primary-600';
    }
  };

  const getBorderGradient = (index) => {
    switch (index) {
      case 0: return 'border-primary-500/20';
      case 1: return 'border-secondary-500/50 scale-105';
      case 2: return 'border-accent-500/20';
      default: return 'border-primary-500/20';
    }
  };

  return (
    <section id="pricing" className="section-padding">
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
            Pricing Plans
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Choose Your <span className="text-primary-400">Package</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Flexible pricing options to suit projects of all sizes and requirements
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {pricing.map((plan, index) => {
            const Icon = getIcon(index);
            const isPopular = index === 1;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`card relative group hover:scale-105 transition-all duration-300 ${getBorderGradient(index)} ${
                  isPopular ? 'transform lg:scale-105' : ''
                }`}
                whileHover={{ y: -10 }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {plan.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-400">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 text-lg ml-2">
                      starting from
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      {feature.available ? (
                        <Check size={18} className="text-accent-400 flex-shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-500 flex-shrink-0" />
                      )}
                      <span className={`${feature.available ? 'text-secondary' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isPopular
                      ? 'bg-secondary-600 hover:bg-secondary-700 text-white'
                      : 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </motion.button>

                {/* Background Effect */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 rounded-xl pointer-events-none`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Custom Solutions */}
          <motion.div variants={itemVariants} className="card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Crown className="w-6 h-6 text-accent-400 mr-3" />
              Custom Solutions
            </h3>
            <p className="text-gray-400 mb-6">
              Need something specific? I offer custom development solutions tailored to your unique requirements.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Personalized consultation',
                'Custom feature development',
                'Legacy system integration',
                'Performance optimization',
                'Ongoing maintenance & support'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check size={16} className="text-accent-400" />
                  <span className="text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discuss Custom Project
            </motion.button>
          </motion.div>

          {/* What's Included */}
          <motion.div variants={itemVariants} className="card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Zap className="w-6 h-6 text-primary-400 mr-3" />
              What's Included
            </h3>
            <p className="text-gray-400 mb-6">
              All packages include these essential features and services.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Modern, responsive design',
                'Cross-browser compatibility',
                'SEO-friendly structure',
                'Performance optimization',
                'Clean, documented code',
                'Testing & quality assurance',
                'Deployment assistance',
                '30-day support period'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check size={16} className="text-primary-400" />
                  <span className="text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Frequently Asked <span className="text-primary-400">Questions</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about my pricing and development process
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 text-left"
          >
            {[
              {
                question: "Do you offer payment plans?",
                answer: "Yes, I offer flexible payment schedules. Typically 50% upfront and 50% upon completion, but we can discuss terms that work for your budget."
              },
              {
                question: "What's included in ongoing support?",
                answer: "30 days of free bug fixes and minor adjustments. After that, I offer maintenance packages for ongoing updates and support."
              },
              {
                question: "How long does a typical project take?",
                answer: "Basic websites: 1-2 weeks, Full-stack apps: 4-8 weeks, Enterprise solutions: 8-16 weeks. Timeline depends on complexity and requirements."
              },
              {
                question: "Do you provide hosting and domain services?",
                answer: "I can help you choose the right hosting solution and assist with deployment, but hosting costs are separate from development fees."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <h4 className="font-semibold mb-3 text-primary-400">
                  {faq.question}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
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
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Let's discuss your requirements and find the perfect solution for your needs
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
              Get Free Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
