import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import colors from 'tailwindcss/colors';
import primeui from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './style.css'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        fontFeatureSettings: '`cv02` !important'
      }
    },
    colors: {
      ...colors,
      'ultramarine-500': '#184183',
      'ultramarine-900': '#0c263a',
      'ultramarine-700': '#04263E',
      lotus: '#8b2671', // 青莲
      'emerald-accent': '#12D989',
      'sunrise-white': '#f7f4ed',
      'dark-bg': '#1e1e2f'
    }
  },

  plugins: [forms, primeui],
  darkMode: 'selector'
};
