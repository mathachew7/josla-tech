// File: src/components/Pricing.jsx
'use client';

import { motion } from 'framer-motion';

import { Database, Cloud, Shield, Cpu } from 'lucide-react';

const services = [
  { icon: Database, label: 'Data Engineering', desc: 'Robust pipelines to clean, transform, and ingest data at scale.' },
  { icon: Cloud,    label: 'Cloud Architecture', desc: 'Designs secure, scalable cloud environments tailored for you.' },
  { icon: Shield,   label: 'Security & Compliance', desc: 'Best-in-class security practices and compliance frameworks.' },
  { icon: Cpu,      label: 'Machine Learning', desc: 'AI models that drive predictive insights and automation.' },
];

export default function Engagement() {
  return (
    <section id="engagement" className="relative py-16 bg-white overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center gap-12">

        {/* Left: Dashboard Image Tilted, larger */}
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="overflow-visible rounded-2xl"
            style={{ transform: 'perspective(1000px) rotateY(12deg) scale(1.1)' }}
          >
            <img
              src="dashboard.png"
              alt="Analytics Dashboard"
              className="h-auto w-full max-w-lg object-contain"
            />
          </div>
        </motion.div>

        {/* Right: Text & Styled Services */}
        <motion.div
          className="text-neutralDark space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Comprehensive IT & Data Services
          </h2>
          <p className="text-base max-w-md">
            Architecting secure infrastructure, cloud solutions, and AI-driven analytics—scalable and reliable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {services.map((s, idx) => (
              <motion.div
                key={s.label}
                className="bg-accent/10 border-l-4 border-accent p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <s.icon className="w-5 h-5 text-accent" />
                  <h3 className="font-medium text-lg">{s.label}</h3>
                </div>
                <p className="text-sm text-neutralDark/80">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="/contact-us"
            className="mt-6 inline-block px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-primary transition-transform transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Request a Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
