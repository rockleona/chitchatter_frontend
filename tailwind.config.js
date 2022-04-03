module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary':'#ffffff',
      'secondary-dark':'#54494b',
      'secondary-light':'#7e8287',
      'pink-light':'#b98389',
      'pink-heavy':'#db2955',
    },
    extend: {
      fontFamily: {
        kurewa: ["kurewa-gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
}
