'use client';

import { Facebook, Twitter, Linkedin, Mail, Star, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutralDark text-neutralLight">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Services</h4>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-accent transition">Data Engineering</a></li>
            <li><a href="#pricing" className="hover:text-accent transition">AI & ML</a></li>
            <li><a href="#about" className="hover:text-accent transition">Cloud Architecture</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-accent transition">About Us</a></li>
            <li><a href="#team" className="hover:text-accent transition">Team</a></li>
            <li><a href="#careers" className="hover:text-accent transition">Careers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#blog" className="hover:text-accent transition">Blog</a></li>
            <li><a href="#docs" className="hover:text-accent transition">Documentation</a></li>
            <li><a href="#faq" className="hover:text-accent transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact & Subscribe */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li><Mail className="inline-block mr-2 text-primary" /> support@joslatech.com</li>
            <li><Phone className="inline-block mr-2 text-primary" /> +1 (314) 215-8155</li>

          </ul>
          <div className="mt-6">
            <p className="text-sm mb-2">Subscribe to our newsletter:</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md border-t mr-0 border-b border-l border-neutralLight border-neutralDark focus:outline-none"
              />
              <button className="px-4 py-2 bg-primary text-white font-semibold rounded-r-md hover:bg-accent transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="hover:text-accent transition"><Facebook /></a>
            <a href="#" className="hover:text-accent transition"><Twitter /></a>
            <a href="#" className="hover:text-accent transition"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutralDark/50 py-4 text-center text-xs text-neutralLight/70 flex items-center justify-center space-x-1">
        <Star className="w-4 h-4 text-accent animate-pulse" />
        <span>© {new Date().getFullYear()} <span className="font-bold text-white">Josla Tech LLC</span>. All rights reserved.</span>
        <Star className="w-4 h-4 text-accent animate-pulse" />
      </div>
    </footer>
  );
}
