export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center:true,
    },
    extend: {
      colors:{
        customColor: '#E7C873',
        primary: '#1A1A1A',
        secondary: '#EB664E',
        inter: '#F6F8FA',
        stroke: '#E9E9E9',
        tertiary: '#1F4B43',



      
      },

      fontFamily: {
        roboto :['Roboto', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}
