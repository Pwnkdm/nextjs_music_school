// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router paths
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // <-- This is what you need for manual dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
