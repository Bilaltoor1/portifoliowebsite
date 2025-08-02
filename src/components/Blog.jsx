import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data';

const Blog = () => {
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

  return (
    <section id="blog" className="section-padding bg-dark-800/30">
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
            Latest Insights
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            From The <span className="gradient-text">Blog</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Thoughts, tutorials, and insights about web development, technology trends, and best practices
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          {blogs.length > 0 && (
            <Link to={`/blog/${blogs[0].id}`}>
              <motion.article
                className="card group hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={blogs[0].image}
                      alt={blogs[0].title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-600/90 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-4">
                    {/* Meta */}
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{blogs[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag size={14} />
                        <span>{blogs[0].category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>5 min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold group-hover:text-primary-400 transition-colors duration-300">
                      {blogs[0].title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-400 leading-relaxed">
                      {blogs[0].summary}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">
                      <span>Read Full Article</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          )}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="card group hover:scale-105 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <Link to={`/blog/${post.id}`}>
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary-600/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Meta */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>3 min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-primary-400 font-medium text-sm group-hover:text-primary-300 transition-colors duration-300">
                    <span>Read More</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Blog Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Explore <span className="gradient-text">Topics</span>
            </h3>
            <p className="text-gray-400">
              Discover articles organized by technology and topics
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Development', 'Backend', 'Database', 'Frontend', 'DevOps', 'Best Practices'].map((category, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                className="px-6 py-3 bg-dark-700 hover:bg-primary-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl border border-primary-500/20 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get notified about new articles and development insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
              />
              <motion.button
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
