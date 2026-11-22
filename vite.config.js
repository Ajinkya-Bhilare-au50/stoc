import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Serves /api/market/* in `npm run dev` with the same handler Netlify runs in
 * production (netlify/functions/market.mjs), so there's one code path.
 */
function marketApiDev() {
  return {
    name: "market-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/market/")) return next();
        try {
          const { default: handler } = await server.ssrLoadModule("/netlify/functions/market.mjs");
          const response = await handler(new Request(`http://localhost${req.url}`, { method: req.method }));
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Server-only secrets (no VITE_ prefix) for the dev API middleware.
  const env = loadEnv(mode, process.cwd(), "");
  if (env.TEJ_API_KEY && !process.env.TEJ_API_KEY) process.env.TEJ_API_KEY = env.TEJ_API_KEY;

  return {
    plugins: [react(), marketApiDev()],
    server: { port: 3001, open: false },
    preview: { port: 3001 },
    // Keep CRA's output folder so the existing Netlify publish directory still works.
    build: { outDir: "build", emptyOutDir: true },
    // odometer's theme CSS still ships old IE "*prop" hacks; strip them instead of failing.
    css: { lightningcss: { errorRecovery: true } },
  };
});
