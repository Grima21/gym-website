/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        body: ["var(--font-body)"],
      },
      colors: {
        fondo: "#1A1A1A",
        boton: "#FFD60A",
        "boton-hover": "#E6C009",
      },
    },
  },
  plugins: [],
};
