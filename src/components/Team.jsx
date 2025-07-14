// File: src/components/Team.jsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Data Architect', photo: 'emp1.jpg', linkedin: '#', github: '#' },
  { name: 'Bob Smith',     role: 'ML Engineer',   photo: 'emp2.jpg', linkedin: '#', github: '#' },
  { name: 'Carol Lee',     role: 'Cloud Lead',    photo: 'emp3.jpg', linkedin: '#', github: '#' },
  { name: 'David Kim',     role: 'DevOps',        photo: 'emp4.jpg', linkedin: '#', github: '#' },
];

export default function Team() {
  const containerRef = useRef(null);
  return (
    <section id="team" className="py-20 bg-primary/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        <div
          ref={containerRef}
          className="flex flex-nowrap gap-8 overflow-x-auto snap-x snap-mandatory py-4 px-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:snap-none"
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="snap-center flex-shrink-0 sm:flex-grow-0 sm:basis-auto sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.15)' }}
            >
              <div className="relative rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm border border-primary shadow-md hover:shadow-lg transition-shadow duration-300 w-64 sm:w-full">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-1 text-neutralDark">{member.name}</h3>
                  <p className="text-sm mb-4 text-neutralDark">{member.role}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5 text-neutralDark" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5 text-neutralDark" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
