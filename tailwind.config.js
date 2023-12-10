/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      BebasNeue: ["Bebas Neue", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      MavenPro: ["Maven Pro", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
