/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './node_modules/flowbite/*.js',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
