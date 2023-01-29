/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    animation: ["motion-safe"]
},
  
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#D972FF",
        
"secondary": "#D926A9",
        
"accent": "#42351f",
        
"neutral": "#c9c6c1",
        
"base-100": "#f8f2e8",

"base-200": "#eddec4",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",

"bbc": "#861657",
        },


      backgroundImage: {
        'stat-1': "url('./Images/BBCImg/UntitledDesign1.svg')"
      }
      

      
     
      
     

      },
    ],
    
  },

  
  theme: {
    extend: {animation: {
      fadeIn: "fadeIn 2s ease-in forwards",
      fadeInLeft:"fadeInLeft 2s ease-out"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      },
    fadeInLeft:{
      "0%":{opacity: 0,
            transform: "translateX(-40px)"
      },
      "100%":{
        opacity:1,
        transform: "translateX(0)"
      }
      
      

    }
    
    }},
    
    
  },
  plugins: [require("daisyui", 'tw-elements/dist/plugin')],
}
