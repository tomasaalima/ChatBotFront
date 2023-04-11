/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ground-img': "url('../public/img/backg.png')",
      },
      fontFamily: {
        'exo2': ['Almarai', 'Antic Didone', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'footer': '#187236',
        'letter': '#014e1c',
      },
      
    },
  },
  plugins: [],
}

