// TradingView ticker tape (third-party embed; prices are delayed, not TejHQ data).
const SYMBOLS = [
  {
    "description": "SENSEX",
    "proName": "BSE:SENSEX"
  },
  {
    "description": "NIFTY 50",
    "proName": "NSE:NIFTY"
  },
  {
    "description": "BANK NIFTY",
    "proName": "NSE:BANKNIFTY"
  },
  {
    "description": "RELIANCE",
    "proName": "NSE:RELIANCE"
  },
  {
    "description": "HDFC BANK",
    "proName": "NSE:HDFCBANK"
  },
  {
    "description": "ICICI BANK",
    "proName": "NSE:ICICIBANK"
  },
  {
    "description": "TCS",
    "proName": "NSE:TCS"
  },
  {
    "description": "INFY",
    "proName": "NSE:INFY"
  },
  {
    "description": "SBIN",
    "proName": "NSE:SBIN"
  }
];

const CONFIG = {
  symbols: SYMBOLS,
  showSymbolLogo: true,
  colorTheme: "dark",
  isTransparent: true,
  displayMode: "regular",
  width: "100%",
  height: 46,
};

const SRC = `https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=in#${encodeURIComponent(JSON.stringify(CONFIG))}`;

export default function TradingViewTickerTape() {
  return (
    <div className="h-[46px] overflow-hidden border-b border-line bg-surface">
      <iframe title="Market ticker" src={SRC} width="100%" height="46" className="block" loading="lazy" />
    </div>
  );
}
