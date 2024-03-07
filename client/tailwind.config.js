/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Head":"Bebas Neue",
        "Lora":`"Lora", serif`,
        "Para":'"Poppins", sans-serif'
      },
      textColor:{
        gold:"#dcb775",
        blue:"#002349"
      },
      backgroundColor:{
        gold:"#dcb775",
        blue:"#002349"
      },
      borderColor:{
        gold:"#dcb775",
        blue:"#002349"
      }
    },
  },
  plugins: [],
}

