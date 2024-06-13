/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      colors: {
        customColor: "rgb(8, 20, 83)",
        customYellow: "rgb(253,206,3)",
        customGray: "rgb(247,247,247)",
      },
    },
  },
  plugins: [],
});
