/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        "blue": "#0147FF",
        "text": "#282828",
      },
      maxWidth: {
        "wrapper": "1470px",
        "footer": "100%"
      },
      width: {
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

