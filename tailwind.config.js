/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Slab", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#ebab0c",
        bluebrand: '#1691FD'
      },
    },
  },
  plugins: [],
};
