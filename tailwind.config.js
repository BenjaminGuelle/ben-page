/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans serif'],
      'fira': ['"Fira Code"', 'monospace'],
    },
    colors: {
      'primary': '#9B886F',
      'secondary': '#ABC4B7',
      'accent': '#87A5AB',
      'background': '#FDFCFC',
      'text': '#181411',
    },
  },
  plugins: [],
}

