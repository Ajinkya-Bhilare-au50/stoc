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

## NSE market page (TejHQ)

`/market` shows end-of-day NSE data from [TejHQ](https://tejhq.dev): breadth, top
gainers/losers, most active, stock search, price chart, 52-week range, corporate
actions, and (with a key) delivery % and split-adjusted prices.

- The browser only calls `/api/market/*`, served by `netlify/functions/market.mjs`
  (and by the Vite dev server locally). The function holds the API key, trims the
  ~650 KB daily snapshot to a small summary, and is cached at the Netlify CDN.
- **API key:** set `TEJ_API_KEY` in Netlify → Project configuration → Environment
  variables (and in `.env.local` for local dev). Never use a `VITE_` prefix for it.
- Data is end of day (refreshed ~18:30 IST). TejHQ has no live quotes or index levels.

## Design system

All styling goes through one set of tokens — change the look in one place:

- **Tokens:** CSS variables in `src/index.css` (`:root`): colours (as RGB channels), radii,
  shadows, header height, container width. Dark fintech palette; green = up, red = down.
- **Tailwind theme:** `tailwind.config.js` maps the tokens to semantic classes —
  `bg-canvas | bg-surface | bg-card | bg-elevated`, `text-ink | text-ink-muted | text-ink-subtle`,
  `border-line`, `text-accent`, `text-up`, `text-down`, `text-warn`. Never use raw hex or
  Tailwind's default palette (`gray-500`, `blue-600` …) in components.
- **Component classes** (`src/index.css`, `@layer components`): `container-page`, `section`,
  `eyebrow`, `page-title`, `section-title`, `lead`, `card`, `tile`, `btn` + `btn-primary |
  btn-secondary | btn-outline | btn-ghost | btn-danger | btn-success` (+ `btn-sm | btn-lg`),
  `label`, `input`, `select`, `textarea`, `field-error`, `badge-*`, `data-table`, `article`.
- **Typography:** Inter; h1 36/40 → body 14/22 → small 12/18.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/market` | NSE market overview (`?symbol=TCS`) |
| `/courses/stock-market`, `/courses/coding` | Courses (sign-in required) |
| `/blog`, `/blog/:slug` | Blog index and articles (sign-in required) |
| `/reviews`, `/faq`, `/offers`, `/enquiry`, `/contact` | Content pages |

Old URLs (`/nse-stocks`, `/stockcoursepage`, `/codingcoursespage`, `/blogpage`,
`/testimonial`, `/specialoffer`) redirect automatically (see `LEGACY_REDIRECTS`).

## Site settings

`src/config/site.js` holds contact details, navigation, footer links, the WhatsApp
community link and social profile URLs (empty = hidden).

## Contact form

Submissions go to **Netlify Forms** (form `contact`, registered in `index.html`). In Netlify:
Forms → enable form detection, then add an email notification.

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
