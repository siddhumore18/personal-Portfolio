import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'New York, NY',
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
      title: 'Web Development Teaching Assistant',
      company: 'State University',
      location: 'University Campus',
      duration: 'Jan 2024 - Present',
      type: 'Part-time',
      description: 'Assist students in learning web development fundamentals. Grade assignments and provide feedback on coding projects.',
      achievements: [
        'Mentored 50+ students in web development',
        'Created tutorial materials for React basics',
        'Maintained 95% student satisfaction rating'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      id: 3,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      duration: 'Sep 2023 - Present',
      type: 'Freelance',
      description: 'Design and develop custom websites for small businesses and startups. Handle full project lifecycle from requirements to deployment.',
      achievements: [
        'Completed 10+ client projects',
        'Achieved 100% client satisfaction',
        'Generated $15K+ in revenue'
      ],
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
    <section id="experience" className="py-20 bg-white/90 dark:bg-gray-900">
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
            Work Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto"
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
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block" />
                
                <div className="md:ml-16">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/70 dark:bg-gray-800 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-400 mb-6">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                        <Award size={16} className="text-yellow-500" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
          <div className="bg-white/70 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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