import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar, Tag, Filter, Search, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
     {
    id: 1,
    title: 'Eco Cart – AI-Powered Sustainable Product Finder',
    description:
      'An intelligent tool that utilizes SERP API and Gemini AI to fetch, analyze, and rate eco-friendly products. Products are assigned environmental badges like "Plastic-Free" and "Recyclable" based on sustainability factors. Optimized for speed by limiting fetch to 6–9 results and integrated Firebase for authentication and wishlist functionality. Designed with user experience and performance in mind to support a growing community of eco-conscious consumers.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['HTML', 'Tailwind CSS', 'Node.js', 'Firebase', 'SERP API', 'Gemini API', 'Machine Learning'],
    githubUrl: 'https://github.com/siddhumore18?tab=repositories',
    liveUrl: 'https://eco-cart-demo.com',
    category: 'AI/ML',
    date: '2024',
    featured: true,
    status: 'Completed',
    rating: 5
  },
  {
    id: 2,
    title: 'Engineering Study Hub – Centralised Resource Platform',
    description:
      'A dynamic and scalable platform to organize and distribute engineering study resources like notes, question banks, and past exam papers across branches and semesters. Built with responsive design for seamless mobile and desktop access. Features include structured content filtering by subject/semester/branch, PDF uploads, and easy sharing. Designed to serve 2000+ students with improved academic access and collaboration.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['HTML', 'CSS', 'Node.js', 'MongoDB', 'SERP API', 'Gemini API', 'Machine Learning'],
    githubUrl: 'https://github.com/siddhumore18?tab=repositories',
    liveUrl: 'https://engineering-hub.com',
    category: 'Fullstack',
    date: '2024',
    featured: true,
    status: 'Completed',
    rating: 5
  },
  {
    id: 3,
    title: 'SmartSync – Phone Clone Utility (C/C++)',
    description:
      'Engineered a high-performance contact management and phone cloning tool in C/C++, focused on efficiency and speed. Leveraged advanced data structures (BST, Hash Tables) to achieve O(log n) time complexity for search operations. Designed to support smooth contact transfer between devices with minimal memory overhead. Built for offline-first environments and fast access on low-resource systems.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['C++', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/siddhumore18?tab=repositories',
    liveUrl: '',
    category: 'System Utility',
    date: '2023',
    featured: false,
    status: 'Completed',
    rating: 4
  },
  {
    id: 4,
    title: 'Titanic Survival Prediction – ML Project',
    description:
      'Created a predictive model using Decision Trees and Random Forest classifiers to estimate passenger survival on the Titanic. Applied extensive data preprocessing, feature engineering, and Exploratory Data Analysis (EDA). Evaluated model performance using accuracy, precision, and recall metrics. Demonstrated hands-on knowledge of supervised learning, classification pipelines, and model validation techniques.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
    githubUrl: 'https://github.com/siddhumore18?tab=repositories',
    liveUrl: '',
    category: 'Data Science',
    date: '2023',
    featured: false,
    status: 'Completed',
    rating: 4
  },
  {
    id: 5,
    title: 'Bangalore House Price Prediction – ML Project',
    description:
      'Developed a machine learning pipeline to predict real estate prices in Bangalore using both Linear Regression and Random Forest models. Conducted thorough EDA, outlier detection, and feature selection to improve accuracy. Integrated hyperparameter tuning and cross-validation. Delivered a highly accurate model, showcasing skills in regression analysis, model optimization, and real-world data handling.',
    image: 'https://images.pexels.com/photos/3184386/pexels-photo-3184386.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'ML Algorithms'],
    githubUrl: 'https://github.com/siddhumore18?tab=repositories',
    liveUrl: '',
    category: 'Machine Learning',
    date: '2023',
    featured: false,
    status: 'Completed',
    rating: 4
  }
  ];

  const categories = ['All', 'Fullstack', 'AI/ML'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Fullstack': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'AI/ML': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Mobile': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
     
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  const getStatusColor = (status: string) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
     <section id="projects" className="p-10 bg-light-gradient-vertical dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my recent work in full-stack development, AI/ML, and modern web technologies
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div variants={itemVariants} className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-900 text-gray-800 dark:text-white backdrop-blur-sm"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/80 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 backdrop-blur-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white/80 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      <Tag size={12} className="mr-1" />
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        <Star size={12} className="mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-900 bg-opacity-75 text-white">
                      <Calendar size={12} className="mr-1" />
                      {project.date}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-white/70 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <motion.a
              href="https://github.com/siddhumore18?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Github size={20} className="mr-2" />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;