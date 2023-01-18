/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6419E6",
        
"secondary": "#D926A9",
        
"accent": "#1FB2A6",
        
"neutral": "#c9c6c1",
        
"base-100": "#f8f2e8",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },

      containertheme:{
        center: true,
      },
     

      },
    ],
    
  },

  // Original Daisy/ Tailwind guide code for this file, became redundant with new themes introduced
  /*theme: {
    extend: {},
    
  },*/
  plugins: [require("daisyui")],
}
