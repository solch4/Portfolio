/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#FFE5EC",
        100: "#FFB3C7",
        200: "#FF80A2",
        300: "#FF4D7D",
        400: "#FF1A58",
        500: "#E6003F",
        600: "#B30031",
        700: "#800023",
        800: "#4D0015",
        900: "#1A0007",
      },
      secondary: {
        50: "#F3E5FF",
        100: "#DCB3FF",
        200: "#C480FF",
        300: "#AC4DFF",
        400: "#951AFF",
        500: "#7B00E6",
        600: "#6000B3",
        700: "#440080",
        800: "#29004D",
        900: "#0E001A",
      },
      terciary: {
        50: "#FFFDE5",
        100: "#FFFAB3",
        200: "#FFF780",
        300: "#FFF44D",
        400: "#FFF01A",
        500: "#E6D700",
        600: "#B3A700",
        700: "#807700",
        800: "#4D4800",
        900: "#1A1800",
      },
      neutral: {
        50: "#F4F0F1",
        100: "#DED3D6",
        200: "#C8B6BB",
        300: "#B2999F",
        400: "#9D7C84",
        500: "#83626B",
        600: "#664D53",
        700: "#49373B",
        800: "#2C2124",
        900: "#0F0B0C",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        abrilFatface: ["var(--font-abrilFatface)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
