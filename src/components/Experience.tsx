import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      id: 1,
      title: 'Web Developer Intern',
      company: 'Osis InfoBytes',
      location: 'Pune, Maharashtra',
      duration: 'Jun 2024 - Aug 2024',
      type: 'Internship',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers to implement new features and optimize performance.',
      achievements: [
        'Improved application load time by 40%',
        'Built 5+ reusable React components',
        'Participated in code reviews and agile development'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
    },
    {
      id: 2,
      title: 'Technical Specialist In Poineer 2025 (Organised by ISTE)',
      company: 'ISTE KIT CoEK',
      location: 'College Campus',
      duration: 'Jan 2024 - March 2024',
      description: 'Developed and deployed the official event website.',
      achievements: [
        'Mentored 20+ students in web development',
        'Handled technical part of 1000+ participant event'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      id: 3,
      title: 'NSS Volunteer',
      company: 'Self-Employed',
      location: '',
      duration: 'Sep 2024 - Present',
      type: '',
      description: 'Contributed to social development and community projects through NSS activities.',
      achievements: [],
      technologies: ['React', 'Next.js', 'Firebase', 'Stripe', 'Vercel']
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Internship': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Part-time': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Freelance': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-10 px-4 sm:px-6 lg:px-8 bg-light-gradient-vertical dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800">
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
            Experience & Learning
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My professional journey and the experiences that have shaped my skills
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line - hidden on small screens */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block" />

                <div className="md:ml-16">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/70 dark:bg-gray-800 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                            {exp.title}
                          </h3>
                          {exp.type && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                              {exp.type}
                            </span>
                          )}
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-sm text-gray-700 dark:text-gray-400 mb-6">
                        {exp.description}
                      </p>
                    )}

                    {exp.achievements.length > 0 && (
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                          <Award size={16} className="text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-400 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-white/70 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
