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
        secondary: {
          DEFAULT: "#52154e",
          dark: "#370837",
          light: "#833775",
        },
        highlight: {
          DEFAULT: "#f9cff2",
          dark: "#b29bb5", // dusty rose
          light: "#ffe5fb", // pale pink
        },
        textPrimary: {
          DEFAULT: "#efe9e7",
          dark: "#cfc7c3", // softer, muted white
          light: "#ffffff", // pure white
        },
        textSecondary: {
          DEFAULT: "#dae0f2",
          dark: "#a3a8be", // steely muted blue
          light: "#f2f5ff", // icy pastel blue
        },
      },
    },
  },
  plugins: [],
};
