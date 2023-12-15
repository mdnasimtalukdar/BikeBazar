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
        'bg' : "rgba(231, 111, 81, 0.10)"
      },
    },
  },
  plugins: [require("daisyui")],
}

