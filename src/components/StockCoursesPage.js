import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import { BsBook } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

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
      description: "Learn the basics of stock market investing.",
      duration: "6 weeks",
      price: "₹ 3999",
      instructor: "Ajinkya",
      image:
        "https://cdn.pixabay.com/photo/2024/01/06/02/44/ai-generated-8490532_640.png",
      rating: "4.5",
      reviews: 120,
      syllabus: [
        "Module 1: Overview of the Stock Market",
        "Module 2: Key Players and Instruments",
        "Module 3: How to Buy and Sell Stocks",
        "Module 4: Understanding Stock Basics",
        "Module 5: Introduction to Stock Analysis",
        "Module 6: Risks and Rewards",
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
    },
    {
      title: "Course 2: Advanced Stock Market Strategies",
      description: "Master advanced strategies in stock market trading.",
      duration: "8 weeks",
      price: "₹ 4999",
      instructor: "Ajinkya",
      image:
        "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user",
      rating: "4.8",
      reviews: 90,
      syllabus: [
        "Module 1: Technical Analysis",
        "Module 2: Fundamental Analysis",
        "Module 3: Risk Management",
        "Module 4: Trading Psychology",
        "Module 5: Strategy Development",
        "Module 6: Live Trading Sessions",
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
    },
    {
      title: "Course 3: Advanced Futures and Options Strategies",
      description: "Master advanced strategies in futures and options trading.",
      duration: "10 weeks",
      price: "₹ 5999",
      instructor: "Ajinkya",
      image:
        "https://t3.ftcdn.net/jpg/03/12/92/74/360_F_312927435_NVvwOxvswQgNu97Y1m8VvtEPTVL9AnEN.jpg",
      rating: "4.9",
      reviews: 85,
      syllabus: [
        "Module 1: Introduction to Futures and Options",
        "Module 2: Futures and Options Pricing",
        "Module 3: Hedging Strategies",
        "Module 4: Speculation and Arbitrage",
        "Module 5: Advanced Option Strategies",
        "Module 6: Futures Spread Trading",
        "Module 7: Risk Management Techniques",
        "Module 8: Live Trading Sessions",
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
    },
  ];

  return (
    <motion.div
      className="bg-gray-900 text-white min-h-screen py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/4 pr-0 sm:pr-6 mb-8 sm:mb-0">
          <motion.h1
            className="text-4xl font-bold mb-8 text-yellow-300"
            variants={itemVariants}
          >
            Stock Courses
          </motion.h1>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col sm:flex-row"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <div className="w-full sm:w-1/3 pr-0 sm:pr-6 mb-4 sm:mb-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full rounded-md"
                  />
                </div>
                <div className="w-full sm:w-2/3">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-yellow-300">
                      {course.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />
                      <span className="text-yellow-400">{course.rating}</span>
                      <span className="text-gray-400">Stars</span>
                    </div>
                  </div>
                  <Tabs>
                    <TabList className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                      <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-gray-700 text-white hover:bg-gray-600">
                        Description
                      </Tab>
                      <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-gray-700 text-white hover:bg-gray-600">
                        Course Content
                      </Tab>
                      <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-gray-700 text-white hover:bg-gray-600">
                        How to Use
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <motion.p
                        className="text-lg mb-2 text-yellow-300"
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {course.description}
                      </motion.p>
                      <motion.p
                        className="text-yellow-400"
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        Duration: {course.duration}
                      </motion.p>
                      <motion.p
                        className="text-yellow-400"
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        Price: {course.price}
                      </motion.p>
                    </TabPanel>
                    <TabPanel>
                      <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                        Syllabus:
                      </h3>
                      <ul className="pl-5 space-y-1 text-yellow-300 list-none">
                        {course.syllabus.map((item, index) => (
                          <motion.li
                            key={index}
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <BsBook className="inline-block mr-2" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </TabPanel>
                    <TabPanel>
                      <motion.p
                        className="text-lg mb-2 text-yellow-300"
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {course.howToUse}
                      </motion.p>
                    </TabPanel>
                  </Tabs>

                  <div className="flex justify-between items-center mt-8">
                    <div>
                      <span className="text-xl font-semibold text-yellow-300">
                        {course.rating} stars
                      </span>
                      <span className="text-gray-400 ml-2">
                        ({course.reviews} reviews)
                      </span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Sidebar courses={courses.slice(1)} />
      </div>
    </motion.div>
  );
};

export default StockCoursesPage;

