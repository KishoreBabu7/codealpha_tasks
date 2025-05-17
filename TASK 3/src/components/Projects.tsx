import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  githubLink: string;
  fullDescription: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with React and Node.js",
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      link: "https://example.com",
      githubLink: "https://github.com",
      fullDescription: "A complete e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard for inventory management. The application uses Redux for state management and features responsive design for all device sizes."
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Mobile App",
      description: "Task management mobile application built with React Native",
      image: "https://images.pexels.com/photos/6804079/pexels-photo-6804079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React Native", "Firebase", "Redux"],
      link: "https://example.com",
      githubLink: "https://github.com",
      fullDescription: "A comprehensive task management application built with React Native and Firebase. The app includes features such as task creation, due dates, reminders, categorization, and team collaboration. It syncs data across multiple devices and works offline. The UI is designed for optimal mobile user experience with smooth animations and intuitive gestures."
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Design",
      description: "Personal portfolio website with modern design principles",
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["HTML/CSS", "JavaScript", "GSAP", "Figma"],
      link: "https://example.com",
      githubLink: "https://github.com",
      fullDescription: "A personal portfolio website designed with modern aesthetics and engaging animations. The site showcases projects, skills, and contact information with a focus on user experience. Built with HTML, CSS, and JavaScript with GSAP for animations. The design process included wireframing and prototyping in Figma before development."
    },
    {
      id: 4,
      title: "Real Estate Dashboard",
      category: "Web Development",
      description: "Dashboard for real estate management with analytics",
      image: "https://images.pexels.com/photos/7821879/pexels-photo-7821879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "Node.js", "Chart.js", "PostgreSQL"],
      link: "https://example.com",
      githubLink: "https://github.com",
      fullDescription: "A comprehensive real estate management dashboard that provides property insights, tenant information, and financial analytics. Built with React for the frontend and Node.js for the backend, with PostgreSQL as the database. Features include property listings, tenant management, maintenance requests, payment tracking, and detailed analytics visualized with Chart.js."
    },
    {
      id: 5,
      title: "Health & Fitness App",
      category: "Mobile App",
      description: "Health tracking and workout planning mobile application",
      image: "https://images.pexels.com/photos/3927386/pexels-photo-3927386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React Native", "Firebase", "Redux"],
      link: "https://example.com",
      githubLink: "https://github.com",
      fullDescription: "A comprehensive health and fitness application that allows users to track workouts, set fitness goals, monitor nutrition, and track progress. Built with React Native for cross-platform compatibility and Firebase for backend services. Features include workout libraries, custom workout creation, progress photos, and social sharing capabilities."
    },
    {
      id: 6,
      title: "Corporate Website Redesign",
      category: "Web Design",
      description: "Complete redesign of a corporate website with focus on UX",
      image: "https://images.pexels.com/photos/7821859/pexels-photo-7821859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["Figma", "HTML/CSS", "JavaScript", "WordPress"],
      link: "https://example.com",
      githubLink: "https://github.com",
      fullDescription: "A complete redesign of a corporate website focused on improving user experience, information architecture, and conversion rates. The project included user research, wireframing, prototyping in Figma, and implementation with WordPress. The new design resulted in a 40% increase in time on site and a 25% increase in conversion rates."
    }
  ];

  const filters = ['all', 'Web Development', 'Mobile App', 'Web Design'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleOpenProject = (project: ProjectProps) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-200" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-dark-100/70 dark:text-white/70 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex justify-center flex-wrap gap-3 mb-12"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-dark-300 hover:bg-gray-300 dark:hover:bg-dark-400'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === 'all' ? 'All' : filter}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="responsive-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="project-card interactive-card overflow-hidden"
                onClick={() => handleOpenProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg h-60 mb-4 cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end p-4">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-dark-100/70 dark:text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-dark-300 rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseProject}
          >
            <motion.div
              className="bg-white dark:bg-dark-200 rounded-xl shadow-xl max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleCloseProject}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h2>
                
                <p className="text-dark-100/80 dark:text-white/80 mb-6">
                  {selectedProject.fullDescription}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Visit Project
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline inline-flex items-center"
                  >
                    View Code
                    <Github size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;