/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terrii: {
          green: '#DFF2E1',
          blue: '#E6F1FA',
          'green-dark': '#C1E8C5',
          'blue-dark': '#D0E8F5',
          'text-primary': '#2C3E50',
          'text-secondary': '#5A6C7D',
          'text-light': '#8B95A1',
          'success': '#27AE60',
          'warning': '#F39C12',
          'error': '#E74C3C',
          'info': '#3498DB',
        }
      },
      fontFamily: {
        sans: 'Nunito, Inter, system-ui, sans-serif',
      },
      boxShadow: {
        'terrii': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'terrii-lg': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}