/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',       // Unified dark background color (hero, cards, header)
        accent: '#2563EB',         // Blue 600 for highlights and buttons
        neutralDark: '#1E293B',    // Secondary dark for text and borders
        neutralLight: '#F9FAFB',   // Light gray for section backgrounds
        supportive: '#F59E0B'      // Amber 500 for supportive highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        card: '0 1px 2px rgba(0, 0, 0, 0.05)',
        section: '0 4px 6px rgba(0, 0, 0, 0.1)',
        hover: '0 10px 15px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  plugins: []
};
