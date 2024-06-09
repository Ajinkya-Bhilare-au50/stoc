import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";

// Animation Variants
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

const StockCoursesPage = () => {
  return (
    <motion.div
      className="bg-yellow-50 min-h-screen py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-yellow-800"
          variants={itemVariants}
        >
          Stock Courses
        </motion.h1>
        <div className="space-y-8">
          {[
            {
              title: "Course 1: Introduction to Stock Market",
              description: "Learn the basics of stock market investing.",
              duration: "6 weeks",
              price: "$99",
              syllabus: [
                "Module 1: Overview of the Stock Market",
                "Module 2: Key Players and Instruments",
                "Module 3: How to Buy and Sell Stocks",
                "Module 4: Understanding Stock Quotes",
                "Module 5: Introduction to Stock Analysis",
                "Module 6: Risks and Rewards",
              ],
              howToUse:
                "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
            },
            {
              title: "Course 2: Advanced Stock Trading Strategies",
              description: "Master the techniques of professional traders.",
              duration: "8 weeks",
              price: "$149",
              syllabus: [
                "Module 1: Introduction to Trading Strategies",
                "Module 2: Technical Analysis Techniques",
                "Module 3: Fundamental Analysis Techniques",
                "Module 4: Risk Management Strategies",
                "Module 5: Trading Psychology",
                "Module 6: Developing a Trading Plan",
                "Module 7: Backtesting Strategies",
                "Module 8: Live Trading Sessions",
              ],
              howToUse:
                "This course is designed for advanced learners. Access the course through our platform, where you will find video lectures, advanced reading materials, and practical trading exercises. Participate in live trading sessions and get feedback from experts.",
            },
            {
              title: "Course 3: Technical Analysis",
              description: "Learn how to analyze stock charts and indicators.",
              duration: "5 weeks",
              price: "$79",
              syllabus: [
                "Module 1: Introduction to Technical Analysis",
                "Module 2: Chart Patterns",
                "Module 3: Candlestick Patterns",
                "Module 4: Technical Indicators",
                "Module 5: Trend Analysis",
              ],
              howToUse:
                "Gain access to our online resources and start learning technical analysis at your own pace. Watch video tutorials, review chart patterns, and practice with real-time data. Use our tools to develop and test your analysis skills.",
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              className="bg-yellow-100 p-6 rounded-lg shadow-md"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold mb-4 text-yellow-900">
                {course.title}
              </h2>
              <Tabs>
                <TabList className="flex space-x-4 mb-4">
                  <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-yellow-200 text-yellow-900 hover:bg-yellow-300">
                    Description
                  </Tab>
                  <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-yellow-200 text-yellow-900 hover:bg-yellow-300">
                    Course Content
                  </Tab>
                  <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-yellow-200 text-yellow-900 hover:bg-yellow-300">
                    How to Use
                  </Tab>
                </TabList>

                <TabPanel>
                  <motion.p
                    className="text-lg mb-2 text-yellow-800"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {course.description}
                  </motion.p>
                  <motion.p
                    className="text-yellow-700"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Duration: {course.duration}
                  </motion.p>
                  <motion.p
                    className="text-yellow-700"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Price: {course.price}
                  </motion.p>
                </TabPanel>
                <TabPanel>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-900">
                    Syllabus:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-800">
                    {course.syllabus.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </TabPanel>
                <TabPanel>
                  <motion.p
                    className="text-lg mb-2 text-yellow-800"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {course.howToUse}
                  </motion.p>
                </TabPanel>
              </Tabs>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StockCoursesPage;
