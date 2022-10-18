/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'spaceDark': "url('https://desktop.github.com/images/star-bg.svg'), linear-gradient(rgb(25, 28, 32), rgb(36, 41, 46) 15%)",
        'spaceLight': "url('https://desktop.github.com/images/star-bg.svg')"

      }
    },
  },
  plugins: [],
}
