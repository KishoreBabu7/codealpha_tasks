import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com' },
    { icon: <Mail size={18} />, href: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="bg-white dark:bg-dark-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.a 
            href="#home" 
            className="text-3xl font-bold hover-underline mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient">Portfolio</span>
          </motion.a>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-dark-100/80 dark:text-white/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="flex space-x-4 mb-10">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-dark-200 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/20 text-dark-100 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-4 bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-900/40 rounded-full text-primary-600 dark:text-primary-400 mb-8 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>

          <div className="text-center">
            <p className="text-dark-100/60 dark:text-white/60">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <p className="text-dark-100/60 dark:text-white/60 text-sm mt-2">
              Designed and built with passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;