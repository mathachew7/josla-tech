// File: src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutralLight">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div>
          <h2 className="text-4xl font-extrabold text-primary mb-6">
            About Josla Tech LLC
          </h2>
          <p className="text-neutralDark mb-4 leading-relaxed">
            At Josla Tech LLC, we specialize in designing and implementing
            robust, AI-driven data engineering solutions that transform your
            raw data into strategic assets. With over a decade of combined
            experience, our team delivers end-to-end pipelines—from ingestion
            and transformation to deployment and monitoring.
          </p>
          <p className="text-neutralDark mb-6 leading-relaxed">
            We partner with mid-market and enterprise organizations to accelerate
            time-to-insight, ensure data reliability, and empower data-driven
            decision-making at every level. Security, scalability, and
            innovation are at the heart of everything we build.
          </p>
          <ul className="space-y-3">
            {[
              '✅ Custom ETL & ELT pipelines',
              '✅ Real-time streaming & analytics',
              '✅ Scalable cloud architecture (AWS, GCP, Azure)',
              '✅ Automated MLOps & model monitoring',
            ].map((item) => (
              <li key={item} className="text-neutralDark font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Column */}
        <div className="relative">
          <img
            src="/images/about-hero.jpg"
            alt="Team collaborating on data architecture"
            className="w-full rounded-lg shadow-card object-cover h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutralLight/50 to-transparent rounded-lg" />
        </div>
      </div>
    </section>
  );
}
