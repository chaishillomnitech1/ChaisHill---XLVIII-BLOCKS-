import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { space: "#050507", emerald: { DEFAULT: "#00FF88" }, gold: "#FFD700" },
    },
  },
  plugins: [],
};
export default config;
