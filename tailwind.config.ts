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
        "demo-hover": "#D3D3D3",
        "cod-gray": "#131313",
        "blush-gray": "#D8D8D8",
        "clay-toff": "#757575",
        "lime-green": "#D0F38A",
        "pool-sun": "#288BFF",
      },
    },
  },
};
export default config;
