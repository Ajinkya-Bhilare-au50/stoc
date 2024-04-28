import "./App.css";
import Accordian from "./components/Accordian";
import ContactUs from "./components/Contactus";
import CourseList from "./components/Courselist";

import DropdownMenu from "./components/Dropdownmenu";

import FAQSection from "./components/Faqsection";
import Feedback from "./components/Feedback";
import Feedbacksection from "./components/Feedbacksection";
import HeroPage from "./components/Heropage";
import IndicesData from "./components/Indicesdata";

import {NavbarWithMegaMenu} from "./components/NavbarWithMegaMenu";
import OfferPopup from "./components/Offerpopup";
import ScrollUpButton from "./components/Scrollupbutton";
import StickyFooter from "./components/Stickyfooter";
import TradingStats from "./components/TradingStats";
import TradingViewTickerTape from "./components/TradingViewTickerTape";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
//routing implementation inside function named createBrowserRouter Pass object
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <TradingViewTickerTape />
        <OfferPopup />
        <HeroPage />
        <TradingStats />
        <StickyFooter />
        <ScrollUpButton />
      </div>
    ),
  },
  {
    path: "contact",
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
    path: "Testimonial",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <OfferPopup />
        < Feedbacksection/>
        <TradingStats />
        <StickyFooter />
      </div>
    ),
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Route />
      </RouterProvider>
    </div>
  );
}

export default App;
