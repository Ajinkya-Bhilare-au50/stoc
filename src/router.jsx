import { createBrowserRouter, Navigate, useLocation } from "react-router";
import RootLayout from "./layouts/RootLayout";
import SiteLayout from "./layouts/SiteLayout";
import RequireAuth from "./auth/RequireAuth";
import AuthRedirectPage from "./auth/AuthRedirectPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import FullPageMessage from "./components/ui/FullPageMessage";
import { LEGACY_REDIRECTS, ROUTES } from "./config/routes";

// Code-split every page. The router waits for the chunk before switching, so
// the current page stays on screen (with a top progress bar) instead of
// flashing a blank loader.
const page =
  (load, name = "default") =>
  async () => ({ Component: (await load())[name] });
const sections = () => import("./pages/SectionPages");

/** Old URL → new URL, keeping ?query and #hash (e.g. /nse-stocks?symbol=TCS). */
function LegacyRedirect({ to }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}

const marketing = { chrome: { offerPopup: true, stickyFooter: true, scrollWidgets: true } };
const standard = { chrome: { stickyFooter: true, scrollWidgets: true } };

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    HydrateFallback: () => <FullPageMessage loading />,
    children: [
      {
        element: <SiteLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: ROUTES.home,
            lazy: page(sections, "HomePage"),
            handle: { chrome: { ...marketing.chrome, tickerTape: true } },
          },
          {
            path: ROUTES.market,
            lazy: page(() => import("./features/market/NseMarketPage")),
            handle: standard,
          },
          { path: ROUTES.faq, lazy: page(sections, "FaqPage"), handle: marketing },
          { path: ROUTES.specialOffer, lazy: page(sections, "SpecialOfferPage"), handle: standard },
          { path: ROUTES.testimonials, lazy: page(sections, "TestimonialsPage"), handle: marketing },
          {
            path: ROUTES.enquiry,
            lazy: page(() => import("./components/AdmissionForm")),
            handle: { chrome: { scrollWidgets: true } },
          },
          { path: ROUTES.contact, lazy: page(() => import("./components/Contactus")), handle: standard },
          { path: ROUTES.login, element: <AuthRedirectPage mode="login" /> },
          { path: ROUTES.signup, element: <AuthRedirectPage mode="signup" /> },

          // Signed-in area: everything below requires an Auth0 session.
          {
            element: <RequireAuth />,
            children: [
              {
                path: ROUTES.stockCourses,
                lazy: page(() => import("./components/StockCoursesPage")),
                handle: standard,
              },
              {
                path: ROUTES.codingCourses,
                lazy: page(() => import("./components/CodingCoursesPage")),
                handle: standard,
              },
              { path: ROUTES.blog, lazy: page(() => import("./components/BlogPage")), handle: marketing },
            ],
          },

          // Pre-redesign URLs keep working.
          ...Object.entries(LEGACY_REDIRECTS).map(([path, to]) => ({
            path,
            element: <LegacyRedirect to={to} />,
          })),

          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);
