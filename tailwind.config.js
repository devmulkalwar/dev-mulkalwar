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
        'neon-sm': '0 0 5px var(--neon-cyan)',
        'neon-md': '0 0 10px var(--neon-cyan)',
        'neon-lg': '0 0 20px var(--neon-cyan)',
        'neon-purple-sm': '0 0 5px var(--neon-purple)',
        'neon-purple-md': '0 0 10px var(--neon-purple)',
        'neon-purple-lg': '0 0 20px var(--neon-purple)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      screens: {
        'xs': '475px',
      },
      zIndex: {
        'base': 'var(--z-base)',
        'above': 'var(--z-above)',
        'modal': 'var(--z-modal)',
        'loader': 'var(--z-loader)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}