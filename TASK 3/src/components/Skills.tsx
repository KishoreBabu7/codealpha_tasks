import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, PenTool, Layout, Monitor, Database, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 82 },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <PenTool className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 92 },
        { name: "UI Design", level: 88 },
        { name: "UX Research", level: 80 },
        { name: "Prototyping", level: 85 },
        { name: "Design Systems", level: 83 },
      ]
    },
    {
      title: "Backend & DevOps",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 78 },
        { name: "REST APIs", level: 88 },
      ]
    },
  ];

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

  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", 
    "GraphQL", "MongoDB", "PostgreSQL", "Docker", "AWS", 
    "Firebase", "Redux", "Framer Motion", "Git", "Figma"
  ];

  useEffect(() => {
    if (inView) {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach((bar) => {
        bar.classList.add('animate');
      });
    }
  }, [inView]);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-dark-100/70 dark:text-white/70 max-w-2xl mx-auto">
              These are the technologies and skills I've mastered over the years to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="interactive-card h-full flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-500 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="heading-sm">{category.title}</h3>
                </div>
                
                <div className="space-y-5 flex-grow">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden skill-bar">
                        <div 
                          className="skill-progress h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          style={{ "--width": `${skill.level}%` } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="heading-md text-center mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-dark-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;