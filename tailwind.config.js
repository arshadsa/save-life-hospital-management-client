/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
<<<<<<< HEAD
          
 "primary": "#0071DC",
          
 "secondary": "#7FB7ED",
          
 "accent": "#7FB7ED",
          
 "neutral": "#3D4451",
          
 "base-100": "#FFFFFF",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
=======

            "primary": "#0071DC",

            "secondary": "#F000B8",

            "accent": "#37CDBE",

            "neutral": "#3D4451",

            "base-100": "#FFFFFF",

            "info": "#3ABFF8",

            "success": "#36D399",

            "warning": "#FBBD23",

            "error": "#F87272",
>>>>>>> ovilash
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
