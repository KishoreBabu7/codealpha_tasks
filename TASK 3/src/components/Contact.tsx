import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  Github,
  Linkedin,
  Instagram
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'tulugukishorebabu@gmail.com',
      link: 'mailto:tulugukishorebabu@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Social',
      value: '@kb7.empowers',
      link: 'https://www.instagram.com/kb7.empowers',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'India',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-dark-100/70 dark:text-white/70 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="space-y-8">
                <h3 className="heading-md mb-6">Contact Information</h3>
                
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="flex items-start space-x-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                      <p className="text-dark-100/80 dark:text-white/80">{item.value}</p>
                    </div>
                  </motion.a>
                ))}

                <div className="pt-6">
                  <h4 className="font-medium text-lg mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/KishoreBabu7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/kishorebabu-tulugu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/kb7.empowers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 relative"
            >
              <div className="interactive-card h-full">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full mb-4 text-green-600"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h3 className="heading-md mb-4">Message Sent!</h3>
                    <p className="text-dark-100/80 dark:text-white/80 mb-6 max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </motion.button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="heading-md mb-6">Send Me a Message</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                            errors.name ? 'border border-red-500 focus:ring-red-500' : 'border border-transparent'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                            errors.email ? 'border border-red-500 focus:ring-red-500' : 'border border-transparent'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                          errors.subject ? 'border border-red-500 focus:ring-red-500' : 'border border-transparent'
                        }`}
                        placeholder="Project Inquiry"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none ${
                          errors.message ? 'border border-red-500 focus:ring-red-500' : 'border border-transparent'
                        }`}
                        placeholder="Hello, I would like to discuss a project..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="btn btn-primary w-full md:w-auto inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;