/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      }, //end of fontFamily
      colors: {
        primary: "#FB2E86",
        secondary: "#EEEFFB",
      },
    },
  },
  plugins: [
    // require("tailwindcss-container-query")
    // require("tailwind-scrollbar"),
  ],
  variants: {
    // scrollbar: ["rounded"],
  },
};
