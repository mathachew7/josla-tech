'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', form);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-white text-neutralDark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold mb-6">
            Thank you!
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg">
            We’ve received your message and will get back to you soon.
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-start gap-12">

        {/* Form (60%) */}
        <motion.div
          className="w-full lg:w-3/5 p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl space-y-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutralDark">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-200 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-200 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-200 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-200 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full inline-block px-8 py-4 bg-primary text-white font-semibold rounded-[2rem] hover:bg-accent transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Illustration (40%, larger, tilted) */}
        <motion.div
          className="w-full lg:w-3/5 mt-12 lg:mt-0 flex items-center justify-end overflow-visible"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="rounded-[3rem]"
            style={{ transform: 'perspective(1000px) rotateX(5deg) rotateY(-10deg) scale(0.9)' }}
          >
            <img
              src="contact.png"
              alt="Contact Illustration"
              className="w-full h-auto object-cover rounded-[2rem]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
