/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3c614",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"] 
      }
    },
  },
  plugins: [],
}

