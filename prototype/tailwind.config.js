/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (from Grove's design system)
        primary: '#2D5016',      // forest green
        secondary: '#8B7355',    // warm brown
        accent: '#D4A574',       // golden sand
        'light-bg': '#FAF8F3',   // warm cream
        'dark-text': '#1A1A1A',  // near black
        success: '#5A9A5C',      // growth green
        info: '#4A90C7',         // sky blue
        border: '#E0D5C8',       // soft border
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'light': 'rgba(45, 80, 22, 0.08)',
      },
    },
  },
  plugins: [],
}
