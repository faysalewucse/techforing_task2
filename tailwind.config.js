/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        hideAndShowSequential: {
          "0%, 80%": { opacity: "0" },
          "85%, 95%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 1s ease-out",
        slideInFromRight: "slideInFromRight 1s ease-out",
        fadeInOut: "fadeInOut 3s ease-in-out infinite",
        hideAndShowSequential:
          "hideAndShowSequential var(--animation-duration) ease-in-out var(--animation-delay) infinite",
      },
      colors: {
        error: "#dc2626",
        background: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
