import React from "react";

const TradingViewTickerTape = () => {
  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget">
        {/* Paste the copied embed code here */}
        <iframe
          title="TradingView Ticker Tape"
          src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=in#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22SENSEX%22%2C%22proName%22%3A%22INDEX%3ASENSEX%22%7D%2C%7B%22description%22%3A%22SBIN%22%2C%22proName%22%3A%22BSE%3ASBIN%22%7D%2C%7B%22description%22%3A%22ADANI%20ENT%22%2C%22proName%22%3A%22BSE%3AADANIENT%22%7D%2C%7B%22description%22%3A%22ICICI%20BANK%22%2C%22proName%22%3A%22BSE%3AICICIBANK%22%7D%2C%7B%22description%22%3A%22TCS%22%2C%22proName%22%3A%22BSE%3ATCS%22%7D%2C%7B%22description%22%3A%22HDFC%20BANK%22%2C%22proName%22%3A%22BSE%3AHDFCBANK%22%7D%2C%7B%22description%22%3A%22RELIANCE%22%2C%22proName%22%3A%22BSE%3ARELIANCE%22%7D%2C%7B%22description%22%3A%22INFY%22%2C%22proName%22%3A%22BSE%3AINFY%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22tradingcafeindia.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22tradingcafeindia.com%2F%22%7D"
          width="100%"
          height="46"
          allowtransparency="true"
          frameborder="0"
        ></iframe>
      </div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://in.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewTickerTape;
