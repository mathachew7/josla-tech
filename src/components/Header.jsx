'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Transparent at top (white text/icons), solid white & shadow after scroll (black text/icons)
  const bgClass = scrolled ? 'bg-white shadow-md' : 'bg-transparent';
  const textClass = scrolled ? 'text-black' : 'text-white';
  const iconBg = scrolled ? 'bg-black' : 'bg-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo + Nav */}
        <div className="flex items-center space-x-12">
          <a href="/" className={`${textClass} text-2xl font-bold transition-opacity`}>
            Josla Tech
          </a>
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Pricing', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${textClass} font-medium hover:text-accent transition`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: CTA + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className={`${scrolled ? 'bg-neutralDark text-white' : 'bg-white text-neutralDark'} px-5 py-2 font-semibold rounded-md transition`}
          >
            Get a Quote
          </a>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(open => !open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 ${iconBg} transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 ${iconBg} transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 ${iconBg} transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-full bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {['Features', 'Pricing', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black font-medium hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-6 py-2 bg-neutralDark text-white font-semibold rounded-md hover:bg-neutralDark/90 transition"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
