import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-purple-900/20 py-12 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            className="text-center md:text-left mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-glow mb-2">Your Name</h3>
            <p className="text-gray-400">Developer | CSE Student | Tech Enthusiast</p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-hover magnetic"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
          </motion.button>
        </div>

        <motion.div
          className="text-center py-6 border-t border-purple-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-purple-400" />
            <span>© 2024 Your Name. All rights reserved.</span>
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;