/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ground-img': "url('../public/img/background.png')",
      },
<<<<<<< HEAD
      colors: {
        'message1': '#0088CC',
        'message2': '#556080',
        'chat-header': '#30D6CE',
        'text-box': '#E8E8E8',
      },
      spacing: {
        '1/10': '10%',
        'total': '1%',
      }
=======
      fontFamily: {
        'exo2': ['Almarai', 'Antic Didone', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'footer': '#187236',
        'letter': '#014e1c',
      },
      
>>>>>>> 41d87f89f2ab9ed52156d1cf3f06c2d1c32be4e5
    },
  },
  plugins: [],
}

