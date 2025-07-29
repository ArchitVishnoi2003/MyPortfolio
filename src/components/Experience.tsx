import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, Star } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Frontend Developer Intern',
      duration: 'Jun 2023 - Aug 2023',
      location: 'Remote',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers to implement new features and optimize performance.',
      achievements: [
        'Built 3 production-ready components used across multiple projects',
        'Improved page load times by 40% through code optimization',
        'Participated in daily stand-ups and code reviews'
      ],
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
    },
    {
      company: 'StartupHub',
      position: 'Full Stack Developer',
      duration: 'Dec 2023 - Feb 2024',
      location: 'Hybrid',
      description: 'Worked on a complete e-commerce platform from conception to deployment. Handled both frontend and backend development tasks.',
      achievements: [
        'Developed RESTful APIs serving 1000+ daily active users',
        'Implemented secure payment gateway integration',
        'Mentored 2 junior developers in modern web technologies'
      ],
      logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100',
      skills: ['Node.js', 'MongoDB', 'Express', 'React', 'AWS']
    },
    {
      company: 'OpenSource Contributor',
      position: 'Volunteer Developer',
      duration: 'Jan 2024 - Present',
      location: 'Remote',
      description: 'Contributing to various open-source projects, focusing on JavaScript libraries and developer tools. Active in the open-source community.',
      achievements: [
        '15+ merged pull requests across different repositories',
        'Maintained documentation for 2 popular npm packages',
        'Helped resolve 25+ GitHub issues'
      ],
      logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100',
      skills: ['Open Source', 'Documentation', 'Community', 'Collaboration']
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-black to-purple-900/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Experience</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My professional journey and contributions to various projects and organizations,
            showcasing growth in technical skills and collaboration.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}

              <div className="flex items-start gap-6">
                {/* Company Logo */}
                <motion.div
                  className="relative z-10 w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 glow flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className="glass-card p-6 flex-1 cursor-hover"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-purple-300 mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-purple-300 font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-full font-semibold cursor-hover magnetic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;