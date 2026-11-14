/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',      // indigo-500 — main accent colour
        secondary: '#8b5cf6',    // violet-500 — gradient partner
        dark: {
          bg: '#0f172a',         // slate-900 — dark mode page background
          card: '#1e293b',       // slate-800 — dark mode card background
          border: '#334155',     // slate-700 — dark mode borders
        },
        light: {
          bg: '#f8fafc',         // slate-50 — light mode page background
          card: '#ffffff',       // white — light mode card background
          border: '#e2e8f0',     // slate-200 — light mode borders
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
