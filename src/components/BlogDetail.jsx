import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, ChevronRight } from 'lucide-react';
import { blogs } from '../data';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === id);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (blog) document.title = `${blog.title} — Muhammad Bilal`;
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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

  // Function to render blog content paragraphs
  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </motion.button>
            
            <motion.button
              className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Share2 size={20} />
              <span>Share</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.div variants={itemVariants} className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-primary-400 transition-colors duration-300">
                Home
              </Link>
              <ChevronRight size={16} />
              <span>Blog</span>
              <ChevronRight size={16} />
              <span className="text-white">{blog.title}</span>
            </motion.div>

            {/* Category */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm font-medium rounded-full border border-primary-500/30">
                {blog.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {blog.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mb-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div variants={itemVariants} className="relative mb-12">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute inset-0"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-4 gap-12"
          >
            {/* Main Content */}
            <motion.article variants={itemVariants} className="lg:col-span-3">
              <div className="prose prose-lg prose-invert max-w-none">
                {/* Blog Excerpt */}
                <div className="text-xl text-gray-300 font-medium mb-8 p-6 bg-dark-800/50 rounded-xl border border-dark-600">
                  {blog.excerpt}
                </div>

                {/* Blog Content */}
                <div className="space-y-6">
                  {renderContent(blog.content)}
                </div>

                {/* Tags */}
                <div className="pt-8 mt-12 border-t border-dark-600">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full hover:bg-primary-600/20 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside variants={itemVariants} className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className="card">
                  <h3 className="font-semibold mb-4 text-primary-400">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#introduction" className="block text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Introduction
                    </a>
                    <a href="#overview" className="block text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Overview
                    </a>
                    <a href="#implementation" className="block text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Implementation
                    </a>
                    <a href="#conclusion" className="block text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Conclusion
                    </a>
                  </nav>
                </div>

                {/* Author Info */}
                <div className="card">
                  <h3 className="font-semibold mb-4 text-primary-400">About the Author</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{blog.author}</div>
                      <div className="text-sm text-gray-400">Full Stack Developer</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Passionate about creating innovative web solutions and sharing knowledge with the developer community.
                  </p>
                </div>

                {/* Share */}
                <div className="card">
                  <h3 className="font-semibold mb-4 text-primary-400">Share this post</h3>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-dark-700 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm transition-colors duration-300">
                      Twitter
                    </button>
                    <button className="flex-1 bg-dark-700 hover:bg-blue-800 text-white py-2 px-3 rounded-lg text-sm transition-colors duration-300">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-dark-800/30">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-12 text-center">
              Related <span className="text-primary-400">Posts</span>
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6"
            >
              {blogs
                .filter(b => b.id !== blog.id && b.category === blog.category)
                .slice(0, 3)
                .map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    variants={itemVariants}
                    className="card group hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -10 }}
                  >
                    <Link to={`/blog/${relatedBlog.id}`}>
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                      <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
                        <span className="px-2 py-1 bg-primary-600/20 text-primary-400 rounded">
                          {relatedBlog.category}
                        </span>
                        <span>•</span>
                        <span>{relatedBlog.readTime}</span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-dark-600">
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <User size={14} />
                          <span>{relatedBlog.author}</span>
                        </div>
                        <span className="text-xs text-gray-400">{relatedBlog.date}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
            
            {/* View All Blogs */}
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link to="/" className="btn-primary">
                View All Blog Posts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">
              Stay Updated with My Latest <span className="text-primary-400">Insights</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 mb-8">
              Subscribe to my newsletter for the latest updates on web development, tutorials, and tech insights.
            </motion.p>
            <motion.form variants={itemVariants} className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300"
              />
              <button type="submit" className="btn-primary px-6">
                Subscribe
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
