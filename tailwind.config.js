/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Richer deep black
        foreground: "#f8fafc", // Off-white
        primary: {
          DEFAULT: "#3b82f6", // Blue-500
          dark: "#1d4ed8", // Blue-700
          light: "#60a5fa", // Blue-400
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Violet-500 (shifted from Purple for better blend with Blue)
          dark: "#7c3aed", // Violet-600
          light: "#a78bfa", // Violet-400
        },
        accent: {
          DEFAULT: "#06b6d4", // Cyan
          glow: "#67e8f9", // Cyan-300 (Softer glow)
        },
        highlight: {
          DEFAULT: "#d946ef", // Fuchsia-500
          dark: "#c026d3",
          light: "#f0abfc",
        },
        surface: {
          DEFAULT: "#121212", // Clean dark surface
          hover: "#1e1e1e",
        },
        textPrimary: "#f1f5f9", // Slate-100
        textSecondary: "#94a3b8", // Slate-400
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
