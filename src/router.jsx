import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import SiteLayout from "./layouts/SiteLayout";
import RequireAuth from "./auth/RequireAuth";
import AuthRedirectPage from "./auth/AuthRedirectPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import FullPageMessage from "./components/ui/FullPageMessage";
import { ROUTES } from "./config/routes";

// Code-split every page. The router waits for the chunk before switching, so
// the current page stays on screen (with a top progress bar) instead of
// flashing a blank loader.
const page =
  (load, name = "default") =>
  async () => ({ Component: (await load())[name] });
const sections = () => import("./pages/SectionPages");

const withFooter = { chrome: { offerPopup: true, stickyFooter: true } };

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
            handle: {
              chrome: {
                tickerTape: true,
                offerPopup: true,
                stickyFooter: true,
                scrollWidgets: true,
              },
            },
          },
          {
            path: ROUTES.nseStocks,
            lazy: page(() => import("./features/market/NseMarketPage")),
            handle: { chrome: { stickyFooter: true } },
          },
          {
            path: ROUTES.contact,
            lazy: page(() => import("./components/Contactus")),
            handle: withFooter,
          },
          { path: ROUTES.faq, lazy: page(sections, "FaqPage"), handle: withFooter },
          { path: ROUTES.specialOffer, lazy: page(sections, "SpecialOfferPage") },
          {
            path: ROUTES.testimonials,
            lazy: page(sections, "TestimonialsPage"),
            handle: { chrome: { stickyFooter: true, scrollWidgets: true } },
          },
          { path: ROUTES.enquiry, lazy: page(() => import("./components/AdmissionForm")) },
          { path: ROUTES.login, element: <AuthRedirectPage mode="login" /> },
          { path: ROUTES.signup, element: <AuthRedirectPage mode="signup" /> },

          // Signed-in area: everything below requires an Auth0 session.
          {
            element: <RequireAuth />,
            children: [
              {
                path: ROUTES.stockCourses,
                lazy: page(() => import("./components/StockCoursesPage")),
              },
              {
                path: ROUTES.codingCourses,
                lazy: page(() => import("./components/CodingCoursesPage")),
              },
              {
                path: ROUTES.blog,
                lazy: page(() => import("./components/BlogPage")),
                handle: { chrome: { offerPopup: true } },
              },
            ],
          },

          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);
