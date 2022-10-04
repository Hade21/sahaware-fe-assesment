/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        abu: "#848688",
        merah: "#ED3237",
        "biru-2": "#2D9CDB",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      padding: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        full: "100%",
      },
    },
  },
  plugins: [],
};
