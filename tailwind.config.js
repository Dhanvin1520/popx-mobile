/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'popx-purple': '#7950F2',
        'popx-light-purple': '#D9D2FE',
        'popx-gray': '#CBCBCB',
        'popx-text-primary': '#333333',
        'popx-text-secondary': '#666666',
        'popx-border': '#DDDDDD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};