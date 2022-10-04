/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
   
    extend: {
      colors: {
        'header-blue': '#243956',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
        backgroundImage: {
          New: "url('/images/pattern.jpg')",
        
        },
        fontFamily: {
          micra: ["MICRA", "cursive"],
        },
  
        
      },
     
    },
  },
  plugins: [],
}
