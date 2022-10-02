/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  darkMode: true,
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#112B3C',
      secondary: '#205375',
      highlight: '#F66B0E',
      light: '#EFEFEF'
    }
  },
  plugins: [require('daisyui')]
};
