import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const phrases = ['Developer', 'CSE Student', 'Tech Enthusiast', 'Problem Solver'];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];
    
    if (displayText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, phraseIndex, phrases]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-20"></div>
      
      <motion.div
        className="text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-glow"
          variants={itemVariants}
        >
          Archit Vishnoi
        </motion.h1>
        
        <motion.div
          className="text-2xl md:text-3xl text-cyan-300 mb-8 h-12 flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>
        
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Crafting innovative solutions through code, currently pursuing B.Tech in Computer Science & Engineering. 
          Passionate about creating meaningful digital experiences.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold overflow-hidden cursor-hover magnetic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </motion.button>
          
          <motion.button
            className="group px-8 py-4 border-2 border-cyan-500 text-cyan-300 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-hover magnetic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
        
        <motion.div
          className="flex justify-center space-x-6 mb-16"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Mail, href: '#' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="p-3 glass rounded-full hover:bg-cyan-500/20 transition-all duration-300 cursor-hover"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          className="animate-bounce cursor-hover text-cyan-400"
          variants={itemVariants}
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;