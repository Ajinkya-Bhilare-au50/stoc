# Sniper Coding & Trading — portal

React 19 + React Router 8 + Vite + Tailwind CSS. Authentication is handled by Auth0.

## Run locally

Requires Node 22.22+ (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3001
npm run build      # production build → ./build (Netlify publish dir)
npm run preview    # serve the production build locally
```

## Auth0 setup

Auth0 sends users back to whatever origin the app runs on, so **each origin
must be allowed** in the Auth0 dashboard → Applications → this SPA → Settings.
Add every origin (comma-separated) to all three fields:

| Field                 | Values                                                        |
| --------------------- | ------------------------------------------------------------- |
| Allowed Callback URLs | `http://localhost:3001, https://sniperscope.netlify.app`      |
| Allowed Logout URLs   | `http://localhost:3001, https://sniperscope.netlify.app`      |
| Allowed Web Origins   | `http://localhost:3001, https://sniperscope.netlify.app`      |

Recommended: enable **Refresh Token Rotation** for the application so sessions
survive reloads in browsers that block third-party cookies.

To point at a different tenant, copy `.env.example` to `.env.local` and edit it.

## Structure

```
src/
  main.jsx              entry: mounts <RouterProvider>
  router.jsx            all routes (lazy-loaded pages, auth guard, 404)
  config/routes.js      URL constants — use these instead of string paths
  config/auth.js        Auth0 domain / client id
  auth/                 AuthProvider, useAuth hook, RequireAuth guard,
                        /login & /signup redirect page, navbar auth controls
  layouts/              RootLayout (auth + scroll restore), SiteLayout (navbar,
                        optional popup/footer chosen per route via `handle.chrome`)
  pages/                route-level compositions, 404 and error pages
  components/ui/        shared primitives (Dropdown, Collapse, Spinner, …)
  components/           page sections
```

### Adding a page

1. Add the path to `config/routes.js`.
2. Add a route in `router.jsx` with `lazy: page(() => import("./pages/MyPage"))`.
   Put it under the `RequireAuth` block if it needs a signed-in user.
3. Opt into extra chrome with `handle: { chrome: { stickyFooter: true, offerPopup: true } }`.
