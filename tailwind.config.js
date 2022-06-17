module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'desktop': '1140px',
      },
      fontSize: {
        'title': '5.0rem',
      },
      maxWidth: {
        'card': '22rem',
      },
      inset: {
        'img-card': '15.5rem'
      },
      screens: {
        'desk': '1160px',
        'desk2': '1600px',
        'tablet': '1560px',
        'sTablet': '1070px'
      },
      colors: {
        'veryDarkViolet' : 'hsl(257, 27%, 26%)',
        'darkgGrayishViolet' : 'hsl(256, 5%, 42%)',
        'grayishViolet' : 'hsl(257, 7%, 63%)',
        'veryDarkBlue' : 'hsl(255, 11%, 22%)'
      }
    },
  },
  plugins: [],
}
