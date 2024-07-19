/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blinker: ["Blinker", "sans-serif"],
        bebasNeue: ["Bebas Neue", "Blinker", "sans-serif"],
      },

      colors: {
        "light-blue": "#3FA2F6",
        orange: "#FF7F3E",
        offwhite: "#FCF8F3",
        "sharp-red": "#E4003A",
      },
    },
  },
  plugins: [],
};