/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'Oswald': ['"Oswald"', 'sans-serif'],
      },
      colors: {
        background: "#64231c",
        btnshadows: "#f1aea1",
        font: "#5f7174",
        backgroundButton: "#777271",
        ...colors,
      },
      animation: {
        'border-pulse': 'border-pulse 2s infinite',
      },
      keyframes: {
        'border-pulse': {
          '0%, 100%': { borderColor: '#64231c' },
          '50%': { borderColor: '#f1aea1' },
        },
      },
    },
  },
};
