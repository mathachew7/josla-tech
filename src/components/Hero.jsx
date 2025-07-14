// File: src/components/Hero.jsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-[url('/bg-1.jpeg')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 lg:px-20">
        <motion.h1
          className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Data<br />Into Decisions
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-200 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Build scalable pipelines, gain real-time insights, and drive decision-making across your organization.
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 inline-block px-8 py-3 bg-neutralDark text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Request a Consultation
        </motion.a>
      </div>
    </section>
  );
}
