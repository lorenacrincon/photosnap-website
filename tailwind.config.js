/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        "pure-white": "hsl(0, 0%, 100%)",
        "pure-black": "hsl(0, 0%, 0%)",
        "light-grey": "hsl(0, 0%, 87%)",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      dm: "'DM Sans', sans-serif",
    },
  },
  plugins: [],
};
