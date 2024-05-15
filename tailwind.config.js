/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#191919",
        red: "#ef383a",
        "extra-red": "#eb090b",
        blue: "#2d69ff",
        "extra-blue": "#2c5acc",
        purple:"#633bfe",
        "extra-purple":"#5636d0",
        gray:"#747474",
        "light-gray":"#f5f5f5",
        white:"#ffffff",        
        "medium-gray":"#b4b4b4",
      },
      container:{
        center:true,
        padding:"15px 5px",
      },
      screens:{
        sm: "640px",
        md: "780px",
        lg: "960px",
        xl: "1200px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}