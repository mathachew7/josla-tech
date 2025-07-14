// File: src/components/CaseStudies.jsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Heart, Zap, Globe, Truck, Server, ChevronLeft, ChevronRight } from 'lucide-react';

// Renowned companies with Clearbit domains and expanded impact details
const caseStudies = [
  {
    icon: BarChart2,
    title: 'Cloud Infrastructure Modernization on GCP',
    logoDomain: 'google.com',
    client: 'Google LLC',
    year: '2024',
    description: 'Migrated legacy data centers to GCP, improving reliability by 40% and reducing costs by 25%.',
    impact: 'Reliability ↑40%, costs ↓25%, SLA compliance improved from 95% to 99.9%, and operational overhead reduced by 30%.'
  },
  {
    icon: Heart,
    title: 'AI-Driven Healthcare Analytics in Azure Platform',
    logoDomain: 'microsoft.com',
    client: 'Microsoft Health',
    year: '2023',
    description: 'Deployed Azure ML models to predict patient risk, boosting early intervention rates by 30%.',
    impact: 'Early intervention cases ↑30%, patient readmission rates ↓15%, and diagnostic accuracy improved by 12%.'
  },
  {
    icon: Zap,
    title: 'IoT Edge Computing with AWS Lambda@Edge',
    logoDomain: 'amazon.com',
    client: 'Amazon Web Services',
    year: '2025',
    description: 'Built Lambda@Edge solutions to process millions of IoT events with <50ms latency.',
    impact: 'Event processing latency <50ms, throughput ↑10×, and data egress costs ↓20%.'
  },
  {
    icon: Globe,
    title: 'Streaming Personalization Algorithms',
    logoDomain: 'netflix.com',
    client: 'Netflix, Inc.',
    year: '2022',
    description: 'Implemented real-time recommendation pipelines, increasing user engagement by 22%.',
    impact: 'User engagement ↑22%, viewing hours ↑18%, and subscription retention ↑7% year-over-year.'
  },
  {
    icon: Truck,
    title: 'Autonomous Fleet Telemetry Optimization',
    logoDomain: 'tesla.com',
    client: 'Tesla, Inc.',
    year: '2024',
    description: 'Analyzed vehicle telemetry at scale, improving route efficiency by 18% across markets.',
    impact: 'Route efficiency ↑18%, fuel consumption ↓12%, and maintenance incidents ↓25%.'
  },
  {
    icon: Server,
    title: 'Zero-Trust Edge Security Model',
    logoDomain: 'apple.com',
    client: 'Apple Inc.',
    year: '2025',
    description: 'Secured edge devices with zero-trust policies integrated into iCloud, achieving enterprise-grade compliance.',
    impact: 'Security incidents ↓90%, compliance audit scores 100%, and device breach attempts blocked by 98%.'
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);
  const scroll = (direction) => {
    const width = containerRef.current?.clientWidth || 0;
    containerRef.current?.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  return (
    <section id="case-studies" className="py-24 bg-neutralLight relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutralDark mb-12 text-center">
          Success Stories
        </h2>
        <button onClick={() => scroll(-1)} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:shadow-2xl">
          <ChevronLeft className="w-6 h-6 text-neutralDark" />
        </button>
        <button onClick={() => scroll(1)} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:shadow-2xl">
          <ChevronRight className="w-6 h-6 text-neutralDark" />
        </button>
        <div ref={containerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-0 scroll-smooth scrollbar-none">
          {caseStudies.map((cs) => (<FlipCard key={cs.client} data={cs} />))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ data }) {
  const Icon = data.icon;
  const logoUrl = `https://logo.clearbit.com/${data.logoDomain}`;

  return (
    <div className="snap-center flex-shrink-0 basis-[calc(25%-1.5rem)] h-96" style={{ perspective: 800 }}>
      <motion.div
        className="w-full h-full rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-transparent hover:border-gray-200 relative flex flex-col"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col justify-evenly items-center p-6 backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
          <Icon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold text-neutralDark text-center px-2">
            {data.title}
          </h3>
          <img
            src={logoUrl}
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/72?text=Logo'; }}
            alt={`${data.client} logo`}
            className="h-16 object-contain"
          />
          <p className="text-gray-700 text-sm text-center px-2">
            {data.description}
          </p>
        </div>

        {/* Back Side: Impact */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-primary text-white backface-hidden" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <h3 className="text-xl font-semibold mb-2">Impact</h3>
          <p className="text-center text-sm leading-relaxed px-4">
            {data.impact}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
