import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="inline-block relative">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          </div>
          <div className="text-purple-400 text-xl font-mono animate-pulse">
            Loading Portfolio...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      
      <AnimatePresence>
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Interests />
          <Contact />
          <Footer />
        </main>
      </AnimatePresence>
      
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(102, 252, 241, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(102, 252, 241, 0.3)',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

export default App;