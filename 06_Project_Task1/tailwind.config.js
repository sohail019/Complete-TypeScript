/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    keyframes: {
      fadeInDown: {
        "0%": { opacity: "0", transform: "translateY(-20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      fadeInDown: "fadeInDown 1.5s ease-out forwards",
    },
    extend: {
      colors: {
        brightRed: "#f25f3a",
        brightRedLight: "#f97b5b",
        brightRedSupLight: "#fde9e2",
        darkBlue: "#1e2f59",
        darkGrayishBlue: "#7a899c",
        veryDarkBlue: "#1c1e26",
        veryPaleRed: "#fff1f0",
        veryLightGray: "#fafafa",
        light: {
          background: "#f0f0f0",
          text: "#1c1c1c",
          primary: "#f25f3a",
          secondary: "#7a899c",
        },
        dark: {
          background: "#1c1e26",
          text: "#fafafa",
          primary: "#f97b5b",
          secondary: "#7a899c",
        },
      },
    },
  },
  plugins: [],
};
