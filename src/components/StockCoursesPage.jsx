import { useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import LearnerReview from "./LearnerReview";
import WhatLearn from "./WhatLearn";
import WhyTakeThisCourse from "./WhyTakeThisCourse";
import WhoThisCourseIsFor from "./WhoThisCourseIsFor";
import ReviewsComponent from "./ReviewsComponent";
import StockInfo from "./StockInfo";
import CoursePaymentButton from "./CoursePaymentButton";
import sujal from "./images/sujal.jpg";
import sanjana from "./images/sanjana.jpg";
import mahesh from "./images/mahesh.jpg";
import varun from "./images/varun.jpg";
import CourseCard from "../features/courses/CourseCard";
import CoursePageLayout, { CourseIndex, InfoCard } from "../features/courses/CoursePageLayout";

const formattedDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const imageArray = [
  {
    id: 1,
    url: sujal,
    name: "Sujal",
  },
  {
    id: 2,
    url: varun,
    name: "Varun",
  },
  {
    id: 3,
    url: sanjana,
    name: "Sanjana",
  },
  {
    id: 4,
    url: mahesh,
    name: "Mahesh",
  },

  {
    id: 5,
    url: "https://i.ibb.co/D80qdsp/an-image-with-a-single-color-background-and-15-written-in-the-center-covering-70-percent-o.png",
    name: "15+ Already Enrolled",
  },
  // Add more image objects as needed
];
const qrCodeImage = "https://i.ibb.co/SmYWhFq/20240617-193344-removebg-preview.png";

const STUDENT_BENEFITS = [
  {
    title: "Accessible trainers",
    text: "Quick access to trainers for clarifying doubts and understanding complex topics.",
  },
  {
    title: "Experienced faculty",
    text: "Experienced and helpful faculty members dedicated to student success.",
  },
];

const StockCoursesPage = () => {
  const courses = [
    {
      title: "Course 1: Introduction to Stock Market",
      description: "Learn the basics of Stock Market investing.",
      duration: "3 weeks",
      price: "₹ 3999",
      discountPercentage: 5,
      instructor: "Ajinkya Sir",
      enrollments: "12+",

      instructorImage: "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
      isTopSelling: true,
      isTopTrending: false,
      image: "https://cdn.pixabay.com/photo/2024/01/06/02/44/ai-generated-8490532_640.png",
      rating: "4.5",
      reviews: 120,
      syllabus: [
        {
          title: "Module 1: Overview of the Stock Market",
          description: "Introduction to the stock market, its functions, and key players.",
          topics: ["Stock exchanges", "Market participants", "Types of stocks"],
        },
        {
          title: "Module 2: Key Players and Instruments",
          description: "Learn about the major players in the stock market and various trading instruments.",
          topics: ["Investors and traders", "Brokers and dealers", "Derivatives"],
        },
        {
          title: "Module 3: How to Buy and Sell Stocks",
          description: "Understand the process of buying and selling stocks.",
          topics: ["Placing orders", "Order types", "Transaction costs"],
        },
        {
          title: "Module 4: Understanding Stock Basics",
          description: "Learn the fundamental concepts of stocks and their characteristics.",
          topics: ["Stock valuation", "Dividends", "Stock splits"],
        },
        {
          title: "Module 5: Introduction to Stock Analysis",
          description: "An introduction to stock analysis techniques.",
          topics: ["Fundamental analysis", "Technical analysis", "Sentiment analysis"],
        },
        {
          title: "Module 6: Risks and Rewards",
          description: "Understand the risks and rewards associated with stock market investing.",
          topics: ["Market risk", "Credit risk", "Risk management"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      QrImage: qrCodeImage,
    },
    {
      title: "Course 2: Advanced Stock Market Strategies",
      description: "Master advanced strategies in stock market trading.",
      duration: "4 weeks",
      price: "₹ 4999",
      discountPercentage: 5,
      enrollments: "20+",
      instructor: "Ajinkya Sir",
      instructorImage: "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
      isTopSelling: false,
      isTopTrending: true,
      image:
        "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user",
      rating: "4.8",
      reviews: 90,
      syllabus: [
        {
          title: "Module 1: Technical Analysis",
          description: "Learn about the various tools and techniques used in technical analysis.",
          topics: ["Charts and patterns", "Indicators and oscillators", "Trend analysis"],
        },
        {
          title: "Module 2: Fundamental Analysis",
          description: "Understand the principles of fundamental analysis.",
          topics: ["Financial statements", "Valuation methods", "Economic indicators"],
        },
        {
          title: "Module 3: Risk Management",
          description: "Learn how to manage and mitigate risks in trading.",
          topics: ["Position sizing", "Stop-loss orders", "Diversification"],
        },
        {
          title: "Module 4: Trading Psychology",
          description: "Understand the psychological aspects of trading.",
          topics: ["Emotional control", "Discipline", "Cognitive biases"],
        },
        {
          title: "Module 5: Strategy Development",
          description: "Learn how to develop and test trading strategies.",
          topics: ["Backtesting", "Forward testing", "Strategy optimization"],
        },
        {
          title: "Module 6: Live Trading Sessions",
          description: "Participate in live trading sessions to apply the learned concepts.",
          topics: ["Real-time market analysis", "Trade execution", "Performance review"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      QrImage: qrCodeImage,
    },
    {
      title: "Course 3: Advanced Futures and Options Strategies",
      description: "Master advanced strategies in futures and options trading.",
      duration: "6 weeks",
      price: "₹ 5999",
      discountPercentage: 5,
      enrollments: "30+",
      instructor: "Ajinkya Sir",
      instructorImage: "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
      isTopSelling: true,
      isTopTrending: false,
      image:
        "https://tradebrains.in/wp-content/uploads/2020/01/Option-Trading-101-Call-Put-Options-cover.jpg",
      rating: "4.9",
      reviews: 85,
      syllabus: [
        {
          title: "Module 1: Introduction to Futures and Options",
          description: "Learn the basics of futures and options markets.",
          topics: ["Futures contracts", "Options contracts", "Market participants"],
        },
        {
          title: "Module 2: Futures and Options Pricing",
          description: "Understand how futures and options are priced.",
          topics: ["Pricing models", "Factors affecting prices", "Volatility"],
        },
        {
          title: "Module 3: Hedging Strategies",
          description: "Learn how to use futures and options for hedging.",
          topics: ["Hedging with futures", "Hedging with options", "Risk management"],
        },
        {
          title: "Module 4: Speculation and Arbitrage",
          description: "Explore speculative trading and arbitrage opportunities.",
          topics: ["Speculative strategies", "Arbitrage techniques", "Market inefficiencies"],
        },
        {
          title: "Module 5: Advanced Option Strategies",
          description: "Master complex options strategies.",
          topics: ["Spread strategies", "Combination strategies", "Risk and reward"],
        },
        {
          title: "Module 6: Futures Spread Trading",
          description: "Learn about trading futures spreads.",
          topics: ["Intra-market spreads", "Inter-market spreads", "Calendar spreads"],
        },
        {
          title: "Module 7: Risk Management Techniques",
          description: "Essential risk management techniques for futures and options traders.",
          topics: ["Identifying risks", "Mitigating risks", "Diversification"],
        },
        {
          title: "Module 8: Live Trading Sessions",
          description: "Hands-on experience through live trading sessions.",
          topics: ["Setting up a trading account", "Executing trades", "Analyzing market conditions"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      QrImage: qrCodeImage,
    },
    {
      title: "Course 4: Complete Stock Market Guide",
      description: "Learn From Basic to Advanced",
      duration: "6 weeks",
      price: "₹ 14999",
      discountPercentage: 5,
      enrollments: "20+",
      instructor: "Ajinkya Sir",
      instructorImage: "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
      isTopSelling: true,
      isTopTrending: false,
      image:
        "https://thedailyguardian.com/wp-content/uploads/2024/05/360_F_568852772_P4EmbKP8YPargzsPzNQAxUR1JIHFhMlt.jpg",
      rating: "4.7",
      reviews: 109,
      syllabus: [
        {
          title: "Module 1: Stocks and Stock Market Basics",
          description: "Learn about stock Fundamentals",
          topics: [
            "Introduction",
            "Risk Disclaimer",
            "What is Stock",
            "Stock Market and Stock Market Participants",
            "Understanding Primary Market",
            "Understanding FPO & IPO",
            "Secondary Market ",
            "Who sets the price of Stock",
            "How an IPO is Priced",
            "Stock Market Basic Quiz",
            "Stock Market Basic Exercise",
          ],
        },
        {
          title: "Module 2: Stock Exchanges,Financial Intermediaries & Stock Index",
          description: "Understand the principles of finance and Exchanges",
          topics: [
            "Stock Exchanges",
            "Financial Intermediaries in stock Trading",
            "Securities",
            "Stock Index",
            "Stock Exchange Quiz",
          ],
        },
        {
          title: "Module 3: Queries on Stock market Trading",
          description: "Stock trading market data",
          topics: [
            "How can I start trading in the stock market",
            "Bid Price & Offer Price",
            "Market Order & Limit Order",
            "Stop Loss Order Combinations",
            "Stock Market Trading Quiz",
            "Understanding practical trade execution options provided by brokers",
            "Options to execute trade",
            "How do I select a stock broker",
            "What is Algorithmic Trading & Should I be doing it.",
            "How much money should you invest in the stock market",
            "Stock Market Trading Quiz 2",
            "Should I trade using Futures & Options",
            "What is a Futures Contract",
            "What is an Options Contract",
            "Futures & Options Quiz",
            "Where do I find good stock",
            "Mutual Funds",
            "Understanding Corporate Actions",
            "Important Dates associated with corporate actions",
            "Stock Market Trading Quiz 3",
          ],
        },
        {
          title: "Module 4: Understanding Financial Statements",
          description: "Finance of a company",
          topics: [
            "Financial Analysis of a Company",
            "Understanding Balance Sheet & Current Assets & Current Liabiliites",
            "Understanding Balance Sheet Components: Equity",
            "Balance Sheet Quiz",
            "Understanding Profit and Loss Statement",
            "Income Statement Quiz",
            "Understanding Statement of Changes in Equity",
            "Understanding Cash Flow Statement",
            "Note on Direct Method of Cash Flow Reporting",
            "Understanding Financial Notes & Supplementary Schedules",
          ],
        },
        {
          title: "Module 5: Common Size Analysis of Financial Statement",
          description: "Learn how to develop and test trading strategies.",
          topics: [
            "Common Size Analysis of Balance Sheet",
            "Common Size Analysis of Income Statement",
            "Common Size Analysis of Cash Flow Statement",
            "Common Size Analysis Quiz",
          ],
        },
        {
          title: "Module 6: Financial Ratio Analysis",
          description: "Understanding Financial Ratios",
          topics: [
            "Real-time market analysis",
            "Introduction to Activity Ratios",
            "Liquidity Ratios",
            "Solvency Ratios",
            "Profitability Ratios",
            "Valuation Ratios",
          ],
        },
        {
          title: "Module 7: Benjamin Graham's Value investing Strategy",
          description: "Participate in live trading sessions to apply the learned concepts.",
          topics: ["Real-time market analysis", "Trade execution", "Performance review"],
        },
        {
          title: "Module 8: Benjamin Graham's Value investing Strategy",
          description: "Participate in live trading sessions to apply the learned concepts.",
          topics: [
            "Benjamin Graham's Recommendation on Stock Selection",
            "Benjamin Graham's Quantitative Criteria for Stock Selection",
            "Graham's Number & Thoughts on Intrinsic Value",
          ],
        },
        {
          title: "Module 9: Introduction to Technical Analysis",
          description: "Technical Analysis concepts.",
          topics: [
            "What is Technical Analysis",
            "Principles & Assumptions Behind Technical Analysis",
            "Technical Analysis V/S Fundamental Analysis",
            "Introduction to Technical Analysis Quiz",
          ],
        },
        {
          title: "Module 10: Introduction to Charts",
          description: "Technical Charts",
          topics: [
            "Introduction to Candlesticks Chart",
            "Charting Considerations",
            "Introduction to Charting Quiz",
          ],
        },
        {
          title: "Module 12: Reversal Pattern",
          description: "Trend Reversal Candlesticks Pattern",
          topics: [
            "Engulfing Patterns",
            "Dark Cloud Cover",
            "Piercing Line Pattern",
            "Morning Star & Evening Star",
          ],
        },
        {
          title: "Module 13: Candlesticks Continuation Patterns",
          description: "Participate in live trading sessions to apply the learned concepts.",
          topics: [
            "Rising Threes & Falling Threes Pattern",
            "Three White Soldiers",
            "Candlestick Patterns Quiz",
            "Umbrella Candlestick Patterns",
            "Tweezer Candlestick Patterns",
          ],
        },
        {
          title: "Module 14: Gap Formation",
          description: "Gap up and Gap Down Opening",
          topics: [
            "Introduction to Gaps",
            "Gaps that dont matter",
            "Gaps that dont matter",
            "Significant gapup or gapdown",
          ],
        },

        {
          title: "Module 15: Support & Resistance",
          description: "Basics of Support and Resistance",
          topics: [
            "Estimating strength of Support or Resistance",
            "Real Life Example of Support at Work",
            "Support and Resistance Quiz",
          ],
        },
        {
          title: "Module 16: What are Technical Indicators?",
          description: "Indicators",
          topics: [
            "Moving Averages",
            "Simple Moving Average",
            "Exponential Moving Average",
            "Weighted Moving Average",
            "Bollinger Bands",
            "Introduction to Oscillators",
            "Momentum Oscillators",
            "Relative Strength Indicator",
            "Stochastic Oscillator",
            "MACD",
          ],
        },
        {
          title: "Module 17: Trading Timeframe Analysis",
          description: "Higher and Lower Time Frame Analysis",
          topics: [
            "Great Trading Pattern",
            "Trade Setup Application to Emerging Markets Index",
            "Price Action with price movement",
          ],
        },
        {
          title: "Module 18: Sectoral Analysis & Fibonacci",
          description: "Sectoral Indices",
          topics: [
            "How to know which sector or industry will outperform in the market",
            "Trading using Fibonacci Ratios",
            "Types of FibonacciAnalysis",
            "Which Fibonacci price level is important",
            "Applying retracements and Projections on charting platform",
          ],
        },
        {
          title: "Module 19: Live Trading Sessions",
          description: "Hands-on experience through live trading sessions.",
          topics: [
            "Setting up a trading account Session-1",
            "Executing trades",
            "Analyzing market conditions",
          ],
        },
        {
          title: "Module 20: Introduction to Options",
          description: "whats are Options ",
          topics: ["Defining Options", "Option Terminologies", "Advance Option Trading"],
        },
        {
          title: "Module 21: Option Strategies",
          description: "whats are Options ",
          topics: [
            "Buying a Call Option",
            "Buying a Call Option v/s Buying a Stock",
            "Buying a Put Option",
            "Buying a Put Option & Protective Put",
            "Writing a Call Option",
            "Covered Call",
            "Writing a Put Option",
          ],
        },
        {
          title: "Module 21: Option Greeks",
          description: "whats are Options ",
          topics: [
            "What drives Option Prices",
            "Understanding Options Greek: Delta",
            "Factors that affect Delta",
            "Factors that affect Gamma",
            "Understanding Options Greek: Theta",
            "Covered Call",
            "Understanding Options Greek: Vega",
            "Factors that affect Vega",
            "Understanding Options Greek: Rho & Put Call Parity",
          ],
        },
        {
          title: "Module 22: Bonus Section",
          description: "whats are Options ",
          topics: ["Should you average down", "More Resources for success in the stock market"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      QrImage: qrCodeImage,
    },
  ];

  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (courseIndex, moduleIndex) => {
    setExpandedModules((prev) => ({
      ...prev,
      [courseIndex]: {
        ...prev[courseIndex],
        [moduleIndex]: !prev[courseIndex]?.[moduleIndex],
      },
    }));
  };
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const stockBatchStart = `${month} ${day}, ${year}`;

  const avatars = imageArray.filter((a) => !/^https?:/.test(a.url ?? "")).map((a) => a.url);

  // Map this page's course data onto the shared CourseCard shape.
  const toCard = (course) => ({
    title: course.title,
    description: course.description,
    image: course.image,
    price: course.price,
    discountPercentage: course.discountPercentage,
    rating: course.rating,
    reviews: course.reviews,
    enrollments: course.enrollments,
    enrolledAvatars: avatars,
    isTopSelling: course.isTopSelling,
    isTopTrending: course.isTopTrending,
    instructor: { name: course.instructor, image: course.instructorImage },
    facts: [
      { icon: CalendarDaysIcon, label: "Starts on", value: formattedDate },
      { icon: ClockIcon, label: "Duration", value: course.duration },
      { icon: ComputerDesktopIcon, label: "Mode of learning", value: "Offline & online" },
      { icon: SunIcon, label: "Offline batch", value: "3:00 – 4:00 pm" },
      { icon: MoonIcon, label: "Online batch", value: "9:30 – 10:30 pm" },
      { icon: ArrowPathIcon, label: "Last updated", value: "2 days ago" },
    ],
    syllabus: course.syllabus,
    howToJoin: course.howToUse,
    qrImage: course.QrImage,
  });

  return (
    <CoursePageLayout
      eyebrow="Stock market"
      title="Stock market courses"
      description="From your first trade to options strategies — structured modules, live batches and mentor support."
      actions={<Drawer courseType="Stock Market" batchStartInfo={stockBatchStart} />}
      aside={
        <>
          <CourseIndex courses={courses} />
          <InfoCard title="Benefits for students" points={STUDENT_BENEFITS} />
          <InfoCard title="Why take a stock trading course?">
            <p>
              Investing in the stock market is volatile, with many novices facing initial losses. Stock
              trading courses for beginners offer structured learning, expert insights and practical sessions
              — helping you avoid common mistakes, build a strong foundation and increase your chances of
              success.
            </p>
          </InfoCard>
          <InfoCard title="Why investing matters">
            <p>
              Investing is crucial for financial growth and stability. It lets you build wealth, beat
              inflation and reach long-term goals like retirement. Investing wisely multiplies your savings
              and secures your financial future.
            </p>
          </InfoCard>
          <InfoCard title="Why choose us">
            <p>
              We believe our success is tied to yours, so we never compromise on helping you grow. Our team
              has the experience, skills and latest tools to meet your needs effectively.
            </p>
          </InfoCard>
          <InfoCard title="Our vision">
            <p>
              To be recognised as a leader in guiding learners through ever-changing financial markets —
              valued for student satisfaction, exceptional service, accessibility, professionalism and
              in-depth analysis.
            </p>
          </InfoCard>
        </>
      }
      after={
        <>
          <LearnerReview averageRating={4.5} totalReviews={104} />
          <WhatLearn />
          <WhyTakeThisCourse />
          <WhoThisCourseIsFor />
          <ReviewsComponent />
          <StockInfo />
        </>
      }
    >
      {courses.map((course, index) => (
        <div key={course.title} id={`course-${index + 1}`} className="scroll-mt-24">
          <CourseCard
            course={toCard(course)}
            isModuleOpen={(m) => expandedModules[index]?.[m]}
            onToggleModule={(m) => toggleModule(index, m)}
            paymentButton={<CoursePaymentButton />}
          />
        </div>
      ))}
    </CoursePageLayout>
  );
};

export default StockCoursesPage;
