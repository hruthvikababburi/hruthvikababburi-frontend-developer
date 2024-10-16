/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cyan-deep-light":"#025863",
        "cyan-light":"#012a2f",
        "cyan-dark":"#051416",
        "dark-blue":"#001117",
      },
      borderWidth:{
        1:"1px"
      },
    },
  },
  plugins: [],
}

