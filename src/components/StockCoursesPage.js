import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import { BsBook } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import {
  MdDescription,
  MdOutlineLibraryBooks,
  MdInfoOutline,
} from "react-icons/md";

const Sidebar = ({ courses }) => {
  return (
    <div className="hidden sm:block w-full sm:w-1/4 pt-20 p-4 rounded-lg sticky top-0">
      <h2 className="text-xl font-bold text-yellow-300 mb-4">Other Courses</h2>
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li key={index} className="bg-gray-700 p-3 rounded-lg">
            <h3 className="text-lg text-yellow-300">{course.title}</h3>
            <p className="text-sm text-gray-400">{course.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const StockCoursesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const courses = [
    {
      title: "Course 1: Introduction to Stock Market",
      description: "Learn the basics of Stock Market investing.",
      duration: "6 weeks",
      price: "₹ 3999",
      instructor: "Ajinkya Sir",
      image:
        "https://cdn.pixabay.com/photo/2024/01/06/02/44/ai-generated-8490532_640.png",
      rating: "4.5",
      reviews: 120,
      syllabus: [
        {
          title: "Module 1: Overview of the Stock Market",
          description:
            "Introduction to the stock market, its functions, and key players.",
          topics: ["Stock exchanges", "Market participants", "Types of stocks"],
        },
        {
          title: "Module 2: Key Players and Instruments",
          description:
            "Learn about the major players in the stock market and various trading instruments.",
          topics: [
            "Investors and traders",
            "Brokers and dealers",
            "Derivatives",
          ],
        },
        {
          title: "Module 3: How to Buy and Sell Stocks",
          description: "Understand the process of buying and selling stocks.",
          topics: ["Placing orders", "Order types", "Transaction costs"],
        },
        {
          title: "Module 4: Understanding Stock Basics",
          description:
            "Learn the fundamental concepts of stocks and their characteristics.",
          topics: ["Stock valuation", "Dividends", "Stock splits"],
        },
        {
          title: "Module 5: Introduction to Stock Analysis",
          description: "An introduction to stock analysis techniques.",
          topics: [
            "Fundamental analysis",
            "Technical analysis",
            "Sentiment analysis",
          ],
        },
        {
          title: "Module 6: Risks and Rewards",
          description:
            "Understand the risks and rewards associated with stock market investing.",
          topics: ["Market risk", "Credit risk", "Risk management"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
    },
    {
      title: "Course 2: Advanced Stock Market Strategies",
      description: "Master advanced strategies in stock market trading.",
      duration: "8 weeks",
      price: "₹ 4999",
      instructor: "Ajinkya Sir",
      image:
        "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user",
      rating: "4.8",
      reviews: 90,
      syllabus: [
        {
          title: "Module 1: Technical Analysis",
          description:
            "Learn about the various tools and techniques used in technical analysis.",
          topics: [
            "Charts and patterns",
            "Indicators and oscillators",
            "Trend analysis",
          ],
        },
        {
          title: "Module 2: Fundamental Analysis",
          description: "Understand the principles of fundamental analysis.",
          topics: [
            "Financial statements",
            "Valuation methods",
            "Economic indicators",
          ],
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
          description:
            "Participate in live trading sessions to apply the learned concepts.",
          topics: [
            "Real-time market analysis",
            "Trade execution",
            "Performance review",
          ],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
    },
    {
      title: "Course 3: Advanced Futures and Options Strategies",
      description: "Master advanced strategies in futures and options trading.",
      duration: "10 weeks",
      price: "₹ 5999",
      instructor: "Ajinkya Sir",
      image:
        "https://t3.ftcdn.net/jpg/03/12/92/74/360_F_312927435_NVvwOxvswQgNu97Y1m8VvtEPTVL9AnEN.jpg",
      rating: "4.9",
      reviews: 85,
      syllabus: [
        {
          title: "Module 1: Introduction to Futures and Options",
          description: "Learn the basics of futures and options markets.",
          topics: [
            "Futures contracts",
            "Options contracts",
            "Market participants",
          ],
        },
        {
          title: "Module 2: Futures and Options Pricing",
          description: "Understand how futures and options are priced.",
          topics: ["Pricing models", "Factors affecting prices", "Volatility"],
        },
        {
          title: "Module 3: Hedging Strategies",
          description: "Learn how to use futures and options for hedging.",
          topics: [
            "Hedging with futures",
            "Hedging with options",
            "Risk management",
          ],
        },
        {
          title: "Module 4: Speculation and Arbitrage",
          description:
            "Explore speculative trading and arbitrage opportunities.",
          topics: [
            "Speculative strategies",
            "Arbitrage techniques",
            "Market inefficiencies",
          ],
        },
        {
          title: "Module 5: Advanced Option Strategies",
          description: "Master complex options strategies.",
          topics: [
            "Spread strategies",
            "Combination strategies",
            "Risk and reward",
          ],
        },
        {
          title: "Module 6: Futures Spread Trading",
          description: "Learn about trading futures spreads.",
          topics: [
            "Intra-market spreads",
            "Inter-market spreads",
            "Calendar spreads",
          ],
        },
        {
          title: "Module 7: Risk Management Techniques",
          description:
            "Essential risk management techniques for futures and options traders.",
          topics: ["Identifying risks", "Mitigating risks", "Diversification"],
        },
        {
          title: "Module 8: Live Trading Sessions",
          description: "Hands-on experience through live trading sessions.",
          topics: [
            "Setting up a trading account",
            "Executing trades",
            "Analyzing market conditions",
          ],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">
          Stock Market Courses
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 mb-6 rounded-lg shadow-lg"
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="rounded-lg w-full h-auto mb-4 md:mb-0"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <h2 className="text-2xl font-bold mb-4 text-yellow-300">
                        {course.title}
                      </h2>
                      <p className="text-gray-400 mb-2">
                        <MdDescription className="inline-block mr-2 text-yellow-300" />
                        {course.description}
                      </p>
                      <p className="text-gray-400 mb-2">
                        <BsBook className="inline-block mr-2 text-yellow-300" />
                        Duration: {course.duration}
                      </p>
                      <p className="text-gray-400 mb-2">
                        <FaStar className="inline-block mr-2 text-yellow-300" />
                        Rating: {course.rating} ({course.reviews} reviews)
                      </p>
                      <p className="text-gray-400 mb-2">
                        <MdOutlineLibraryBooks className="inline-block mr-2 text-yellow-300" />
                        Instructor: {course.instructor}
                      </p>
                      <p className="text-gray-400 mb-4">
                        <MdInfoOutline className="inline-block mr-2 text-yellow-300" />
                        Price: {course.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Tabs>
                      <TabList>
                        <Tab>Course Content</Tab>
                        <Tab>How to Use</Tab>
                      </TabList>
                      <TabPanel>
                        {course.syllabus.map((module, moduleIndex) => (
                          <motion.div
                            key={moduleIndex}
                            className="bg-gray-700 p-4 mb-4 rounded-lg"
                            variants={tabVariants}
                          >
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggleModule(index, moduleIndex)}
                            >
                              <h3 className="text-lg font-bold text-yellow-300">
                                {module.title}
                              </h3>
                              <span className="text-yellow-300">
                                {expandedModules[index]?.[moduleIndex] ? (
                                  <BiChevronUp
                                    className="text-yellow-300"
                                    size={30}
                                  />
                                ) : (
                                  <BiChevronDown
                                    className="text-yellow-300"
                                    size={30}
                                  />
                                )}
                              </span>
                            </div>
                            {expandedModules[index]?.[moduleIndex] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                  transition: { duration: 0.5 },
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                  transition: { duration: 0.5 },
                                }}
                                className="mt-2"
                              >
                                <p className="text-gray-400 mb-2">
                                  {module.description}
                                </p>
                                <ul className="list-disc list-inside text-gray-400">
                                  {module.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex}>{topic}</li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </TabPanel>
                      <TabPanel>
                        <p className="text-gray-400">{course.howToUse}</p>
                      </TabPanel>
                    </Tabs>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <Sidebar courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default StockCoursesPage;
