import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: {
          soft: "var(--pink-soft)",
          light: "var(--pink-light)",
          pastel: "var(--pink-pastel)",
        },
        lavender: {
          soft: "var(--lavender-soft)",
          medium: "var(--lavender-medium)",
        },
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
export default config;
