import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
  plugins: [],
  darkMode: "class",
};
export default config;
