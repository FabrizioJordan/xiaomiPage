/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "*/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'orange-1': '#ffab38',
        'text-orange-600': '#ea580c',
        'text-orange-500': '#f97316',
      },
    },
  },
  plugins: [],
}