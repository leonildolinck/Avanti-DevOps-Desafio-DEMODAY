/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'bitcount': ['Bitcount Prop Single'],     
    },
  },
  },
  plugins: [],
}
