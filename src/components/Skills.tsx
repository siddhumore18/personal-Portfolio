import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Globe, Brain, Shield, Zap, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 95, experience: '3 years' },
        { name: 'TypeScript', level: 90, experience: '2 years' },
        { name: 'Next.js', level: 85, experience: '2 years' },
        { name: 'Vue.js', level: 80, experience: '1.5 years' },
        { name: 'Tailwind CSS', level: 90, experience: '2 years' },
        { name: 'HTML/CSS', level: 95, experience: '4 years' }
      ]
    },
    {
      title: 'Backend',
      icon: <Database size={24} />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 90, experience: '3 years' },
        { name: 'Python', level: 85, experience: '3 years' },
        { name: 'Express.js', level: 85, experience: '2.5 years' },
        { name: 'FastAPI', level: 75, experience: '1 year' },
        { name: 'PostgreSQL', level: 80, experience: '2 years' },
        { name: 'MongoDB', level: 85, experience: '2.5 years' }
      ]
    },
    {
      title: 'Languages',
      icon: <Code size={24} />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'JavaScript', level: 95, experience: '4 years' },
        { name: 'Python', level: 85, experience: '3 years' },
        { name: 'TypeScript', level: 90, experience: '2 years' },
        { name: 'Java', level: 75, experience: '2 years' },
        { name: 'C++', level: 70, experience: '1.5 years' },
        { name: 'SQL', level: 85, experience: '2.5 years' }
      ]
    },
    {
      title: 'AI/ML',
      icon: <Brain size={24} />,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'TensorFlow', level: 75, experience: '1.5 years' },
        { name: 'PyTorch', level: 70, experience: '1 year' },
        { name: 'Scikit-learn', level: 80, experience: '2 years' },
        { name: 'Pandas', level: 85, experience: '2 years' },
        { name: 'NumPy', level: 85, experience: '2 years' },
        { name: 'OpenAI API', level: 80, experience: '1 year' }
      ]
    },
    {
      title: 'DevOps',
      icon: <Wrench size={24} />,
      color: 'from-yellow-500 to-yellow-600',
      skills: [
        { name: 'Docker', level: 75, experience: '1.5 years' },
        { name: 'AWS', level: 70, experience: '1 year' },
        { name: 'Git', level: 95, experience: '4 years' },
        { name: 'CI/CD', level: 70, experience: '1 year' },
        { name: 'Nginx', level: 65, experience: '1 year' },
        { name: 'Linux', level: 80, experience: '2 years' }
      ]
    },
    {
      title: 'Security',
      icon: <Shield size={24} />,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Web Security', level: 75, experience: '1.5 years' },
        { name: 'JWT', level: 85, experience: '2 years' },
        { name: 'OAuth', level: 80, experience: '1.5 years' },
        { name: 'Encryption', level: 70, experience: '1 year' },
        { name: 'OWASP', level: 65, experience: '1 year' },
        { name: 'Penetration Testing', level: 60, experience: '6 months' }
      ]
    }
  ];

  const achievements = [
    { icon: <Award size={20} />, title: 'AWS Certified Developer', year: '2024' },
    { icon: <Award size={20} />, title: 'Google Cloud Professional', year: '2024' },
    { icon: <Award size={20} />, title: 'React Certification', year: '2023' },
    { icon: <Award size={20} />, title: 'Cybersecurity Fundamentals', year: '2023' }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-green-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    if (level >= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
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
    <section id="skills" className="py-20 bg-white/90 dark:bg-gray-900">
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
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical skills and the technologies I work with
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              <div className={activeCategory === index ? 'text-white' : 'text-gray-500'}>
                {category.icon}
              </div>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-12 h-12 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-lg flex items-center justify-center text-white`}>
              {skillCategories[activeCategory].icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {skillCategories[activeCategory].title} Skills
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-900 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.experience}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-white/20"
                    />
                  </motion.div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {achievement.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-white/70 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-center mb-4">
              <Zap size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
              frameworks, and best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Rust', 'Go', 'Kubernetes', 'GraphQL', 'Web3', 'Blockchain', 'AR/VR', 'Quantum Computing'].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;