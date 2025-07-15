/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#30d9ff',
          secondary: '#d6d6d6',
          accent: '#84f0e3',
        }
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(90deg, rgba(48, 217, 255, 1) 0%, rgba(214, 214, 214, 1) 71%, rgba(132, 240, 227, 1) 87%)',
        'light-gradient-vertical': 'linear-gradient(180deg, rgba(48, 217, 255, 1) 0%, rgba(214, 214, 214, 1) 71%, rgba(132, 240, 227, 1) 87%)',
        'light-gradient-radial': 'radial-gradient(circle, rgba(48, 217, 255, 0.1) 0%, rgba(214, 214, 214, 0.1) 71%, rgba(132, 240, 227, 0.1) 87%)',
      }
    },
  },
  plugins: [],
};