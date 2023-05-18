/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#002b56",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
