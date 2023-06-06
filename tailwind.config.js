/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
    theme: {
      screens: {
        'sm': {'min': '100px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      extend:{
        colors:{
          'bg-blue' : '#374d6d',
          'sky-blue' : '#00BED7',
          'bright-red' : '#FF4133',
          'page-yellow' : '#FFDE00'
        },
        // textShadow:{
        //   DEFAULT:  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
        //   1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
        // }
      }
    }
}

