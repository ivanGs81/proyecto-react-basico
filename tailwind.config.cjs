/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight:{
        light: 300,
        regular: 400,
        medium: 500
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
