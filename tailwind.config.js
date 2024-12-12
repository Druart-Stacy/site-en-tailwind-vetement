/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Scanne tous les fichiers HTML et JS dans src
  theme: {
    extend: {
      // keyframes: {
      //   wiggle: {
      //     '0%, 100%': { transform: 'rotate(-3deg)' },
      //     '50%': { transform: 'rotate(3deg)' },
      //   }
      // },
     
      // animation: {
      //   wiggle: 'wiggle 1s ease-in-out infinite',
      // },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-200%)' },
          '75%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        slide: 'slide 10s linear infinite',
      },
      
    },
  },
  plugins: [],
  
};
