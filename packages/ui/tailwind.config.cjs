/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@wassdahl/tailwind-config")],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
};
