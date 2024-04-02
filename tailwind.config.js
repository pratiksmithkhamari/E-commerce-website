/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        moveNavbar: "move ease forwards 0.6s",
      },
     
    },
  },
  plugins: [],
};
