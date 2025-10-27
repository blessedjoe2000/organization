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
        pacifico: ["Pacifico", "Blinker"],
        amita: ["Amita", "Blinker"],
        protestRevolution: ["Protest Revolution", "Blinker"],
        aclonica: ["Aclonica", "Blinker"],
      },

      colors: {
        "light-blue": "#3FA2F6",
        "dark-blue": "#3a86ff",
        offwhite: "#f8f9fa",
        "light-green": "#0ead69",
        "original-red": "#E4003A",
        // "dark-red": "#cb0404",
        "dark-green": "#2c6e49",
      },
    },
  },
  plugins: [],
};
