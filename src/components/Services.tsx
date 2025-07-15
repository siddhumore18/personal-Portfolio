import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  Search, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      id: 1,
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and cloud services.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'Performance Optimization',
        'SEO Friendly'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50/80 dark:bg-blue-900/20'
    },
    {
      id: 2,
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with React Native and native performance.',
      features: [
        'iOS & Android',
        'Native Performance',
        'Offline Support',
        'Push Notifications'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50/80 dark:bg-green-900/20'
    },
    {
      id: 3,
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with databases, APIs, and cloud infrastructure.',
      features: [
        'RESTful APIs',
        'Database Design',
        'Cloud Deployment',
        'Security Implementation'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50/80 dark:bg-purple-900/20'
    },
    {
      id: 4,
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50/80 dark:bg-pink-900/20'
    },
    {
      id: 5,
      icon: <Search size={32} />,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility and ranking in search engine results.',
      features: [
        'Technical SEO',
        'Content Optimization',
        'Performance Audit',
        'Analytics Setup'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50/80 dark:bg-yellow-900/20'
    },
    {
      id: 6,
      icon: <Shield size={32} />,
      title: 'Security Consulting',
      description: 'Comprehensive security audits and implementation of best practices.',
      features: [
        'Security Audits',
        'Vulnerability Testing',
        'Data Protection',
        'Compliance Support'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50/80 dark:bg-red-900/20'
    }
  ];

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
    <section id="services" className="py-20 bg-light-gradient-vertical dark:bg-gray-800">
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
            Services I Offer
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive solutions to bring your digital ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white/80 dark:bg-gray-900 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className={`w-16 h-16 ${service.bgColor} backdrop-blur-sm rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-400">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ x: 5 }}
                className={`flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-semibold group-hover:gap-3 transition-all duration-300`}
              >
                Learn More
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              My Process
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              How I work with clients to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed project roadmap' },
              { step: '03', title: 'Development', desc: 'Building with best practices' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and support' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;