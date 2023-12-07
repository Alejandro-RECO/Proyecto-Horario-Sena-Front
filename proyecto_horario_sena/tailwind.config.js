/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e1437',
        secondary: {
          900: '#00324D',
          100: '#DCFFCA'
        }
      }
    },
  },
  plugins: [],
}