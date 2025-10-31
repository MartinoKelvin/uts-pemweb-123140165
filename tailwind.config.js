/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      'spin-slow': 'spin 2s linear infinite',
      },
      colors: {
        background: "rgb(var(--background))",
        border: "rgb(var(--border))",
        card: "rgb(var(--card))",
        'copy-primary': "rgb(var(--copy-primary))",
        'copy-secondary': "rgb(var(--copy-secondary))",
        cta: "rgb(var(--cta))",
        'cta-active': "rgb(var(--cta-active))",
        'cta-text': "rgb(var(--cta-text))",
      }
    },
  },
  plugins: [],
}