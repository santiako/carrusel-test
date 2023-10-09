/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        AvenirNext: ["AvenirNext", "sans-serif"],
        KaytekHeadline: ["KaytekHeadline", "sans-serif"],
      }
    },
  },
  plugins: [],
}

