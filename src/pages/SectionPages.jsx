// Thin page compositions of existing sections. Each is lazy-loaded by the router.
import HeroPage from "../components/Heropage";
import Banner from "../components/Banner";
import TradingStats from "../components/TradingStats";
import FAQSection from "../components/Faqsection";
import SpecialOffer from "../components/SpecialOffer";
import Feedbacksection from "../components/Feedbacksection";
import HomeMarketSnapshot from "../features/market/HomeMarketSnapshot";

export function HomePage() {
  return (
    <>
      <HeroPage />
      <HomeMarketSnapshot />
      <Banner />
      <TradingStats />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <FAQSection />
      <TradingStats />
    </>
  );
}

export function SpecialOfferPage() {
  return (
    <>
      <SpecialOffer />
      <TradingStats />
    </>
  );
}

export function TestimonialsPage() {
  return (
    <>
      <Feedbacksection />
      <TradingStats />
    </>
  );
}
