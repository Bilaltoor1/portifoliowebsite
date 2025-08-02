import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_uae42ft';
    const templateID = 'template_bfxjz2q';
    const userID = 'O2t_-H_DV43BWQYfN';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      to_email: 'muhammadbilaltoor7@gmail.com',
      subject: formData.subject,
      message: formData.message,
      budget: formData.budget,
      timeline: formData.timeline,
      time: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            budget: '',
            timeline: ''
          });
        }, 3000);
      }, (err) => {
        console.log('FAILED...', err);
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      action: `mailto:${personalInfo.email}`,
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      action: 'tel:+1234567890',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      action: '#',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      action: '#',
      color: 'from-primary-600 to-secondary-600'
    }
  ];

  const budgetRanges = [
    '$500 - $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1-2 months',
    '3+ months'
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800/30">
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
            Get In Touch
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Let's Work <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss your project and see how I can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always excited to take on new challenges and help bring innovative ideas to life. 
                Whether you have a clear vision or just a spark of an idea, let's discuss how we can make it happen.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={containerVariants} className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  variants={itemVariants}
                  className="card group hover:scale-105 transition-all duration-300 block"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {info.label}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {personalInfo.social.github && (
                  <motion.a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={24} />
                  </motion.a>
                )}
                {personalInfo.social.linkedin && (
                  <motion.a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                )}
                <motion.span
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-dark-700 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                   <Link
                    to="/contact-us"
                    >
                  <Mail size={24} />
                </Link>
                </motion.span>
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="card bg-gradient-to-r from-accent-600/20 to-secondary-600/20 border-accent-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-accent-400">Currently Available</span>
              </div>
              <p className="text-gray-400 text-sm">
                {personalInfo.availableFor} - Ready to start new projects immediately
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <Send size={18} />
                        <span>Send Message</span>
                      </span>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      className="btn-outline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center space-x-2">
                        <Mail size={16} />
                        <span>Direct Email</span>
                      </span>
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
