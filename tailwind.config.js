const colors = require('tailwindcss/colors')
delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      blue_dark: '#0d3b66',
      blue_light: '#1767b3',
      royal: '#c9ac8c',
      dark: '#191514',
    },
  },

  plugins: [],
}
