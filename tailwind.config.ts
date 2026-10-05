import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Ink & Ivory palette
      colors: {
        canvas: "#F6F3EE",   // page background, warm ivory
        paper: "#FBF9F5",    // raised surfaces
        sand: "#EDE8DF",     // tinted panels
        line: "#E2DCD2",     // hairlines and borders
        ink: "#121212",      // headings and primary text
        body: "#4A4640",     // paragraph text
        muted: "#6F6A62",    // labels and secondary text
        accent: {
          DEFAULT: "#1F4D3A", // deep emerald
          dark: "#163828",
          soft: "#E3EBE5",
          light: "#A9C9B6", // accent for use on ink backgrounds
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
