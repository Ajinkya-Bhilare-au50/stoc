import React, { useState } from "react";
import Rating from "@mui/material/Rating"; // Import Rating component from Material-UI
import { FaPlus, FaMinus } from "react-icons/fa";
import Collapse from "react-collapse";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons
import {
  FaBook,
  FaChartLine,
  FaBalanceScale,
  FaLightbulb,
} from "react-icons/fa";
const CourseStructure = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-4 text-center">
        How is the Course Structured?
      </h2>
      <div className="space-y-6">
        <div className="flex ">
          <div>
            <FaLightbulb size={45} className="text-yellow-900 text-3xl mr-4" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              1. Introduction to Stock Trading and Investing
            </h3>
            <p className="text-gray-700">
              The first three sections address common queries that beginners
              have about stock trading and investing.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div>
            <FaBalanceScale
              size={45}
              className="text-green-500 text-3xl mr-4"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              2. Financial Statement Analysis
            </h3>
            <p className="text-gray-700">
              The next four sections focus on understanding and analyzing the
              financial statements of companies, which is crucial for making
              informed stock trading or investing decisions.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div>
            <FaChartLine size={45} className="text-blue-500 text-3xl mr-4" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              3. Technical Analysis
            </h3>
            <p className="text-gray-700">
              The following eight sections cover various technical analysis
              techniques. These techniques are applicable not only to stock
              trading but also to other asset classes.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div>
            <FaBook size={45} className="text-red-500 text-3xl mr-4" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">4. Option Basics</h3>
            <p className="text-gray-700">
              The final three sections provide a comprehensive overview of
              options trading, which will be extremely beneficial if you want to
              trade stocks using options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const faqData = [
    {
      question: "What is stock trading?",
      answer:
        "The stock market refers to public markets that exist for issuing, buying, and selling stocks that trade on stock exchanges. Stocks represent fractional ownership in a company. The stock market is where traders buy and sell stocks. The stock market serves two important purposes. For companies, it provides a means to acquire capital as a way to fund and expand their business. For stock traders, it provides an opportunity to share in the profits of publicly traded companies. In the U.S., there are multiple regional stock exchanges, while most other countries maintain a single stock exchange. Stock trading is the activity of buying and selling shares of publicly traded companies with the goal of securing a profit or loss.",
    },
    {
      question: "What careers use stock trading?",
      answer:
        "A stock trader can work individually as an analyst or advisor or as an employee for a large corporation. An Investment Banker works with companies to find investors using their extensive knowledge of the stock market and accurately valuing the business before it becomes a publicly traded company. A Financial Manager oversees the general finances of a company, including advising on the value of any shares the company has in the stock market. A Personal Financial Advisor focuses on an individual’s finances and typically makes investments on behalf of their client. A Market Data Compliance Analyst constantly checks the market data, ensuring the share and stakeholders are aware of any changes or updates. An Accountant or Auditor is an all-around financial expert, including being up to date with all stock market trends. They prepare financial documents and provide",
    },
    {
      question: "What are different types of trade orders",
      answer:
        "There are five different types of orders. The market order is a trade executed immediately at the current market price. A limit order is an order to buy or sell a number where the limit price identifies the maximum (buy) or minimum (sell) execution price. A stop order is an order to buy or sell shares when the market price reaches a stop price set by the trader. Unlike the limit order, there is no protection – in a fast market the execution price can exceed the stop price. A trailing stop order is similar to a stop order, except the stop price is determined by a percentage. The percentage is used to calculate the stop price based on the market price at the time of submission. And finally, the stop limit order allows the trader to put both a stop price and a limit price on the order. The trade will only execute within the boundaries set by the stop price and the limit price.",
    },

    {
      question: "what are the types of stock trading strategies",
      answer:
        "There are several different stock trading strategies. Day trading refers to buying and selling stocks in one day. Traders sell stocks the same day, so they never hold a position overnight. Position trading involves buying and holding stock based on anticipated trends. The goal is to identify the market direction based on prediction charts and monitor the trend to capture the apex gain/loss. At the end of a trend, the stock price fluctuates while it establishes a new price. Swing Trading takes advantage of this price volatility period and uses fundamental analysis to determine when to buy and sell. Scalping is one of the quickest trading strategies for spread advantage. The trader buys at the bid price and sells at the asking price to profit off the differential. Fading is short selling a stock when the trader believes it has been overbought. A sell trade is executed when the price",
    },
    {
      question: "Can I trade stocks without a broker?",
      answer:
        "No, you need a brokerage account to trade stocks on stock exchanges.",
    },
    {
      question: "What is the difference between a bear market and a bull market",
      answer:
        "A simple definition is that a bull market is when prices are on the rise, and a bear market is when market prices are declining. It is believed the terms originated based on how these animals attack their opponents; the bull thrusts its horns up in the air and the bear swipes its paw downwards. For example, if the market rises 20%, this is considered a bull market. If the market declines 20%, this is considered a bear market. A bull market is usually accompanied by a rise in GDP, consumer confidence, and low employment rates. There can be many reasons for a decline in the GDP, but it generally leads to lower consumer confidence and decreased spending. This will affect company performance and stock price. When companies are forced to layoff employees due to a struggling economy, it can make recovery out of the bear market difficult.",
    },
  ];

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container  p-6">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden w-full "
          >
            <button
              className="w-full flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <div className="ml-auto">
                {expandedIndex === index ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </div>
            </button>
            <Collapse isOpened={expandedIndex === index}>
              <div className="p-4 bg-gray-100">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

const LearnerReview = ({ inputPercentages = [80, 70, 60, 50, 10] }) => {
  const labels = ["Excellent", "Very Good", "Good", "Average", "Poor"];
  return (
    <div>
      <CourseStructure />
      <div className="flex justify-center items-center m-4 p-6">
        <div className="w-full max-w-2xl px-8 py-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <p className="text-7xl font-bold text-gray-800">4.5</p>
            <div className="ml-4">
              <Rating
                name="size-medium"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
              <p className="text-gray-600">18 Reviews</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {inputPercentages.map((percentage, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1/4 text-gray-700 text-right pr-4">
                  {labels[index]}
                </div>
                <div className="flex-grow">
                  <ProgressBar
                    completed={percentage}
                    bgColor="#F2B544"
                    baseBgColor="#EEEEEE"
                    isLabelVisible={false}
                    transitionDuration="2s"
                    height="12px"
                  />
                </div>
                <span className="ml-4 flex items-center justify-center text-gray-700">
                  <div className="text-lg font-medium">
                    {(5.0 - index * 1).toFixed(1)}
                  </div>
                  <FaStar className="text-yellow-800 ml-2" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default LearnerReview;
