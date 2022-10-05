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
    },
    extend: {
      backgroundImage: {
        'login-pattern': "url('/src/assets/svg/login-background.svg')",
        'login-gradient': "url('/src/assets/svg/login-gradient.svg')",
        'lakeside-sunrise': "url('/src/assets/webp/lakeside-sunrise.webp')",
        'lakeside-sunset': "url('/src/assets/webp/lakeside-sunset.webp')"
      }
    }
  },
  plugins: [require('daisyui')]
};
