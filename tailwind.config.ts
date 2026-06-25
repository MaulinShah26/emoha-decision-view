import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        page: "rgb(var(--page) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
          subtle: "rgb(var(--ink-subtle) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
        band: {
          critical: "rgb(var(--band-critical) / <alpha-value>)",
          "critical-bg": "rgb(var(--band-critical-bg) / <alpha-value>)",
          high: "rgb(var(--band-high) / <alpha-value>)",
          "high-bg": "rgb(var(--band-high-bg) / <alpha-value>)",
          watch: "rgb(var(--band-watch) / <alpha-value>)",
          "watch-bg": "rgb(var(--band-watch-bg) / <alpha-value>)",
          low: "rgb(var(--band-low) / <alpha-value>)",
          "low-bg": "rgb(var(--band-low-bg) / <alpha-value>)",
        },
      },
      maxWidth: {
        // Single page width used across all sections.
        content: "1280px",
        wide: "1280px", // alias retained so existing class names keep working
      },
      fontSize: {
        md: "var(--size-md)",
        lg: "var(--size-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
