import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TowerControl as GameController2, Music, Camera, BookOpen, Mountain, Coffee, Gamepad2, Headphones } from 'lucide-react';

const Interests: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const interests = [
    {
      icon: GameController2,
      title: 'Gaming',
      description: 'Passionate about game development and playing strategy games. Love exploring virtual worlds and game mechanics.',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Music,
      title: 'Music Production',
      description: 'Creating electronic music and beats. Fascinated by the intersection of technology and creativity in audio.',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and exploring visual storytelling. Particularly interested in tech and urban photography.',
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: BookOpen,
      title: 'Tech Literature',
      description: 'Reading about emerging technologies, sci-fi novels, and technical documentation. Always learning something new.',
      color: 'from-green-500 to-blue-500',
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Mountain,
      title: 'Hiking',
      description: 'Love exploring nature and disconnecting from the digital world. Great for clearing the mind and finding inspiration.',
      color: 'from-green-600 to-green-400',
      image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Coffee,
      title: 'Coffee Culture',
      description: 'Exploring different brewing methods and coffee cultures. The perfect fuel for late-night coding sessions.',
      color: 'from-yellow-600 to-orange-500',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Interests & Hobbies</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Beyond coding, I have diverse interests that keep me creative, inspired, and balanced.
            These hobbies often influence my approach to problem-solving and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-hover"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0">
                <img
                  src={interest.image}
                  alt={interest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-t ${interest.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              <div className="relative z-10 p-6 h-80 flex flex-col justify-end">
                <motion.div
                  className={`inline-block p-3 rounded-2xl bg-gradient-to-r ${interest.color} mb-4 w-fit`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <interest.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {interest.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {interest.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Gamepad2, stat: '500+', label: 'Hours Gaming' },
            { icon: Headphones, stat: '50+', label: 'Playlists Created' },
            { icon: Camera, stat: '1000+', label: 'Photos Taken' },
            { icon: Mountain, stat: '25+', label: 'Trails Hiked' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center cursor-hover"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{item.stat}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Life Philosophy</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              "Balance is key to creativity and productivity. Whether I'm debugging code at 2 AM 
              or capturing a sunset on a mountain trail, each experience shapes my perspective 
              and makes me a better developer and human being."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;