/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      screens: {
        "s-320": "320px",
        "s-350": "350px",
        "s-400": "400px",
        "s-500": "500px",
        "s-550": "550px",
        "s-670": "670px",
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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

