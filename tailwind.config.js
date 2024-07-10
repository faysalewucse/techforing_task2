/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "#dc2626",
        background: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
