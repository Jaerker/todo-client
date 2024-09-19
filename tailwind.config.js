/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '135': '135deg',
      },
      minWidth: {
        'list': '420px',
      }
    },
  },
  plugins: [],
}

