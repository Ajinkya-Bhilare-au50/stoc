import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "rgb(8, 20, 83)",
        customYellow: "rgb(253,206,3)",
        customGray: "rgb(247,247,247)",
        // Fintech design tokens (dark market theme). Use these, not raw hex.
        market: {
          bg: "#0B1220",
          panel: "#111827",
          card: "#172235",
          elevated: "#1E293B",
          border: "#293548",
          text: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
          accent: "#3B82F6",
          cyan: "#06B6D4",
          up: "#22C55E",
          down: "#EF4444",
          warn: "#F59E0B",
        },
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
});
