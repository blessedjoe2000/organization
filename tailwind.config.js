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
        offwhite: "#FCF8F3",
        "sharp-red": "#E4003A",
        "dark-red": "#cb0404",
      },
    },
  },
  plugins: [],
};
