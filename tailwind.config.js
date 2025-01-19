// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Optional: Enable purge for production builds
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
}
