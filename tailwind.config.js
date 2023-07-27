/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0e7474",
          "secondary": "#05121e",
          "accent": "#24cc78",
          "neutral": "#232323",
          "base-100": "#000",
          "info": "#afbae4",
          "success": "#25935e",
          "warning": "#f6b937",
          "error": "#e11d48",
          "primary-content": "#fff",
          "secondary-content": "#fff",
          "accent-content": "#000",
          "base-content": "#fff",
        },
      },
    ],
  },
  content: [
    './src/**/*.js',
    './public/*.html'
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

