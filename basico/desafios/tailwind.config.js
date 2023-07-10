/** @type {import('tailwindcss').Config} */

/* 
  npm install -D tailwindcss
  npx tailwindcss init
*/
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2dae7",
      },
      fontFamily: {
        titulo: ["Vast Shadow", "cursive"],
      },
      keyframes: {
        sino_kf: {
          "0%, 100%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
      animation: {
        sino: "sino_kf 0.31s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
