import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-primary-200/40 dark:bg-primary-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-secondary-200/40 dark:bg-secondary-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-accent-200/30 dark:bg-accent-800/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="heading-xl mb-6">
                <span className="block">
                  Hello, I'm
                </span>
                <span className="text-gradient">Kishore Babu Tulugu</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-dark-100/80 dark:text-white/80 mb-6">
                Full Stack Developer
              </h2>
              
              <p className="text-lg text-dark-100/70 dark:text-white/70 mb-8 max-w-lg">
                Computer Science graduate passionate about creating innovative digital solutions. 
                I combine technical expertise with creative problem-solving to build impactful applications.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a 
                  href="#projects"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.a>
              </div>

              <div className="flex space-x-5">
                <a
                  href="https://github.com/KishoreBabu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-200 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kishorebabu-tulugu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-200 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:tulugukishorebabu@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-dark-200 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQEbeR9J8pHYnw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719423078276?e=1752710400&v=beta&t=oYq8C1yUCYbMijpwCG-REQf70Tdyzm8k-1x4OVOOGC8" 
                alt="Kishore Babu Tulugu" 
                className="w-full h-full object-cover rounded-3xl shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;