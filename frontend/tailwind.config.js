/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.7rem',
      },
      colors: {
        background: '#151615',
        dark: '#070803',
        primary: '#eeaa00',
        accent: '#e23444',
        green: '#30ad29',
        text: '#fffdff',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
