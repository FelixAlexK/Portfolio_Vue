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
    colors: {
      'text': '#fdf6e7',
      'text-light': '#020302',
      'background': '#000000',
      'background-light': '#f7f8f7',
      'primary-button': '#c93667',
      'primary-button-light': '#82737e',
      'secondary-button': '#f8e3ea',
      'secondary-button-light': '#ffffff',
      'accent': '#cf4a76',
      'accent-light': '#4c434a',
      'card': '#101010',
      'card-light': '#F0F1F0'
    },
    darkMode: 'class',
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

