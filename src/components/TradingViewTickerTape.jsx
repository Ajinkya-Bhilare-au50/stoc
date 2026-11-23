import { useTheme } from "../theme/useTheme";

// TradingView ticker tape (third-party embed; delayed prices, not TejHQ data).
// Only BSE symbols work in TradingView's free widget — NSE symbols (incl. NIFTY)
// show an error, so everything here is BSE-listed.
const SYMBOLS = [
  ["SENSEX", "BSE:SENSEX"],
  ["RELIANCE", "BSE:RELIANCE"],
  ["HDFC BANK", "BSE:HDFCBANK"],
  ["ICICI BANK", "BSE:ICICIBANK"],
  ["TCS", "BSE:TCS"],
  ["INFOSYS", "BSE:INFY"],
  ["SBI", "BSE:SBIN"],
  ["BHARTI AIRTEL", "BSE:BHARTIARTL"],
  ["ITC", "BSE:ITC"],
  ["ADANI ENT", "BSE:ADANIENT"],
].map(([description, proName]) => ({ description, proName }));

const src = (colorTheme) =>
  `https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=in#${encodeURIComponent(
    JSON.stringify({
      symbols: SYMBOLS,
      showSymbolLogo: true,
      colorTheme,
      isTransparent: true,
      displayMode: "regular",
      width: "100%",
      height: 46,
    }),
  )}`;

export default function TradingViewTickerTape() {
  const { theme } = useTheme();
  return (
    <div className="h-[46px] overflow-hidden border-b border-line bg-surface">
      {/* key: remount the iframe when the theme changes */}
      <iframe
        key={theme}
        title="Market ticker"
        src={src(theme)}
        width="100%"
        height="46"
        className="block"
        loading="lazy"
      />
    </div>
  );
}
