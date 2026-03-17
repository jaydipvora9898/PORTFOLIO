/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#273C75',
        secondary: '#2D9CDB',
        accent: '#F36F21',
        light: '#F8FAFC',
        dark: '#1A202C',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #273C75, #2D9CDB)',
        'gradient-accent': 'linear-gradient(135deg, #F36F21, #273C75)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}