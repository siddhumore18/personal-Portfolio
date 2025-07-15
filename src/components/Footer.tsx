import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Code, ArrowUp, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Consulting'
  ];

  const technologies = [
    'React & Next.js',
    'Node.js & Python',
    'AI & Machine Learning',
    'DSA'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Code size={20} className="text-white" />
                  </div>
                  <span className="text-2xl font-bold">
                    siddheshwar<span className="text-blue-400">More</span>
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Passionate computer science student creating innovative solutions 
                  and exploring the intersection of technology and human experience.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/siddhumore18', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/siddheshwar-more-24873b284/', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:srmore125125@gmai.com', label: 'Email' }
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Services */}
            {/* <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div> */}
            
            {/* Technologies */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Technologies</h4>
                <ul className="space-y-3">
                  {technologies.map((tech) => (
                    <li key={tech} className="text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"
              >
                <span>© {currentYear} siddheshwar more. All rights reserved.</span>
                {/* <div className="mx-2">•</div>
                <span className="flex items-center">
                  Made with <Heart size={16} className="text-red-500 mx-1 animate-pulse" /> and lots of
                  <Coffee size={16} className="text-yellow-500 ml-1" />
                </span> */}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center space-x-6"
              >
                <span className="text-gray-400 text-sm">
                  Built with React & Tailwind CSS
                </span>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={20} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;