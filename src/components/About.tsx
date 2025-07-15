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
      description: 'Began my CSBS degree at Kolahpur Institute of Technalogy Kolhapur, diving deep into programming fundamentals and algorithms.',
      icon: <GraduationCap size={20} />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2024',
      title: 'First Major Project',
      description: 'Built my first full-stack application - a Engineering Study Hub (Comprehensive platform of educational youTUbe Video).',
      icon: <Code size={20} />,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2024',
      title: 'Internship & Growth',
      description: 'Completed Web Development internship at Osis InfoBytes, working on real-world projects and learning industry best practices.',
      icon: <Target size={20} />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2025',
      title: 'Marketing Intern',
      description: 'Started Internship at Vidyashala, building a strong client base.',
      icon: <Award size={20} />,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const stats = [
    { number: '3.8', label: 'GPA', icon: <BookOpen size={24} /> },
    { number: '15+', label: 'Projects', icon: <Code size={24} /> },
    { number: '50+', label: 'Happy Clients', icon: <Users size={24} /> },
    { number: '500+', label: 'Cups of Coffee', icon: <Coffee size={24} /> }
  ];

  const interests = [
    { name: 'Data Structures & Algorithms', level: 90 },
    { name: 'Full-Stack Development', level: 95 },
    { name: 'Artificial Intelligence', level: 85 },
    // { name: 'Mobile Development', level: 80 },
    // { name: 'Cloud Computing', level: 75 },
    // { name: 'Cybersecurity', level: 70 },
    { name: 'UI/UX Design', level: 85 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    
    <section id="about" className="p-10 bg-light-gradient-vertical dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 ">
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto"
          >
             I aim to continuously learn, grow, and contribute to impactful projects that combine creativity, logic, and user-focused solutions. and
            Passionate about creating innovative solutions and exploring the endless possibilities of technology
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4"
          >
           
          </motion.p>
        

        

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Education
              </h3>
              <div className="bg-white/70 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      State University • 2023 - 2024
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
                      Current GPA: 8.9/10 
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Relevant Coursework:</strong> Data Structures & Algorithms, 
                      Software Engineering, Machine Learning, Database Systems, 
                      Web Development, Computer Networks
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Areas of Interest
              </h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div key={index} className="bg-white/70 dark:bg-gray-800 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-white">
                        {interest.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {interest.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${interest.level}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white"
            >
              <h4 className="text-lg font-semibold mb-3">My Mission</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                To leverage cutting-edge technology to create meaningful solutions that solve real-world problems 
                and make a positive impact on people's lives. I believe in continuous learning, collaboration, 
                and pushing the boundaries of what's possible through code.
              </p>
            </motion.div>
          </motion.div>

          {/* My Journey */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
            >
              My Journey
            </motion.h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="relative flex items-start space-x-4"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 bg-white/70 dark:bg-gray-800 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
