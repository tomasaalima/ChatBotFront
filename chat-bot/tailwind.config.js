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
    },
  },
  plugins: [],
}

