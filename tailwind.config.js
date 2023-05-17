/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeUp: "fadeUp 1s forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            transform: "translate(0, 100%)",
            opacity: 0,
          },
          "100%": { transform: "translate(0, 0)",
            opacity: 1, },
        },
      },
    },
  },
  plugins: [],
};
