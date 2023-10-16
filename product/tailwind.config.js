/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        name: 'url(/src/assets/img/Banner.png)',
      }
    },
  },
  plugins: [require("daisyui"),require("tailgrids/plugin")],
}