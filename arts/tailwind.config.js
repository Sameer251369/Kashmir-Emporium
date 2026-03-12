/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#f5efe0',
        gold: '#b8860b',
        'gold-light': '#d4af37',
        brown: {
          800: '#3d0c02',
          900: '#1a0800',
        },
      },
    },
  },
  plugins: [],
}