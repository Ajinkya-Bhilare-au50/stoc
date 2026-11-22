import { Outlet, useMatches, useNavigation } from "react-router";
import NavbarWithMegaMenu from "../components/NavbarWithMegaMenu";
import TradingViewTickerTape from "../components/TradingViewTickerTape";
import OfferPopup from "../components/Offerpopup";
import StickyFooter from "../components/Stickyfooter";
import ScrollUpButton from "../components/Scrollupbutton";
import ScrollIndicator from "../components/ScrollIndicator";

/**
 * Shared page shell. Each route opts in to optional chrome through
 * `handle.chrome` in the router config instead of re-rendering the navbar,
 * popups and footer itself.
 */
export default function SiteLayout() {
  const matches = useMatches();
  const navigation = useNavigation();
  const chrome = Object.assign({}, ...matches.map((m) => m.handle?.chrome));

  return (
    <div className="flex min-h-screen flex-col">
      {/* Thin progress bar while the next page's code is loading. */}
      <div
        aria-hidden
        className={`fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-indigo-600 transition-transform duration-500 ${
          navigation.state === "loading" ? "scale-x-75" : "scale-x-0"
        }`}
      />
      <NavbarWithMegaMenu />
      {chrome.tickerTape && <TradingViewTickerTape />}
      {chrome.offerPopup && <OfferPopup />}
      <main className="flex-1">
        <Outlet />
      </main>
      {chrome.stickyFooter && <StickyFooter />}
      {chrome.scrollWidgets && (
        <>
          <ScrollUpButton />
          <ScrollIndicator />
        </>
      )}
    </div>
  );
}
