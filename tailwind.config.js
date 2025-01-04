/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fc7d4f',
        secondary: '#111111',
        info:'#706F6F'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

