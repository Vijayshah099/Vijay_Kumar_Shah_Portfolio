/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          card: '#111827',
          text: '#f8fafc',
          accent: '#c084fc', // purple-400
          accent2: '#22d3ee', // cyan-400
        },
        light: {
          bg: '#f8fafc',
          card: 'rgba(255, 255, 255, 0.7)',
          text: '#1e293b',
          accent: '#6366f1', // indigo-500
          accent2: '#3b82f6', // blue-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
