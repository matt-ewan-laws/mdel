module.exports = {
  content: ['./src/**/*.{css|js}', './templates/**/*.html'],
  darkMode: 'dark',
  theme: {
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["retro", "cupcake", "dark"]
  }
};
