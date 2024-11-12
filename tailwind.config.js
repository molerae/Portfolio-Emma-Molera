/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_primary: '#000000',
        gray: '#808080', // Ajoutez cette ligne pour définir une couleur grise
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Inria': ['Inria Serif', 'serif'],
        'Paprika': ['Paprika', 'cursive'],
      },
    },
  },
  plugins: [],
};
