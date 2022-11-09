/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Helvetica']
      },
      colors: {
      'main-grey': {
        200: '#7C8FA0',
        300: '#ECECEC',
        400: '#E1E1E1',
        500: '#E5E5E5',
        600: '#9AA5AF',
        700: '#D1D1D1',
        800: '#D6D6D6',
        900: '#53678C',
      },
      'main-blue': {
        300: '#53678C',
        400: '#2AABE2',
        500: '#488ED1',
        600: '#1F5181',
        700: '#012D57',
        900: '#011E3A',
      },
      'main-green': {
        500: '#2D7421'
      },
      'main-red': {
        500: '#6C0A0A'
      }
    }},
  },
  plugins: [],
}
