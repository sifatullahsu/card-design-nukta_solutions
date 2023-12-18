/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A9C9C',
        black: '#1E1E1E',
        'black-2': '#353535',
        highlight: '#95E3E3'
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
