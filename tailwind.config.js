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
      'text': '#ffffff',
      'background': '#070b2c',
      'primary-button': '#c71f30',
      'secondary-button': '#090e39',
      'accent': '#30c71f',
      'secondary-button-500': '#15193B',
    },
    extend: {},
  },
  plugins: [],
}

