import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding">
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
            Client Feedback
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Clients <span className="text-primary-400">Say</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Here's what my clients have to say about working with me
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div className="card text-center relative overflow-hidden">
                  {/* Background Quote Icon */}
                  <div className="absolute top-8 left-8 opacity-10">
                    <Quote size={80} className="text-primary-400" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center space-x-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-secondary leading-relaxed mb-8 relative z-10 max-w-3xl mx-auto">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4 relative z-10">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500/30">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary-400 text-sm">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              onClick={goToPrevious}
              className="p-3 bg-dark-700 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-600' 
                      : 'bg-dark-600 hover:bg-dark-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              className="p-3 bg-dark-700 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* All Testimonials Grid (Mobile-friendly) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card group hover:scale-105 transition-all duration-300 ${
                index === currentIndex ? 'border-primary-500/50 bg-primary-600/5' : ''
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-secondary leading-relaxed mb-6 text-sm">
                "{testimonial.text.substring(0, 150)}..."
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-400 text-xs">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
              Ready to Join These Happy Clients?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Let's work together to create something amazing for your business
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
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
