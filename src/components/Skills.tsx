import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Brain, Shield, Zap, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Java', level: 95, experience: '2 years' },
        { name: 'JavaScript', level: 75, experience: '2 years' },
        { name: 'C', level: 90, experience: '2 years' },
        { name: 'Python', level: 65, experience: '1 year' },
        { name: 'C++', level: 40, experience: '1 year' },
        { name: 'SQL', level: 85, experience: '2.5 years' }
      ]
    },
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 75, experience: '3 years' },
        { name: 'Tailwind CSS', level: 70, experience: '2 years' },
        { name: 'HTML/CSS', level: 95, experience: '4 years' }
      ]
    },
    {
      title: 'Backend',
      icon: <Database size={24} />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 80, experience: '3 years' },
        { name: 'My SQL', level: 85, experience: '3 years' },
        { name: 'Express.js', level: 80, experience: '2.5 years' },
        { name: 'MongoDB', level: 85, experience: '2.5 years' }
      ]
    },
    {
      title: 'AI/ML',
      icon: <Brain size={24} />,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'TensorFlow', level: 75, experience: '1.5 years' },
        { name: 'Scikit-learn', level: 80, experience: '2 years' },
        { name: 'Pandas', level: 85, experience: '2 years' },
        { name: 'NumPy', level: 85, experience: '2 years' },
        { name: 'OpenAI API', level: 80, experience: '1 year' }
      ]
    }
  ];

  const achievements = [
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
    <section id="skills" className="p-4 sm:p-6 md:p-10 bg-light-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-700 dark:text-gray-400 max-w-2xl sm:max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical skills and the technologies I work with
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50'
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
          className="bg-white/70 dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-lg flex items-center justify-center text-white`}>
              {skillCategories[activeCategory].icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              {skillCategories[activeCategory].title} Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-900 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">
                    {skill.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{skill.experience}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-full rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-white/20"
                    />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
          {/* Competitive Coding & Achievements */}
<motion.div
  variants={itemVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="mt-16"
>
  <h3 className="text-2xl font-bold text-center mb-10 text-black dark:text-white">
    🏆 Competitive Coding & Achievements
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* LeetCode Box */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-[#2b1055] to-[#1a0838] p-8 rounded-xl border border-yellow-500/40 text-white shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="h-6 w-6" />
        <h1 className="text-xl font-semibold text-yellow-400">LeetCode Achievements</h1>
      </div>
      <ul className="list-disc list-inside text-sm space-y-2 mb-4 text-gray-200">
        <li>💡 Solved <strong>160+ DSA problems</strong> in <strong>Java</strong>.</li>
        <li>📊 Mastered core topics: Arrays, HashMaps, Sliding Window, etc.</li>
        <li>📈 Continuous daily streak and optimized solutions.</li>
      </ul>
      <a
        href="https://leetcode.com/your-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md text-sm hover:bg-yellow-300 transition"
      >
        🔗 View Profile
      </a>
    </motion.div>

    {/* HackerRank Box */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-[#1d1e4e] to-[#321a4b] p-8 rounded-xl border border-green-600/40 text-white shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <img src="https://hrcdn.net/fcore/assets/work/header/hackerrank_logo-21e2867566.svg" alt="HackerRank" className="h-5 w-5" />
        <h1 className="text-xl font-semibold text-green-400">HackerRank Badges</h1>
      </div>
      <ul className="list-disc list-inside text-sm space-y-2 mb-4 text-gray-200">
        <li>🏅 Bronze Badges in <strong>Java</strong> and <strong>Problem Solving</strong>.</li>
        <li>🧩 Focused on structured learning through timed contests.</li>
        <li>⚙️ Enhanced coding fluency & time complexity mastery.</li>
      </ul>
      <a
        href="https://www.hackerrank.com/your-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-4 py-2 bg-green-400 text-black font-semibold rounded-md text-sm hover:bg-green-300 transition"
      >
        🔗 View Profile
      </a>
    </motion.div>

    {/* GeeksforGeeks Box */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-[#13284a] to-[#1a1f38] p-8 rounded-xl border border-teal-600/40 text-white shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200817185016/gfg_complete_logo_2x-min.png" alt="GFG" className="h-4" />
        <h1 className="text-xl font-semibold text-teal-300">GFG Practice</h1>
      </div>
      <ul className="list-disc list-inside text-sm space-y-2 mb-4 text-gray-200">
        <li>🧠 Solved <strong>25+ DSA problems</strong> on core topics.</li>
        <li>📘 Arrays, Recursion, Two Pointers, Sorting, and more.</li>
        <li>🛠 Strengthened logic through problem-solving drills.</li>
      </ul>
      <a
        href="https://auth.geeksforgeeks.org/user/your-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-4 py-2 bg-teal-400 text-black font-semibold rounded-md text-sm hover:bg-teal-300 transition"
      >
        🔗 View Profile
      </a>
    </motion.div>
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
      {['Cloud Computing', 'Python', 'Kubernetes', 'Blockchain'].map((tech, index) => (
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

        {/* Other Sections... */}
        {/* Competitive Coding, Achievements, Learning Path already use responsive classes like `grid-cols-1 md:grid-cols-3`, etc.
            If you want me to also optimize those sections line-by-line, just say so and I’ll handle it next. */}

      </div>
    </section>
  );
};

export default Skills;
