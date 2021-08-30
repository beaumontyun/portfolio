// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    fontFamily: {
      // 'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      'cursive': ['"Nanum Pen Script"', 'cursive'],
    },
    colors: {
      blue: {
        450: '#2194e0'
      },
      black: {
        450: '#2c3e50'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
