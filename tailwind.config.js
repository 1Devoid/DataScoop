/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/js/**/*.js'],
  plugins: [require('tw-elements/plugin.cjs')],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        md: '0 2px 4px -2px rgba(16, 24, 40, 0.05), 0 4px 8px -2px rgba(16, 24, 40, 0.1);',
      },
    },
  },
};
