import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3001, open: false },
  preview: { port: 3001 },
  // Keep CRA's output folder so the existing Netlify publish directory still works.
  build: { outDir: "build", emptyOutDir: true },
  // odometer's theme CSS still ships old IE "*prop" hacks; strip them instead of failing.
  css: { lightningcss: { errorRecovery: true } },
});
