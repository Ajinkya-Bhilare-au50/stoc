import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import NavbarWithMegaMenu from "./components/NavbarWithMegaMenu.js";
import TradingViewTickerTape from "./components/TradingViewTickerTape";
import OfferPopup from "./components/Offerpopup";
import HeroPage from "./components/Heropage.js";
import Banner from "./components/Banner";
import TradingStats from "./components/TradingStats";
import StickyFooter from "./components/Stickyfooter";
import ScrollUpButton from "./components/Scrollupbutton";
import Scrollindicator from "./components/ScrollIndicator";
import ContactUs from "./components/Contactus";
import FAQSection from "./components/Faqsection";
import Feedbacksection from "./components/Feedbacksection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import StockCoursesPage from "./components/StockCoursesPage";
import CodingCoursesPage from "./components/CodingCoursesPage";
import BlogPage from "./components/BlogPage";
import SpecialOffer from "./components/SpecialOffer";
import AdmissionForm from "./components/AdmissionForm";
import ProtectedRoute from "./components/ProtectedRoute";

const domain = "dev-wvhg0vqfxgkv3uhg.us.auth0.com"; // Replace with your Auth0 domain
const clientId = "lh9hoOQ21ZmhRZyuGHnpGMLPM14vv9ss"; // Replace with your Auth0 client ID

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <TradingViewTickerTape />
        <OfferPopup />
        <HeroPage />
        <Banner />
        <TradingStats />
        <StickyFooter />
        <ScrollUpButton />
        <Scrollindicator />
      </div>
    ),
  },
  {
    path: "nse-stocks",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <OfferPopup />
        <ContactUs />
        <StickyFooter />
      </div>
    ),
  },
  {
    path: "FAQ",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <OfferPopup />
        <FAQSection />
        <TradingStats />
        <StickyFooter />
      </div>
    ),
  },
  {
    path: "specialoffer",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <SpecialOffer />
        <TradingStats />
      </div>
    ),
  },
  {
    path: "Testimonial",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <Feedbacksection />
        <TradingStats />
        <StickyFooter />
        <ScrollUpButton />
        <Scrollindicator />
      </div>
    ),
  },
  {
    path: "Signup",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <Signup />
        <StickyFooter />
      </div>
    ),
  },
  {
    path: "Login",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <Login />
        <StickyFooter />
      </div>
    ),
  },
  {
    path: "stockcoursepage",
    element: (
      <ProtectedRoute>
        <NavbarWithMegaMenu />
        <StockCoursesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "codingcoursespage",
    element: (
      <ProtectedRoute>
        <NavbarWithMegaMenu />
        <CodingCoursesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "blogpage",
    element: (
      <ProtectedRoute>
        <NavbarWithMegaMenu />
        <OfferPopup />
        <BlogPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/enquiry",
    element: (
      <>
        <NavbarWithMegaMenu />
        <AdmissionForm />
      </>
    ),
  },
]);

function App() {
  return (
    <div
      onCopy={(event) => {
        event.preventDefault();
      }}
    >
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: "https://sniperscope.netlify.app/",
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </div>
  );
}

export default App;
