import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/theme");
const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "100": "#191919",
        },
        light: {
          "100": "#EEEEEE",
        },
        purple: "#B51B75"
      },
      fontFamily: {
        playFair: ["var(--font-playfair_display)"],
      },
      fontSize: {
        clamp: "clamp(2rem, 5vw, 4rem)" 
      },
    },
  },
  plugins: [nextui()],
  darkMode: "class",
};
export default config;
