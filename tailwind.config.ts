import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8b5cf6", // DropPop Purple
          foreground: "#ffffff",
        },
        card: "hsl(var(--card))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
