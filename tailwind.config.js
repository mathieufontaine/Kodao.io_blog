/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { accent: "rgb(168, 123, 203)" },
      spacing: {
        "1/2": "50%",
        "1/3": "33.33%",
        "1/4": "25%",
        "1/6": "16.66%",
        "2/3": "66.66%",
        "3/4": "75%",
      },
      boxShadow: {
        "4xl": "0px 15px 35px rgba(0, 0, 0, 0.4)",
      },
      fontSize: {
        big: "35px",
      },
    },
  },
  plugins: [],
};
