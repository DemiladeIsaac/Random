/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Space Grotesk', 'sans-serif'] }, colors: { ink: '#090b14', violet: '#a78bfa', cyan: '#67e8f9' } } },
  plugins: [],
};
