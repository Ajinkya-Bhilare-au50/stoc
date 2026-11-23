import { useId, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { FaBalanceScale, FaBook, FaChartLine, FaLightbulb } from "react-icons/fa";
import Collapse from "./ui/Collapse";
import AjinkyaProfile from "./AjinkyaProfile";

const STRUCTURE = [
  {
    icon: FaLightbulb,
    tone: "text-warn bg-warn/10",
    title: "Introduction to stock trading and investing",
    text: "The first three sections address common queries that beginners have about stock trading and investing.",
  },
  {
    icon: FaBalanceScale,
    tone: "text-up bg-up/10",
    title: "Financial statement analysis",
    text: "The next four sections focus on understanding and analysing company financial statements — crucial for informed trading and investing decisions.",
  },
  {
    icon: FaChartLine,
    tone: "text-accent bg-accent/10",
    title: "Technical analysis",
    text: "The following eight sections cover technical analysis techniques that apply to stocks and other asset classes.",
  },
  {
    icon: FaBook,
    tone: "text-down bg-down/10",
    title: "Option basics",
    text: "The final three sections give a comprehensive overview of options trading, for when you want to trade stocks using options.",
  },
];

const STOCK_FAQ = [
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
    answer: "No, you need a brokerage account to trade stocks on stock exchanges.",
  },
  {
    question: "What is the difference between a bear market and a bull market",
    answer:
      "A simple definition is that a bull market is when prices are on the rise, and a bear market is when market prices are declining. It is believed the terms originated based on how these animals attack their opponents; the bull thrusts its horns up in the air and the bear swipes its paw downwards. For example, if the market rises 20%, this is considered a bull market. If the market declines 20%, this is considered a bear market. A bull market is usually accompanied by a rise in GDP, consumer confidence, and low employment rates. There can be many reasons for a decline in the GDP, but it generally leads to lower consumer confidence and decreased spending. This will affect company performance and stock price. When companies are forced to layoff employees due to a struggling economy, it can make recovery out of the bear market difficult.",
  },
];

const LABELS = ["Excellent", "Very good", "Good", "Average", "Poor"];

function FaqItem({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className="border-b border-line last:border-b-0">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-ink transition-colors hover:text-accent sm:text-base"
        >
          {item.question}
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted">
            {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
          </span>
        </button>
      </h3>
      <Collapse open={open} id={id}>
        <p className="pb-4 pr-10 text-sm leading-6 text-ink-muted">{item.answer}</p>
      </Collapse>
    </div>
  );
}

/** Course structure, instructor, rating summary and stock-market FAQ. */
const LearnerReview = ({
  averageRating = 4.5,
  totalReviews = 18,
  inputPercentages = [80, 70, 60, 50, 10],
}) => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <>
      <section className="section border-t border-line">
        <div className="container-page">
          <p className="eyebrow">Curriculum</p>
          <h2 className="section-title mt-2">How is the course structured?</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STRUCTURE.map(({ icon: Icon, tone, title, text }, i) => (
              <li key={title} className="card">
                <div className="flex items-center justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-control ${tone}`}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold text-ink-subtle">Part {i + 1}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <AjinkyaProfile />
          <div className="card">
            <h2 className="card-title">Student ratings</h2>
            <div className="mt-4 flex items-center gap-4">
              <p className="text-6xl font-bold tabular-nums text-ink">{averageRating}</p>
              <div>
                <div className="flex" aria-label={`${averageRating} out of 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${i < Math.round(averageRating) ? "text-warn" : "text-line"}`}
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-ink-muted">{totalReviews} reviews</p>
              </div>
            </div>
            <dl className="mt-6 space-y-3">
              {inputPercentages.map((pct, i) => (
                <div
                  key={LABELS[i]}
                  className="grid grid-cols-[5.5rem_1fr_2.5rem] items-center gap-3 text-sm"
                >
                  <dt className="text-ink-muted">{LABELS[i]}</dt>
                  <dd className="h-2 overflow-hidden rounded-full bg-elevated">
                    <span className="block h-full rounded-full bg-warn" style={{ width: `${pct}%` }} />
                  </dd>
                  <dd className="text-right tabular-nums text-ink-subtle">{pct}%</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-page">
          <h2 className="section-title">Stock market FAQ</h2>
          <div className="card mt-6 py-1 sm:py-1">
            {STOCK_FAQ.map((item, i) => (
              <FaqItem
                key={item.question}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnerReview;
