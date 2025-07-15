import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Target, Calendar, Award, BookOpen, Users, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const timeline = [
    {
      year: '2023',
      title: 'Started Computer Science And Business Systems Journey',
      description: 'Began my CSBS degree at Kolahpur Institute of Technology, diving into programming and algorithms.',
      icon: <GraduationCap size={20} />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2024',
      title: 'First Major Project',
      description: 'Built my first full-stack app: Engineering Study Hub – a platform with educational YouTube videos.',
      icon: <Code size={20} />,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2024',
      title: 'Internship & Growth',
      description: 'Completed Web Dev internship at Osis InfoBytes, working on real-world projects.',
      icon: <Target size={20} />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2025',
      title: 'Marketing Intern',
      description: 'Started internship at Vidyashala, building a strong client base.',
      icon: <Award size={20} />,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const interests = [
    { name: 'Data Structures & Algorithms', level: 90 },
    { name: 'Full-Stack Development', level: 95 },
    { name: 'Artificial Intelligence', level: 85 },
    { name: 'UI/UX Design', level: 85 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-light-gradient-vertical dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about tech, I aim to learn and grow through real-world projects that combine creativity and logic.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-10">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Education</h3>
              <div className="bg-white/70 dark:bg-blue-900/20 rounded-lg p-6 border dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Bachelor in CSBS</h4>
                    <p className="text-blue-600 dark:text-blue-400">Kolhapur Institute of Technology • 2023 - Present</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">GPA: 8.9 / 10</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Courses:</strong> DSA, Machine Learning, Web Dev, DBMS, Networks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Areas of Interest</h3>
              <div className="space-y-4">
                {interests.map((interest, idx) => (
                  <div key={idx} className="bg-white/70 dark:bg-gray-800 rounded-lg p-4 border dark:border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-white">{interest.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{interest.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${interest.level}%` } : { width: 0 }}
                        transition={{ delay: idx * 0.1, duration: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">My Mission</h4>
              <p className="text-sm opacity-90">
                To build impactful tech solutions that solve real problems and drive innovation.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              My Journey
            </motion.h3>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded" />
              <div className="space-y-8">
                {timeline.map((event, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="relative flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-r ${event.color}`}>
                      {event.icon}
                    </div>
                    <div className="flex-1 bg-white/70 dark:bg-gray-800 rounded-lg p-6 border dark:border-gray-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{event.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{event.title}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-400">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
