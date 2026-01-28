/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f1f8',
          100: '#e6e0f0',
          200: '#d1c5e6',
          300: '#b09cd4',
          400: '#8f72c2',
          500: '#6e4cac',
          600: '#2E1A46',
          700: '#26153b',
          800: '#1e1130',
          900: '#130a1f',
        },
        accent: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
        }
      },
    },
  },
  plugins: [],
}
