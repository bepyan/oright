const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
      },
      screens: {
        mobile: { max: '1024px' },
        pc: { min: '1024px' },
      },
    },
  },
  plugins: [],
};
