// File: src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CaseStudies from '../components/CaseStudies';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import WhoAreWe from '../components/WhoAreWe';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <Features />
      <HowItWorks />
      <CaseStudies />
      <Team />
      <Pricing />
      <Contact />
    </>
  );
}
