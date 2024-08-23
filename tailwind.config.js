/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('optional', '&:optional')
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('inverted-colors', '@media (inverted-colors: inverted)')
    })
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#667085',
        customBlack: '#101828',
        customOrange: '#DE9551',
        customLightGray: '#F2F4F7',
        customTransparentGray: '#0000004d'
      },
      container: {
        center: true,
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
