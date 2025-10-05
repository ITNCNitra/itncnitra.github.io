/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.{html,js}",  // scan script.js for toggle logic
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
