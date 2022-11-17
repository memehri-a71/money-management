/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#85017a",
          veyrDark: "#4f0149",
          dark: "#690261",
          light: "#c746bc",
        },
      },
    },
  },
  plugins: [],
};
