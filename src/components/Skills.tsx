import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Palette, Server, Smartphone, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-purple-500',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 88 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-green-500 to-blue-500',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 78 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 87 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'React Native', level: 78 },
        { name: 'Flutter', level: 65 },
        { name: 'Mobile UI/UX', level: 82 },
        { name: 'App Store Deployment', level: 70 }
      ]
    },
    {
      icon: Brain,
      title: 'AI/ML & Data',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 72 },
        { name: 'TensorFlow', level: 68 },
        { name: 'Data Analysis', level: 75 },
        { name: 'Python Libraries', level: 80 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 65 },
        { name: 'UI/UX Design', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const newValues: { [key: string]: number } = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newValues[skill.name] = skill.level;
          });
        });
        setAnimatedValues(newValues);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section className="section-padding bg-gradient-to-b from-purple-900/10 to-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Skills & Expertise</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across
            various domains of software development and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 cursor-hover"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-mono">
                        {animatedValues[skill.name] || 0}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${animatedValues[skill.name] || 0}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-300">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
              'AWS', 'Docker', 'Git', 'Figma', 'TensorFlow', 'React Native', 'Next.js',
              'Express.js', 'Tailwind CSS', 'Firebase', 'Stripe', 'Socket.io', 'GraphQL'
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 glass text-purple-300 rounded-full text-sm font-medium cursor-hover"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;