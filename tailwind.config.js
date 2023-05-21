/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
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
        sub: "#0d0e43",
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
