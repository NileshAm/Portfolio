/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#111344",
          dark: "#0a0b26",
          light: "#202380",
        },
        secondary: "#52154e",
        highlight: "#f9cff2",
        textPrimary: "#efe9e7",
        textSecondary: "#dae0f2",
      },
    },
  },
  plugins: [],
};
