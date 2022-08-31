/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      grass: {
        50: "#fbfde8",
        100: "#f5f9ce",
        200: "#eaf4a2",
        300: "#daea6c",
        400: "#c5dc3f",
        500: "#a7c121",
        600: "#849c16",
        700: "#637615",
        800: "#4e5d17",
        900: "#434f18",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("selected", [".selected &", ".selected&"]);
    }),
  ],
};
