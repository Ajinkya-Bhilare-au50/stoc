/**
 * SniperScope design system — Tailwind theme.
 *
 * Every colour maps to a CSS variable defined in src/index.css (:root), so the
 * palette lives in exactly one place. Use the semantic names below in
 * components (bg-card, text-ink-muted, border-line, text-up …) — never raw hex
 * or Tailwind's default palette.
 */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: false,
    extend: {
      colors: {
        canvas: token("bg"), // page background
        surface: token("bg-2"), // secondary background, inputs
        card: token("card"),
        elevated: token("elevated"),
        line: token("border"),
        ink: {
          DEFAULT: token("text"),
          muted: token("text-muted"),
          subtle: token("text-subtle"),
        },
        accent: {
          DEFAULT: token("accent"),
          2: token("accent-2"),
        },
        up: token("up"),
        down: token("down"),
        warn: token("warn"),
        // Alias used by the market feature; same tokens.
        market: {
          bg: token("bg"),
          panel: token("bg-2"),
          card: token("card"),
          elevated: token("elevated"),
          border: token("border"),
          text: token("text"),
          muted: token("text-muted"),
          subtle: token("text-subtle"),
          accent: token("accent"),
          cyan: token("accent-2"),
          up: token("up"),
          down: token("down"),
          warn: token("warn"),
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      // Type scale: h1 36/40, h2 30/36, h3 24/32, h4 20/28, h5 18/28 (Tailwind
      // defaults) with body 14/22 and small 12/18.
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
      },
      borderRadius: {
        control: "var(--radius-control)", // buttons, inputs: 8px
        tile: "var(--radius-tile)", // inner tiles: 12px
        panel: "var(--radius-panel)", // cards: 16px
      },
      boxShadow: {
        card: "var(--shadow-card)",
        pop: "var(--shadow-pop)",
      },
      maxWidth: {
        page: "var(--container)",
      },
      height: {
        header: "var(--header-h)",
      },
      spacing: {
        header: "var(--header-h)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
      });
    },
  ],
};
