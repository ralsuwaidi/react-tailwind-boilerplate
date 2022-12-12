/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), 
    require('@tailwindcss/typography'), // https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/forms'), // https://github.com/tailwindlabs/tailwindcss-forms
  ],
}
