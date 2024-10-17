/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1920px",
      lg: "1200px",
    },
    extend: {
      spacing: {
        "15px": "15px",
      },
      keyframes: {
        flash: {
          "0%, 25%": { opacity: "0" },
          "25%, 75%": { opacity: "1" },
          "75%, 100%": { opacity: "0" },
        },
      },
      animation: {
        flash: "flash 2s infinite",
      },
    },
  },
  plugins: [],
};
