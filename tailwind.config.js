/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      screens: {
        "sm-1": "320px",
        "s-700": "700px"
      },
      colors: {
        "blue": "#0147FF",
        "text": "#282828",
      },
      maxWidth: {
        "wrapper": "1470px",
        "container": "1230px"
      },
      padding: {
        "wrapper--px": "15px",
      },
      fontFamily: {
        "Roboto-Flex": ['"Roboto Flex"', 'sans-serif'],
        "Bebas-Neue": ['"Bebas Neue"', 'sans-serif'],
        "Roboto-Condensed": ['"Roboto Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

