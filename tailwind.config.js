/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'py-green': '#3D8B37',
        'py-yellow': '#FFE141',
        'py-red': '#F23939',
        'py-dark': '#101010',
        'py-text': '#FFFFFF',
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};