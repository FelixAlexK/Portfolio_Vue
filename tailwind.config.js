/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      crimson: ['Crimson Pro', 'serif'],
      lato: ['Lato', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      syne: ['Syne', 'sans-serif']
    },
    screens: {
      'mobiles': '320px',
      'mobilem': '375px',
      'mobilel': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptopnl': '1440px'
    },
    colors: {
      'text': '#ffffff',
      'text-light': '#020302',
      'background': '#070b2c',
      'background-light': '#f7f8f7',
      'primary-button': '#c71f30',
      'primary-button-light': '#82737e',
      'secondary-button': '#090e39',
      'secondary-button-light': '#ffffff',
      'accent': '#30c71f',
      'accent-light': '#4c434a',
      'card': '#15193B',
      'card-light': '#D6D5D6'
    },
    darkMode: 'class',
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

