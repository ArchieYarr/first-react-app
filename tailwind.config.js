/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    animation: ["motion-safe"]
},
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#D972FF",
        
"secondary": "#D926A9",
        
"accent": "#42351f",
        
"neutral": "#c9c6c1",
        
"base-100": "#f8f2e8",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",

"bbc": "#861657",
        },

      containertheme:{
        center: true,
      },

     
      
     

      },
    ],
    
  },

  
  theme: {
    extend: {animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }},
    
  },
  plugins: [require("daisyui")],
}
