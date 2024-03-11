/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f3f3f3",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        fadeOut: 'fadeOut 5s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out'
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.light') },
        }
      }),
    },
  },
  plugins: [],
}

