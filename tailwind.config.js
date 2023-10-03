/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'black-light': '#202029',
        'black-dark': '#16181e',
        'black-form': '#181a21',
        'primary-main': '#2189ff',
        'primary-dark': '#006bea',
        'grey-main': '#363636',
        'grey-dark': '#252525',
        'grey-text': '#86868a',
        'red': '#fe2c4e',
        'blue': '#1A9FFF'
        },
      textColor: {
        'black-light': '#202029',
        'black-dark': '#16181e',
        'black-form': '#181a21',
        'primary-main': '#2189ff',
        'primary-dark': '#006bea',
        'grey-main': '#363636',
        'grey-dark': '#252525',
        'grey-text': '#86868a',
        'red': '#fe2c4e',
        'blue': '#1A9FFF'
      },
    },
  },
  plugins: [],
}
