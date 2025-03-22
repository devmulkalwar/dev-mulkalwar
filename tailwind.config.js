/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0A0A0A',
        'background-light': '#1A1A1A',
        'primary-text': '#F5F5F5',
        'secondary-text': '#CCCCCC',
        'neon-cyan': '#00FFFF',
        'neon-purple': '#8A2BE2',
        'electric-blue': '#00BFFF',
        'soft-pink': '#FF6EC7',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'exo': ['"Exo 2"', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00FFFF, 0 0 20px #00FFFF',
        'neon-purple': '0 0 5px #8A2BE2, 0 0 20px #8A2BE2',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}