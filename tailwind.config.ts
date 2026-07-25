import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  corePlugins: {
    container: false,
  },
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3F0E8",
        ridge: "#F7F5EF",
        card: "#FBFAF7",
        line: "#D8D2C4",
        "line-dark": "rgba(247,245,239,0.10)",
        ink: "#1F1F1C",
        "ink-soft": "#5D5A54",
        "ink-muted": "#8A857C",
        night: "#1B1A16",
        "night-soft": "#26241E",
        alpine: {
          50: "#F1F4EF",
          100: "#E1E8DD",
          200: "#C3D1BC",
          300: "#A4BA9A",
          400: "#93AC89",
          500: "#7F987C",
          600: "#6D8769",
          700: "#5A7057",
          800: "#475A45",
          900: "#374536",
        },
        signal: {
          DEFAULT: "#B08A4E",
          dark: "#8F6E3B",
          light: "#D9BE8B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "20px",
        "2xl": "28px",
        "3xl": "32px",
        pill: "999px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(31,31,28,0.04), 0 1px 1px rgba(31,31,28,0.03)",
        elevate: "0 4px 16px rgba(31,31,28,0.05)",
        "elevate-lg": "0 12px 32px rgba(31,31,28,0.07)",
        glow: "0 0 0 1px rgba(127,152,124,0.25), 0 20px 40px rgba(31,31,28,0.12)",
        capsule: "0 8px 24px rgba(31,31,28,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-premium forwards",
      },
    },
  },
  plugins: [],
};

export default config;
