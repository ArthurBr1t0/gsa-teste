import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        fontFamily: {
          sans: ['Inter', ...fontFamily.sans],
          visby: ['VisbyCF', 'sans-serif'],
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
    require('@tailwindcss/typography'),],
};
export default config;
