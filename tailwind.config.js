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
        "footer": "100%"
      },
      padding: {
        "wrapper--px": "15px",
      },
      margin: {
      }
    },
  },
  plugins: [],
}

