/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        druidPrimary: "#003F5C",
        druidSecondary: "#2F4B7C",
        druidPurple: "#665191",
        druidPink: "#A05195",
        druidMagenta: "#D45087",
        druidCoral: "#F95D6A",
        druidOrange: "#FF7C43",
        druidYellow: "#FFA600",
        druidSoft: "#E8ECF1",
      },
       fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster Two", "cursive"],
      },
    },
  },
  plugins: [],
};
