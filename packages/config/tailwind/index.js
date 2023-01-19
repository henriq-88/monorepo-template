const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/_app.tsx",
    "./node_modules/@wassdahl/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--title-theme-font)", ...fontFamily.sans],
        body: ["var(--body-theme-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
