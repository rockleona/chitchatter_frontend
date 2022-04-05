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
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        blended: {
          "primary": "#ffffff",
          "secondary": "#54494b",
          "accent": "#7e8287",
          "neutral": "#b98389",
          "base-100": "#db2955",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}
