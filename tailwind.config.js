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
        // Violet (Deep Violet) — matches .cursorrules "Violet scale"
        primary: {
          50: '#F2EFF7',
          100: '#D9D0EC',
          200: '#B9A9D8',
          300: '#9A84C0',
          400: '#7A61A8',
          500: '#5A4190',
          600: '#2E1A46',
          700: '#251538',
          800: '#1A0E28',
          900: '#100819',
          950: '#080510',
        },
        // Aqua Teal — matches .cursorrules "Teal scale"
        teal: {
          50: '#E3FAF8',
          100: '#B0F1E9',
          200: '#7CE8D9',
          300: '#4DDECB',
          400: '#2ED9C3',
          500: '#20B8A5',
          600: '#148F80',
          700: '#0C6B5F',
          800: '#074E45',
          900: '#03332E',
        },
        // Warm Orange — matches .cursorrules "Orange scale"
        orange: {
          50: '#FFF3EB',
          100: '#FFD9BB',
          200: '#FFBC8A',
          300: '#FF9A54',
          400: '#FF6C0E',
          500: '#E05800',
          600: '#B84700',
          700: '#8F3700',
          800: '#662800',
          900: '#3D1800',
        },
        // Body / text on teal 400 and lighter (contrast rule)
        ink: '#1a1040',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-gensen)', 'var(--font-inter)', 'serif'],
      },
      keyframes: {
        'subtle-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 20s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
