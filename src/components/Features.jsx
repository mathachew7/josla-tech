// File: src/components/Features.jsx
'use client';

import { Globe, Code, Smartphone, Database, GitMerge, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Globe className="w-14 h-14 text-primary mb-4" />,  
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies for performance and scalability.',
  },
  {
    icon: <Code className="w-14 h-14 text-primary mb-4" />,  
    title: 'Software Engineering',
    description: 'Custom software solutions, from enterprise applications to automation tools, tailored to your needs.',
  },
  {
    icon: <Smartphone className="w-14 h-14 text-primary mb-4" />,  
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.',
  },
  {
    icon: <Database className="w-14 h-14 text-primary mb-4" />,  
    title: 'Data Engineering',
    description: 'End-to-end pipelines to collect, process, and visualize data for actionable insights.',
  },
  {
    icon: <GitMerge className="w-14 h-14 text-primary mb-4" />,  
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, infrastructure as code, and automated workflows for reliable deployments.',
  },
  {
    icon: <Cloud className="w-14 h-14 text-primary mb-4" />,  
    title: 'Cloud Architecture',
    description: 'Scalable, secure deployments on AWS, GCP, or Azure to handle any workload.',
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-16 pb-12 bg-gradient-to-b from-neutralLight to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-neutralDark mb-12 text-center">
          Our Core Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, description }, idx) => (
            <motion.div
              key={title}
              className="relative bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              {/* Accent border */}
              <div className="absolute top-0 left-0 h-1 w-20 bg-primary rounded-b-lg"></div>
              <div className="flex flex-col items-center">
                {icon}
                <h3 className="text-xl font-semibold text-neutralDark mb-3">{title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
