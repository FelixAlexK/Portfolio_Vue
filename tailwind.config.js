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
      'background': '#0D1526',
      'background-light': '#f7f8f7',
      'primary-button': '#899fcd',
      'primary-button-light': '#82737e',
      'secondary-button': '#0e1420',
      'secondary-button-light': '#ffffff',
      'accent': '#4b6baf',
      'accent-light': '#4c434a',
      'card': '#161C2D',
      'card-light': '#F0F1F0'
    },
    darkMode: 'class',
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

