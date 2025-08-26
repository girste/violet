/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f3',
        sage: {
          400: '#8fbc8f',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}