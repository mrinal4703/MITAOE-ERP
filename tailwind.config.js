/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'bounce-down': {
          '0%': { transform: 'translateY(-1rem)', opacity: '0' },
          '50%': { transform: 'translateY(0.3rem)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'bounce-down': 'bounce-down 0.8s ease-out',
        'spin-slow': 'spin 2s linear infinite',
      },
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        card: 'var(--color-card)',
      }
    },
  },
  plugins: [],
}