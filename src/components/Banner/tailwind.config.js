const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        visby: ['VisbyCF'],
        din: ['D-DIN', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.visby').join(', '),
            },
            p: {
              fontFamily: theme('fontFamily.din').join(', '),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
