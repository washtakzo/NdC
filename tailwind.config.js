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
      transitionTimingFunction: {
        "show-accordion": "cubic-bezier(0, 1, 0, 1)",
        "hide-accordion": "cubic-bezier(1, 0, 1, 0)",
      },
    },
    screens: {
      sm: "424px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      // lg: "1280px",
      // // => @media (min-width: 1024px) { ... }

      // xl: "1640",
      // // => @media (min-width: 1280px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
