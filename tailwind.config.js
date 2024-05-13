/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  daisyui: {
    themes: ["light", "dark", "synthwave"],
  },
  plugins: [
    require('daisyui'),
  ],
}
