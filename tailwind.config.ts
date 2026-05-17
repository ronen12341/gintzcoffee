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
        brown: {
          DEFAULT: "#3B1F0A",
          dark: "#2A1506",
          light: "#5C3015",
        },
        gold: {
          DEFAULT: "#C8922A",
          light: "#E0AB40",
          dark: "#A87520",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#EDE5D5",
        },
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #2A1506 0%, #3B1F0A 40%, #5C3015 70%, #3B1F0A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
