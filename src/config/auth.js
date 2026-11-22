// Auth0 settings. Values can be overridden per environment via .env.local
// (VITE_AUTH0_DOMAIN / VITE_AUTH0_CLIENT_ID). Both are public identifiers for
// a browser (SPA) application, so the fallbacks are safe to ship.
export const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN || "dev-wvhg0vqfxgkv3uhg.us.auth0.com",
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || "lh9hoOQ21ZmhRZyuGHnpGMLPM14vv9ss",
};
