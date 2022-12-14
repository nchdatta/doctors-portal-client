/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorTheme: {
          "primary": "#19D5F1",
          "secondary": "#42E4FC",
          "neutral": "#3A4256",
          "base-100": '#ffffff',
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}