import { Outlet, useMatches, useNavigation } from "react-router";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import TradingViewTickerTape from "../components/TradingViewTickerTape";
import OfferPopup from "../components/Offerpopup";
import StickyFooter from "../components/Stickyfooter";
import ScrollUpButton from "../components/Scrollupbutton";
import ScrollIndicator from "../components/ScrollIndicator";

/**
 * Shared page shell: header, footer and optional promo widgets. Each route
 * opts into extras via `handle.chrome` in the router config.
 */
export default function SiteLayout() {
  const matches = useMatches();
  const navigation = useNavigation();
  const chrome = Object.assign({}, ...matches.map((m) => m.handle?.chrome));

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <a href="#main" className="btn btn-primary sr-only fixed left-4 top-2 z-[60] focus:not-sr-only">
        Skip to content
      </a>
      {/* Thin progress bar while the next page's code is loading. */}
      <div
        aria-hidden
        className={`fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent transition-transform duration-500 ${
          navigation.state === "loading" ? "scale-x-75" : "scale-x-0"
        }`}
      />
      <SiteHeader />
      {chrome.tickerTape && <TradingViewTickerTape />}
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      {chrome.offerPopup && <OfferPopup />}
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
