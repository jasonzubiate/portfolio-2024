import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "demo-smoke": "#EFEFEF",
        "cod-gray": "#131313",
        "clay-grey": "#626262",
        "lime-green": "#D0F38A",
        "pool-sun": "#288BFF",
      },
    },
  },
  plugins: [],
};
export default config;
