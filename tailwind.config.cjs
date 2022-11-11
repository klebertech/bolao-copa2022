/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');
// eslint-disable-next-line import/no-extraneous-dependencies
const formsTailwind = require('@tailwindcss/forms');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui, formsTailwind],
};
