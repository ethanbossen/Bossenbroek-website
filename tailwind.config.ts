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
        cream: "#FAF7F2",
        "cream-dark": "#F0EBE3",
        surface: "#E8E0D4",
        warm: {
          text: "#1C1917",
          muted: "#78716C",
          accent: "#B45309",
          "accent-hover": "#92400E",
          "accent-light": "#FDE68A",
          deep: "#7F1D1D",
          string: "#D4A574",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-heading)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
