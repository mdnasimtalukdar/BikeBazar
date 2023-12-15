/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary' : "#E76F51",
        'gray' : "#6C6C6C",
      },
    },
  },
  plugins: [require("daisyui")],
}

