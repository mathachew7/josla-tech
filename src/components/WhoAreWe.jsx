// File: src/components/WhoAreWe.jsx
'use client';

import { Users, Flag, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const infoItems = [
  {
    img: '/who.jpg',
    icon: <Users className="w-14 h-14 text-white mb-4" />, 
    title: 'Our People',
    text: 'Our team of seasoned data engineers, AI specialists, and cloud architects bring decades of experience to every project, ensuring reliable and innovative solutions.',
  },
  {
    img: '/who2.jpg',
    icon: <Flag className="w-14 h-14 text-white mb-4" />, 
    title: 'Our Mission',
    text: 'To empower organizations with scalable, secure, and AI-driven data pipelines that unlock actionable insights and drive strategic growth.',
  },
  {
    img: '/who3.jpg',
    icon: <Eye className="w-14 h-14 text-white mb-4" />, 
    title: 'Our Vision',
    text: 'To be the trusted global partner for enterprise data transformation, pioneering solutions that shape the future of data-driven decision-making.',
  },
];

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="py-20 bg-neutralLight">
      <div className="max-w-7xl mx-auto px-6 text-neutralDark">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {infoItems.map(({ img, icon, title, text }, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              {/* Card Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Icon & Content */}
              <div className="p-8 bg-neutralDark">
                <div className="flex justify-center">{icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3 text-center">{title}</h3>
                <p className="text-white/80 leading-relaxed text-center">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
