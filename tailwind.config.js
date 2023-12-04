/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'popins': ['Poppins', 'sans-serif'],
        'franklin': ['Frank Ruhl Libre', 'serif'],
        
    },
    colors: {
      'primaryColor': '#FAE3B6',
      
    },
    borderRadius: {
      'btnRadious': '10px',
      
  },
  plugins: [],
}

}
}