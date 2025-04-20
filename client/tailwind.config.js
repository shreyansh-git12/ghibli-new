/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        ptsans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
