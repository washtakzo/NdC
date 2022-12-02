/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4F2F2",
        secondary: "#E2D7D7",
        secondary50: "#E2D7D79A",
        third: "#907070",
        third25: "#90707030",
      },
      fontFamily: {
        serif: ["Italiana", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
