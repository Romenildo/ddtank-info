/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'classificationTable': "url('/images/pinnacleBg.png')"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'ddFirst': '#c47c4c',
      'ddSec': '#fcf4e4',
      'ddTer': '#f4d49b',
      'ddFour': '#d9ac6c',
      'ddFive': '#9f6a2c',
      'ddactive': '#fc9c46',
      'gray': '#3f3f46',
      'white': '#f4f4f5',
      'purple': '#a855f7',
      'red': '#b91c1c'
      
    },
  },
  safelist:[
    'bg-[#f87171]',
    'bg-[#3b82f6]',,
    'bg-[#4ade80]',,
    'bg-[#a16207]',
    'bg-[#a855f7]'
  ],
  plugins: [],
}
