import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, Code, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const timelineItems = [
    {
      icon: School,
      title: 'High School',
      subtitle: 'Science Stream',
      year: '2019-2021',
      description: 'Completed 12th grade with focus on Mathematics and Physics',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: GraduationCap,
      title: 'B.Tech CSE',
      subtitle: 'Computer Science & Engineering',
      year: '2021-Present',
      description: 'Currently pursuing Bachelor of Technology with specialization in software development',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'First Project',
      subtitle: 'Web Development',
      year: '2022',
      description: 'Built my first full-stack application using React and Node.js',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: 'Achievements',
      subtitle: 'Hackathons & Competitions',
      year: '2023-Present',
      description: 'Participated in multiple hackathons and coding competitions',
      color: 'from-blue-500 to-indigo-500'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My journey from a curious student to a passionate developer, constantly learning and growing
            in the ever-evolving world of technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <motion.div
                  className="glass-card p-6 cursor-hover"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${item.color} mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <h4 className="text-cyan-300 font-semibold mb-2">{item.subtitle}</h4>
                  <p className="text-sm text-cyan-400 mb-3">{item.year}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10 w-4 h-4 bg-cyan-500 rounded-full shadow-lg glow"></div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Personal Philosophy</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              "Technology is best when it brings people together and solves real-world problems. 
              I believe in writing clean, efficient code and creating digital experiences that make a difference. 
              Every line of code is an opportunity to learn something new and build something amazing."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;