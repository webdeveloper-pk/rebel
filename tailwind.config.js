/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#f2f2f2",
        "lighter-white": "rgba(255, 255, 255, 0.66)",
        "lightest-white": "#efefef",
        "light-red": "#DC0000",
        "light-gray": "#A8A8A8",
      },
    },
  },
  plugins: [],
};
