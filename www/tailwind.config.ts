import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// Import theme configuration
const theme = {
  fonts: {
    font_size: {
      base: "16px",
      scale: 1
    },
    font_family: {
      primary: "Inter",
      primary_type: "normal",
      secondary: "Inter",
      secondary_type: "normal",
      
    }
  },
  
}

// Font calculations from the JS config
const font_base = Number(theme.fonts.font_size.base.replace("px", ""));
const font_scale = Number(theme.fonts.font_size.scale);
const h6 = font_base / font_base;
const h5 = h6 * font_scale;
const h4 = h5 * font_scale;
const h3 = h4 * font_scale;
const h2 = h3 * font_scale;
const h1 = h2 * font_scale;

// Font family processing
let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondary = theme.fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}

const config = {
  // Enable dark mode support using both class and data-theme
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    // Include all files in the src directory
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,css,scss}",
  ],
  safelist: [],
  prefix: "",
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom theme colors
        desir: {
          50: "#e6f5e6",
          100: "#c3e6c3",
          200: "#9fd69f",
          300: "#7bc67b",
          400: "#57b657",
          500: "#008000", // Main brand color
          600: "#006700",
          700: "#004d00",
          800: "#003400",
          900: "#001a00",
        },
        // Additional colors from JS config
        txt: {
          p: "theme.colors.default.txt.primary",
          s: "theme.colors.default.txt.secondary",
          light: "theme.colors.default.txt.light",
        },
        bg: {
          p: "theme.colors.default.bg.primary",
          s: "theme.colors.default.bg.secondary",
          t: "theme.colors.default.bg.tertiary",
        },
        darkmode: {
          txt: {
            p: "theme.colors.darkmode.txt.primary",
            s: "theme.colors.darkmode.txt.secondary",
            light: "theme.colors.darkmode.txt.light",
          },
          bg: {
            p: "theme.colors.darkmode.bg.primary",
            s: "theme.colors.darkmode.bg.secondary",
            t: "theme.colors.darkmode.bg.tertiary",
          },
          border: "theme.colors.darkmode.border",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      minHeight: {
        static_sidemenu: "calc(100vh - 6rem)",
      },
      maxHeight: {
        static_sidemenu: "calc(100vh - 6rem)",
      },
      fontSize: {
        base: `${font_base}px`,
        h1: `${h1}rem`,
        "h1-sm": `${h1 * 0.8}rem`,
        h2: `${h2}rem`,
        "h2-sm": `${h2 * 0.8}rem`,
        h3: `${h3}rem`,
        "h3-sm": `${h3 * 0.8}rem`,
        h4: `${h4}rem`,
        h5: `${h5}rem`,
        h6: `${h6}rem`,
      },
      fontFamily: {
        primary: ["fontPrimary", "fontPrimaryType"],
        secondary: ["fontSecondary", "fontSecondaryType"],
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "9/16": "56.25%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "matrix-fall": {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 128, 0, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(0, 128, 0, 0)" },
        },
        cycleBg: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "matrix-fall": "matrix-fall 10s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-green": "pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // Additional animations from JS config
        fade: "fadeIn 1000ms both",
        fadeUp: "fadeInUp 1000ms both",
        fadeDown: "fadeInDown 1000ms both",
        fadeRight: "fadeInRight 1000ms both",
        fadeLeft: "fadeInLeft 1000ms both",
        scale: "scaleOut 1000ms both",
        twinkle: "twinkle 5s infinite ease-in-out",
        cycleBg: "cycleBg 60s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
    plugin(({ addVariant }) => {
      addVariant("intersect", "&:not([no-intersect])");
    }),
  ],
} satisfies Config;

export default config;

