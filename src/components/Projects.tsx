import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern web technologies and responsive design principles.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web',
      github: '#',
      live: '#',
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile app for task management built with React Native',
      longDescription: 'A productivity app that helps users organize their daily tasks with features like categorization, reminders, progress tracking, and collaboration tools.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      github: '#',
      live: '#',
      features: ['Task Categorization', 'Push Notifications', 'Offline Support', 'Team Collaboration']
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot using natural language processing and machine learning',
      longDescription: 'An AI-powered chat assistant that can answer questions, provide recommendations, and assist with various tasks using advanced NLP algorithms.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'NLP', 'API'],
      category: 'AI/ML',
      github: '#',
      live: '#',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Learning Capability']
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology',
      longDescription: 'A decentralized voting application ensuring transparency, security, and immutability of votes using blockchain technology and smart contracts.',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Solidity', 'Web3', 'React', 'Ethereum'],
      category: 'Blockchain',
      github: '#',
      live: '#',
      features: ['Smart Contracts', 'Voter Authentication', 'Real-time Results', 'Audit Trail']
    }
  ];

  const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Blockchain'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="section-padding bg-gradient-to-b from-purple-900/10 to-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical skills and creativity through various projects
            spanning web development, mobile apps, AI/ML, and blockchain technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-hover ${
                filter === category
                  ? 'bg-purple-500 text-white glow'
                  : 'glass text-purple-300 hover:bg-purple-500/20'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden group cursor-hover magnetic"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        className="p-2 bg-black/50 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-2 bg-black/50 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="p-8">
                        <h3 className="text-3xl font-bold mb-4 text-purple-300">{project.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-purple-300">Key Features</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-300">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-purple-300">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <motion.a
                            href={project.github}
                            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors cursor-hover"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            className="flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-300 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all cursor-hover"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                          </motion.a>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;