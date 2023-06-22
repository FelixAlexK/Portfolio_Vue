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
      'text': '#e7edf4',
      'text-light': '#020302',
      'background': '#0d141c',
      'background-light': '#f7f8f7',
      'primary-button': '#3d3b81',
      'primary-button-light': '#82737e',
      'secondary-button': '#0a060e',
      'secondary-button-light': '#ffffff',
      'accent': '#016034',
      'accent-light': '#4c434a',
      'card': '#0E1621',
      'card-light': '#F0F1F0'
    },
    darkMode: 'class',
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

