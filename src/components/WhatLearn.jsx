import ChecklistSection from "../features/courses/ChecklistSection";

const WhatYoullLearn = () => {
  const learningObjectives = [
    "Get answers to most frequently asked questions by beginners related to stock trading or investing!",
    "Understand Financial Statement of Companies you would like to invest.",
    "Learn Activity Ratios Liquidity Ratios, Solvency Ratios and Financial Ratios.",
    "Learn Graham's Number & identify undervalued stocks.",
    "Profit from a trade setup for all time frames & asset classes that can also be used for stock trading.",
    "Learn Gaps Trading.",
    "Learn popular technical indicators.",
    "Start trading / investing in the stock market.",
    "Analyze Financial Statements using Ratio Analysis & Common Size Analysis.",
    "Learn Benjamin Graham's value investing strategy.",
    "Apply Technical Analysis for stock trading.",
    "Learn Candlesticks Pattern - applicable to all kinds of financial trading including stock trading.",
    "Learn Technical Analysis concepts like Support & Resistance / Trend Line & Trend Channels.",
    "Get Tips on Money Management.",
  ];

  return <ChecklistSection eyebrow="Curriculum" title="What you'll learn" items={learningObjectives} />;
};

export default WhatYoullLearn;
