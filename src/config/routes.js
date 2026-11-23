// Single source of truth for URLs. Use these instead of string literals so
// links, guards and the router can't drift apart.
export const ROUTES = {
  home: "/",
  market: "/market",
  faq: "/faq",
  specialOffer: "/offers",
  testimonials: "/reviews",
  enquiry: "/enquiry",
  contact: "/contact",
  login: "/login",
  signup: "/signup",
  stockCourses: "/courses/stock-market",
  codingCourses: "/courses/coding",
  blog: "/blog",
};

// Kept for components that still refer to the old name.
ROUTES.nseStocks = ROUTES.market;

/** Old URLs (bookmarks, shared links, search results) → new URLs. */
export const LEGACY_REDIRECTS = {
  "/nse-stocks": ROUTES.market,
  "/stockcoursepage": ROUTES.stockCourses,
  "/codingcoursespage": ROUTES.codingCourses,
  "/blogpage": ROUTES.blog,
  "/testimonial": ROUTES.testimonials,
  "/specialoffer": ROUTES.specialOffer,
};
