/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      'white' : '#FFFFFF',
      'red' : '#F04B4B',
      'green' : '#55D283',
      'grey' : '#818181',
      'fascom-black' : '#272727',
      'fascom-grey' : '#F5F5F5',
      'fascom-yellow' : '#ffd600'
    },
    extend: {
      screens: {
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
}

