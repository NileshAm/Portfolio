/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Deep black/gray
        foreground: "#f8fafc", // Off-white
        primary: {
          DEFAULT: "#3b82f6", // Bright Blue
          dark: "#1d4ed8",
          light: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#a855f7", // Violet
          dark: "#9333ea",
          light: "#c084fc",
        },
        accent: {
          DEFAULT: "#06b6d4", // Cyan
          glow: "#22d3ee",
        },
        highlight: {
          DEFAULT: "#d946ef", // Neon Fuchsia
          dark: "#c026d3",
          light: "#e879f9",
        },
        surface: {
          DEFAULT: "#171717", // Slightly lighter black for cards
          hover: "#262626",
        },
        textPrimary: "#f8fafc",
        textSecondary: "#94a3b8", // Slate 400
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
