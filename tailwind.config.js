/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Magenta: "#E01F4C", // Main Color
        MagentaLight: "#f35669",

        Rose: "#f8b1c3",
        RoseLight: "#ffcdce",
        RoseLighter: "#FEF4F3",

        Blue: "#3497FD",
        Green: "#19B657",
        Red: "#de2b00",
        Purple: "#9747FF",
        Orange: "#FF6E3E",

        TrueBlack: "#000000",
        Black: "#26333A",
        Grey: "#AAAFB9",
        GreyLight: "#DADEE5",
        GreyLighter: "#E9ECF0",
        White: "#FFFFFF", // background color
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
