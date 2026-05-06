/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sawonet: {
          green: '#16794A',
          blue: '#1F6FAD',
          navy: '#153047',
          mint: '#E8F5EF',
          gold: '#D9A321',
          sand: '#FFF7E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(21, 48, 71, 0.08)',
      },
    },
  },
  plugins: [],
};
