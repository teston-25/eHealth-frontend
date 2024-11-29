/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{html,ts,css,spec}"],
  theme: {
    extend: {
      screens: {
        // xs: "480px", // Extra small devices
        mob: "640px", // Small devices
        tab: "768px", // Medium devices
        pc: "1024px", // Large devices
        desk: "1280px", // Extra large devices
        "2xl": "1536px", // 2X large devices
      },
    },
  },
  plugins: [],
};
