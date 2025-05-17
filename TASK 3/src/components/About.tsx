import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Download, MapPin, Briefcase, Mail } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-dark-100/70 dark:text-white/70 max-w-2xl mx-auto">
              Get to know me better - my background, experience, and what drives my passion for creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              variants={itemVariants} 
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl opacity-70"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEbeR9J8pHYnw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719423078276?e=1752710400&v=beta&t=oYq8C1yUCYbMijpwCG-REQf70Tdyzm8k-1x4OVOOGC8"
                alt="About Me"
                className="rounded-xl shadow-lg w-full h-auto object-cover relative z-10"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="heading-md mb-4">
                Full Stack Developer
              </h3>
              <p className="text-dark-100/80 dark:text-white/80 mb-6">
                I'm a Computer Science graduate from Centurion University with a passion for creating 
                innovative digital solutions. I specialize in full-stack development, combining technical 
                expertise with creative problem-solving abilities.
              </p>
              <p className="text-dark-100/80 dark:text-white/80 mb-8">
                My approach focuses on building scalable, user-friendly applications that deliver 
                exceptional performance and user experience. I'm constantly learning and adapting 
                to new technologies to stay at the forefront of web development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Calendar size={20} className="text-primary-500 mr-3" />
                  <span>CBSE & St. Joseph's Alumni</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="text-primary-500 mr-3" />
                  <span>India</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={20} className="text-primary-500 mr-3" />
                  <span>Available for Projects</span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-primary-500 mr-3" />
                  <span>tulugukishorebabu@gmail.com</span>
                </div>
              </div>

              <motion.a
                href="https://drive.google.com/file/d/1gQUcEhSL2KkTxoUx2I_D9-FluQJDOVol/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <Download size={16} className="ml-2" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="interactive-card">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary-500">B.Tech</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
              <p className="text-dark-100/70 dark:text-white/70">
                Centurion University graduate with strong technical foundation.
              </p>
            </div>
            
            <div className="interactive-card">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary-500">CBSE</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
              <p className="text-dark-100/70 dark:text-white/70">
                Akshara Senior Secondary School with focus on sciences.
              </p>
            </div>
            
            <div className="interactive-card">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary-500">10th</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Matriculation</h3>
              <p className="text-dark-100/70 dark:text-white/70">
                St. Joseph's English Medium School graduate.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;