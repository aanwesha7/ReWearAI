export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#F7F3EC', dark: '#EDE6D8' },
        charcoal: { DEFAULT: '#26241F', soft: '#5A564D' },
        sage: { DEFAULT: '#8A9A82', dark: '#5F7058', light: '#DDE4D8' },
        terracotta: { DEFAULT: '#B5654A', dark: '#97503A' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
