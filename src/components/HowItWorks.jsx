// File: src/components/HowItWorks.jsx
'use client';

import { Search, Layout, Code, CloudOff, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Search className="w-12 h-12 text-accent" />,
    title: 'Discover & Plan',
    description: 'Kickoff workshops, stakeholder interviews, and technical audits to define scope and roadmap.',
  },
  {
    icon: <Layout className="w-12 h-12 text-accent" />,
    title: 'Architect & Design',
    description: 'UX/UI mockups, solution blueprints, and data models crafted for performance and scalability.',
  },
  {
    icon: <Code className="w-12 h-12 text-accent" />,
    title: 'Build & Test',
    description: 'Agile development of websites, apps, backends, and pipelines—complete with automated unit & integration tests.',
  },
  {
    icon: <CloudOff className="w-12 h-12 text-accent" />,
    title: 'Deploy & Automate',
    description: 'Infrastructure-as-code, CI/CD pipelines, and auto-scaling deployments on AWS, GCP, or Azure.',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-accent" />,
    title: 'Monitor & Support',
    description: '24/7 monitoring, real-time alerts, and iterative improvements to keep your systems secure and up-to-date.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-neutralLight">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-neutralDark text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Engagement Process
        </motion.h2>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="relative flex items-center justify-center mb-4">
                <div className="bg-white p-4 rounded-full shadow-lg z-10">
                  {step.icon}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform translate-x-1/2 top-2/4 w-full h-1 bg-accent/50 z-0"></div>
                )}
              </div>
              <h3 className="text-2xl font-semibold text-neutralDark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
