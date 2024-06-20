import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import { BsBook } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BiBook, BiCheckCircle, BiCreditCard } from "react-icons/bi";
import { MdPerson } from "react-icons/md"; // Assuming MdPerson is your instructor icon

import "react-tabs/style/react-tabs.css";

import { MdDescription, MdInfoOutline } from "react-icons/md";
import Drawer from "./Drawer";
import StockSidebar from "./StockSidebar";
import LearnerReview from "./LearnerReview";
const qrCodeImage =
  "https://i.ibb.co/SmYWhFq/20240617-193344-removebg-preview.png";
const Sidebar = ({ courses }) => {
  return (
    <div className="hidden sm:block w-full sm:w-1/4 pt-0 p-4 rounded-lg sticky top-0">
      <h2 className="text-xl p-2 bg-blue-900 font-bold text-center text-yellow-300 mb-4">
        Other Courses
      </h2>
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li
            key={index}
            className="bg-gray-700 p-3 rounded-lg flex items-center"
          >
            <div>
              <h3 className="text-lg text-yellow-300">{course.title}</h3>
              <div className="flex gap-2 items-center">
                <img
                  className="h-12 w-12 rounded-full mr-3"
                  src={course.instructorImage}
                  alt={course.instructor}
                />
                <p className="text-sm text-gray-400">{course.instructor}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div className="mt-2 p-8 bg-blue-900">
          <img
            className="rounded-lg "
            src="https://www.sharegurukul.com/wp-content/uploads/2019/05/Stock-Trading-Courses.jpg "
            alt=""
          />
          <h2 className="block mt-3   text-white">
            The Benefits of Stock Trading Courses
          </h2>
          <p className="mt-2 text-gray-300">
            Investing in the stock market is volatile, with many novices facing
            initial losses. However, stock trading courses for beginners offer
            structured learning, expert insights, and practical sessions. These
            courses help you avoid common mistakes, build a strong foundation,
            and increase your chances of success in the market.
          </p>
        </div>
      </div>
      {/* benefits Div */}
      <div className="max-w-lg mx-auto mt-2 p-6 bg-blue-900 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Benefits for Students
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-white">Accessible Trainers:</h3>
              <p className="text-gray-300">
                Quick access to trainers for clarifying doubts and understanding
                complex topics.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-white">Experienced Faculty:</h3>
              <p className="text-gray-300">
                Experienced and helpful faculty members dedicated to student
                success.
              </p>
            </div>
          </li>
          {/* Add more list items for other benefits */}
        </ul>
      </div>
      {/* investing is crucial */}
      <div className="flex flex-col items-center justify-center mt-2 bg-blue-900  rounded-lg shadow-lg">
        <img
          src="https://cdn.corporatefinanceinstitute.com/assets/income-investing-1024x576.jpeg"
          alt=""
          className="w-64 h-64 p-2 object-contain"
        />
        <p className=" text-white p-4">
          Investing is crucial for financial growth and stability. It allows one
          to build wealth, beat inflation, and achieve long-term goals like
          retirement. By investing wisely, individuals can multiply their
          savings and create a secure financial future. It's a key strategy for
          anyone looking to secure their financial well-being.
        </p>
      </div>
      {/* why Choose us */}
      <div className="p-4 bg-blue-900 shadow-md rounded-lg mt-2">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
        <img
          src="https://www.micronicsindia.com/wp-content/uploads/2021/01/Our-Vision-1.jpg"
          alt=""
          className="rounded-lg "
        />
        <p className="text-White pt-2">
          We believe our success is tied to your success, so we never compromise
          on helping you grow. Our team has the experience, skills, and latest
          tools to meet your needs effectively and positively.
        </p>
      </div>
      {/* Our Vision */}
      <div className="p-4 bg-blue-900  shadow-lg rounded-lg  md:flex-row items-center mt-2">
        <div className="flex justify-center items-center">
          <img
            src="https://www.climaxoverseas.com/wp-content/uploads/2023/03/vision.jpg"
            alt="Our Vision"
            className="w-64 h-auto  rounded-lg object-cover m-7"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-white">
            We aim to be recognized as a leader in guiding our clients to
            success in the ever-changing financial markets. Our goal is to be
            valued for client satisfaction, exceptional service, financial
            strength, and profitability. We continuously strive to enhance our
            reputation for accessibility, professionalism, in-depth analysis,
            and the quality of our long-term consultative relationships with our
            clients.
          </p>
        </div>
      </div>
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
      instructorImage:
        "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
      isTopSelling: true,
      isTopTrending: false,
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
      QrImage: qrCodeImage,
    },
    {
      title: "Course 2: Advanced Stock Market Strategies",
      description: "Master advanced strategies in stock market trading.",
      duration: "8 weeks",
      price: "₹ 4999",
      instructor: "Ajinkya Sir",
      instructorImage:
        "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
      isTopSelling: false,
      isTopTrending: true,
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
      QrImage: qrCodeImage,
    },
    {
      title: "Course 3: Advanced Futures and Options Strategies",
      description: "Master advanced strategies in futures and options trading.",
      duration: "10 weeks",
      price: "₹ 5999",
      instructor: "Ajinkya Sir",
      instructorImage:
        "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
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
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Div 1 visible on desktop, hidden on mobile */}
        <div className="hidden lg:block w-1/3 h-full overflow-y-scroll bg-gray-200 hide-scrollbar">
          {/*------Content for the first scrollable div1----------- */}
          <LearnerReview averageRating={4.5} totalReviews={104} />
          
        </div>
        <div className="w-full lg:w-2/3 h-full overflow-y-scroll bg-gray-300 hide-scrollbar">
          {/*------- Content for the second scrollable div------ courses div---------- */}
          <div className="min-h-screen bg-gray-900 text-white ">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8 mt-4 text-center text-yellow-300 sm:text-left sm:flex sm:items-center sm:justify-center">
                  <Drawer
                    courseType="Stock Market"
                    batchStartInfo={stockBatchStart}
                  />
                  <span className="sm:ml-4 mt-10 sm:mt-0 ">
                    <div className="pt-5"></div>Stock Market Courses
                  </span>
                </h1>
              </div>

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
                        <div className="flex flex-col md:flex-row items-center rounded-lg   relative">
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
                            <p className="text-gray-400 mb-2 flex items-center">
                              <MdDescription className="inline-block mr-2 text-yellow-300" />
                              {course.description}
                            </p>
                            <p className="text-gray-400 mb-2 flex items-center">
                              <BsBook className="inline-block mr-2 text-yellow-300" />
                              Duration: {course.duration}
                            </p>
                            <p className="text-gray-400 mb-2 flex items-center">
                              <FaStar className="inline-block mr-2 text-yellow-300" />
                              Rating: {course.rating} ({course.reviews} reviews)
                            </p>
                            <div className="flex items-center mb-2">
                              <span className="text-gray-400 mr-2">
                                <MdPerson className="inline-block mr-1 text-yellow-300" />
                                Instructor:
                              </span>
                              <div className="flex items-center">
                                <img
                                  src={course.instructorImage}
                                  alt={course.instructor}
                                  className="rounded-full w-8 h-8 mr-2"
                                />
                                <span>{course.instructor}</span>
                              </div>
                            </div>
                            <p className="text-gray-400 mb-4 flex items-center">
                              <MdInfoOutline className="inline-block mr-2 text-yellow-300" />
                              Price: {course.price}
                            </p>
                            <div className="flex justify-start gap-2">
                              <button className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300">
                                Enroll Now
                              </button>
                              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
                                Add to Cart
                              </button>
                            </div>
                            {course.isTopSelling && (
                              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg z-50">
                                Top Selling
                              </div>
                            )}
                            {course.isTopTrending && (
                              <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 rounded-tl-lg rounded-br-lg z-50">
                                Top Trending
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-4">
                          <Tabs>
                            <TabList className="flex sm:flex-col gap-4 sm:mb-4 flex-wrap md:flex-row cursor-pointer">
                              <Tab className="focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center p-2 transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900">
                                <BiBook className="text-blue-500 text-lg" />
                                <span className="ml-4 mr-2">
                                  Course Content
                                </span>
                              </Tab>
                              <Tab className="focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center p-2 transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900">
                                <BiCheckCircle className="text-green-500 text-lg" />
                                <span className="ml-4 mr-2">How to Use</span>
                              </Tab>
                              <Tab className="focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center p-2 transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900">
                                <BiCreditCard className="text-yellow-500 text-lg" />
                                <span className="ml-4 mr-2">Pay Online</span>
                              </Tab>
                            </TabList>

                            <TabPanel className={"mt-4"}>
                              {course.syllabus.map((module, moduleIndex) => (
                                <motion.div
                                  key={moduleIndex}
                                  className="bg-gray-700 p-4 mb-4 rounded-lg "
                                  variants={tabVariants}
                                >
                                  <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() =>
                                      toggleModule(index, moduleIndex)
                                    }
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
                                        {module.topics.map(
                                          (topic, topicIndex) => (
                                            <li key={topicIndex}>{topic}</li>
                                          )
                                        )}
                                      </ul>
                                    </motion.div>
                                  )}
                                </motion.div>
                              ))}
                            </TabPanel>
                            <TabPanel>
                              <p className="text-gray-400">{course.howToUse}</p>
                            </TabPanel>

                            <TabPanel className={"bg-yellow-100"}>
                              <div className="flex flex-col items-center p-4 rounded-lg shadow-md border border-gray-300 ">
                                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex justify-center items-center mb-2 relative overflow-hidden shadow-lg">
                                  <img
                                    src={course.QrImage}
                                    alt={`QR for ${course.title}`}
                                    className="w-40 h-40 object-cover rounded-lg z-10"
                                  />
                                  <motion.div
                                    className="absolute top-0 left-0 w-full h-full bg-white"
                                    animate={{
                                      y: ["-100%", "100%"],
                                      transition: {
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "linear",
                                      },
                                    }}
                                  />
                                </div>
                                <p className="text-lg text-gray-700 font-semibold">
                                  Scan this QR Code to Pay Online
                                </p>
                                <div className="py-2">
                                  <div className="flex space-x-1">
                                    <img
                                      src="https://i.pinimg.com/originals/60/5a/bd/605abdb7af3405c6b20a426b1e128322.png"
                                      alt="Icon 1"
                                      className="h-10 w-10 object-contain"
                                    />
                                    <img
                                      src="https://m.media-amazon.com/images/G/01/amazonpayments/documentation/AmazonPay_BrandAssets/Logos/amazonpay-secondary-logo-rgb_clr.png"
                                      alt="Icon 2"
                                      className="h-10 w-10 object-contain"
                                    />
                                    <img
                                      src="https://cdn.iconscout.com/icon/free/png-256/free-bhim-3-69845.png"
                                      alt="Icon 3"
                                      className="h-10 w-10 object-contain"
                                    />
                                    <img
                                      src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg"
                                      alt="Icon 4"
                                      className="h-10 w-10 object-contain"
                                    />
                                    <img
                                      src="https://cdn.freelogovectors.net/wp-content/uploads/2023/11/phonepelogo-freelogovectors.net_.png"
                                      alt="Icon 5"
                                      className="h-10 w-10 object-contain"
                                    />
                                  </div>
                                </div>
                                <p className="text-sm text-gray-500">
                                  Use your mobile device's QR scanner to
                                  complete the payment process.
                                </p>
                              </div>
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
        </div>
      </div>
    </>
  );
};

export default StockCoursesPage;
