import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    "{includes,components,utils,hooks,styles,assets,types,config,lib}/**/*.{ts,tsx,js,jsx}",
  ],
} satisfies Config;
