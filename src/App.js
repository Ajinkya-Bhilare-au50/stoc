import "./App.css";
import Accordian from "./components/Accordian";
import ContactUs from "./components/Contactus";
import CourseList from "./components/Courselist";
import Scrollindicator from "./components/ScrollIndicator";
import DropdownMenu from "./components/Dropdownmenu";
import Login from "./components/Login";
import FAQSection from "./components/Faqsection";
import Feedback from "./components/Feedback";
import Feedbacksection from "./components/Feedbacksection";
import HeroPage from "./components/Heropage";
import IndicesData from "./components/Indicesdata";
import Signup from "./components/Signup";
import { NavbarWithMegaMenu } from "./components/NavbarWithMegaMenu";
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
import AdmissionForm from "./components/AdmissionForm";
import StockCoursesPage from "./components/StockCoursesPage";
import CodingCoursesPage from "./components/CodingCoursesPage";
import BlogPage from "./components/BlogPage";
import SpecialOffer from "./components/SpecialOffer";
import Banner from "./components/Banner";
import CalendarSpreadGenerator from "./components/CalenderSpreadGenerator";
import AdmissionList from "./components/AdmissionList";

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
        <Banner />
        <TradingStats />
        <StickyFooter />
        <ScrollUpButton />
        <Scrollindicator />
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
      <div>
        <NavbarWithMegaMenu />

        <StockCoursesPage />
      </div>
    ),
  },
  {
    path: "codingcoursespage",
    element: (
      <div>
        <NavbarWithMegaMenu />

        <CodingCoursesPage />
      </div>
    ),
  },
  {
    path: "blogpage",
    element: (
      <div>
        <NavbarWithMegaMenu />
        <OfferPopup />

        <BlogPage />
      </div>
    ),
  },
  {
    path: "/enquiry",
    element: (
      <div>
        <NavbarWithMegaMenu />
        

        <AdmissionList /> 
        <AdmissionForm/>
      </div>
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
      <RouterProvider router={router}>
        <Route />
      </RouterProvider>
    </div>
  );
}

export default App;
