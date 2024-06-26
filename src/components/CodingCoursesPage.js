import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMedal } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { BsFillPersonFill, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOndemandVideo } from "react-icons/md";
import "react-tabs/style/react-tabs.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BsFillGiftFill, BsFillTagFill } from "react-icons/bs";
// import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { BiCheckCircle } from "react-icons/bi";
import Drawer from "./Drawer";
import { FaCalendarAlt, FaStar, FaCommentAlt, FaSyncAlt } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import {
  AiOutlineFileText,
  AiOutlineBook,
  AiOutlineTool,
  AiOutlineQrcode,
} from "react-icons/ai";
import AjinkyaProfile from "./AjinkyaProfile";
import CodingReviews from "./CodingReviews";
const formattedDate = new Date(
  Date.now() + 7 * 24 * 60 * 60 * 1000
).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const qrCodeImage =
  "https://i.ibb.co/SmYWhFq/20240617-193344-removebg-preview.png";
// Animation Variants
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: [1, 0.9, 1],
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
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

const CourseCard = ({ course, expandedModules, toggleModule }) => {
  function calculateDiscountedPrice(price, discountPercentage) {
    if (discountPercentage === 0 || isNaN(discountPercentage)) {
      return Math.round(price); // Round off to nearest integer if no discount applied
    }

    const discountedPrice = price - (price * discountPercentage) / 100;
    return Math.round(discountedPrice); // Round off to nearest integer
  }
  return (
    <motion.div
      className="bg-blue-100 p-6 rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      {/* Image and Description */}

      <div className="flex relative flex-col sm:flex-row items-center mb-6 space-y-6 sm:space-y-0 sm:space-x-6 p-4 bg-blue-50 rounded-lg shadow-lg">
        {/* Top Selling or Top Trending Badge */}
        {course.isTopSelling && (
          <motion.span
            className="absolute top-0 right-0 bg-red-600 text-white py-1 px-2 rounded-br-lg text-xs font-semibold z-40"
            initial="hidden"
            animate="visible"
            variants={badgeVariants}
          >
            Top Selling
          </motion.span>
        )}
        {course.isTopTrending && (
          <motion.span
            className="absolute top-0 right-0 bg-orange-800 text-white py-1 px-2 rounded-bl-lg text-xs font-semibold z-40"
            initial="hidden"
            animate="visible"
            variants={badgeVariants}
          >
            Top Trending
          </motion.span>
        )}
        {/* Course Image */}
        <div className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        {/* Course Details */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-900">
            {course.title}
          </h2>
          <p className="text-base sm:text-lg mb-2 text-blue-800">
            {course.description}
          </p>
          <div className="md:flex  md:justify-between ">
            {/* Additional Information */}
            <div className="mt-4 space-y-2 ">
              <div className="flex items-center text-sm sm:text-base text-blue-800">
                <FaCalendarAlt className="mr-2 text-blue-600" />
                <strong>Starts on:&nbsp;</strong> {formattedDate}
              </div>
              <div className="flex items-center text-sm sm:text-base text-blue-800">
                <FaStar className="mr-2 text-yellow-800" />
                <strong>Ratings:&nbsp;</strong>
                <Rating
                  name="course-rating"
                  value={course.ratings}
                  precision={0.5}
                  readOnly
                  className="ml-2"
                />
                &nbsp;{course.ratings}
              </div>
              <div className="flex items-center text-sm sm:text-base text-blue-800">
                <FaCommentAlt className="mr-2 text-green-600" />
                <strong>Reviews:&nbsp;</strong> {course.reviews}
              </div>
              <div className="flex items-center text-sm sm:text-base text-blue-800">
                <FaSyncAlt className="mr-2 text-purple-600" />
                <strong>Last Updated:&nbsp; </strong>{" "}
                {course.lastUpdated || "2 days ago"}
              </div>
              <div className="flex items-center text-sm sm:text-base text-blue-800">
                <FaChalkboardTeacher className="mr-2 text-pink-600" />
                <strong>Instructor:&nbsp; &nbsp;</strong>{" "}
                <div className="flex items-center justify-start space-x-2 text-blue-800">
                  <img
                    alt="Instructor"
                    src={course.instructorImage}
                    className="rounded-full w-10 h-10"
                  />
                  <span className="text-sm sm:text-base font-semibold">
                    {course.instructorName}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center sm:justify-start md:justify-end items-center gap-2 sm:gap-4 mt-4">
              <img
                src="https://cdn-icons-png.flaticon.com/256/7251/7251267.png"
                alt="Best Seller"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <FaMedal className="text-yellow-[#FFC144]" size={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs>
        <TabList className="flex w-full mb-4 flex-wrap gap-2">
          {/* Tab 1 */}
          <Tab className="w-full sm:w-auto sm:flex-1 px-2 py-2 sm:px-4 sm:py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center justify-center space-x-2">
            <AiOutlineFileText />
            <span>Description</span>
          </Tab>
          {/* Tab 2 */}
          <Tab className="w-full sm:w-auto sm:flex-1 px-2 py-2 sm:px-4 sm:py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center justify-center space-x-2">
            <AiOutlineBook />
            <span>Course Content</span>
          </Tab>
          {/* Tab 3 */}
          <Tab className="w-full sm:w-auto sm:flex-1 px-2 py-2 sm:px-4 sm:py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center justify-center space-x-2">
            <AiOutlineTool />
            <span>How to Join</span>
          </Tab>
          {/* Tab 4 */}
          <Tab className="w-full sm:w-auto sm:flex-1 px-2 py-2 sm:px-4 sm:py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center justify-center space-x-2">
            <AiOutlineQrcode />
            <span>Pay Online</span>
          </Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          {/* Course Description */}
          <motion.p
            className="text-base sm:text-lg mb-2 text-blue-800"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            {course.description}
          </motion.p>
          {/* Pricing */}
          <motion.div
            className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between space-y-4 sm:space-y-0"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            {course.discountPercentage ? (
              <motion.div
                className="w-full sm:w-1/3 bg-blue-50 rounded-lg shadow-md p-4"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Original Price with Strike-Through */}
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm sm:text-base text-blue-700">
                    Original Price:
                  </p>
                  <p className="text-sm sm:text-base line-through text-gray-500">
                    ₹ {course.price}
                  </p>
                </div>
                {/* Discount Percentage */}
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm sm:text-base text-blue-700">
                    Discount:
                  </p>
                  <div className="flex items-center">
                    <p className="text-sm sm:text-base font-semibold text-green-500 mr-1">
                      {course.discountPercentage}%
                    </p>
                    <BsFillGiftFill className="text-green-500" size={18} />
                  </div>
                </div>
                {/* Discounted Price */}
                <div className="flex justify-between items-center">
                  <p className="text-sm sm:text-base text-blue-700">
                    Discounted Price:
                  </p>
                  <div className="flex items-center">
                    <p className="text-sm sm:text-base font-semibold text-blue-900 mr-1">
                      ₹{" "}
                      {calculateDiscountedPrice(
                        course.price,
                        course.discountPercentage
                      )}
                    </p>
                    <BsFillTagFill className="text-blue-900" size={18} />
                  </div>
                </div>
              </motion.div>
            ) : (
              // If no discount applied
              <motion.div
                className="w-full sm:w-1/3 bg-blue-50 rounded-lg shadow-md p-4"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm sm:text-base text-blue-700">Price:</p>
                  <div className="flex items-center">
                    <p className="text-sm sm:text-base font-semibold text-blue-900 mr-1">
                      ₹ {course.price}
                    </p>
                    <BsFillTagFill className="text-blue-900" size={18} />
                  </div>
                </div>
              </motion.div>
            )}
            {/* Duration */}
            <motion.div
              className="items-center text-blue-700 mt-2 mb-2 sm:ml-4 "
              variants={tabVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex p-2">
                <BsClockFill size={20} className="mr-2" />
                Duration: {course.duration}
              </div>

              {/* Enrollments and reviews */}
              <div className="flex gap-1 items-center">
                <BsFillPersonFill className="m-2" size={24} />
                <div className="text-lg">{course.enrollments}</div>
                <div>Enrollments</div>
              </div>
              <div className="flex gap-1 items-center">
                <BsStarFill className="m-2" size={24} />
                <div className="text-lg">{course.reviews}</div>
                <div>Reviews</div>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <img
                  alt="Instructor"
                  src={course.instructorImage}
                  className="rounded-full w-10 h-10"
                />
                <span className="text-sm sm:text-base font-semibold">
                  {course.instructorName}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </TabPanel>

        <TabPanel>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">
            Syllabus:
          </h3>
          <ul className="space-y-1 text-blue-800">
            {course.syllabus.map((item, index) => (
              <motion.div
                key={index}
                className="p-3 rounded-lg bg-blue-200 font-bold"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleModule(course.title, index)}
                >
                  <h4 className="text-lg">{item.title}</h4>
                  <span className="text-blue-900">
                    {expandedModules[course.title]?.[index] ? (
                      <BiChevronUp size={30} />
                    ) : (
                      <BiChevronDown size={30} />
                    )}
                  </span>
                </div>
                {expandedModules[course.title]?.[index] && (
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
                    className="mt-2 pl-4 text-blue-700"
                  >
                    <p>{item.description}</p>
                    <ul className="ml-4 list-none">
                      {item.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center">
                          <MdOndemandVideo className="mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <motion.p
            className="text-base sm:text-lg mb-2 text-blue-800"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            {course.howToUse}
          </motion.p>
        </TabPanel>
        <TabPanel>
          <motion.div
            className="max-w-5xl mx-auto py-1 px-2 my-1"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold mb-3 text-center">
              Pricing Details
            </h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between space-y-4 sm:space-y-0">
              {course.discountPercentage ? (
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 bg-blue-50 rounded-lg shadow-md p-4"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-base text-blue-700">Original Price:</p>
                    <p className="text-base line-through text-gray-500">
                      ₹ {course.price}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-base text-blue-700">Discount:</p>
                    <div className="flex items-center">
                      <p className="font-semibold text-green-500 mr-1">
                        {course.discountPercentage}%
                      </p>
                      <BsFillGiftFill className="text-green-500" size={18} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-base text-blue-700">Discounted Price:</p>
                    <div className="flex items-center">
                      <p className="font-semibold text-blue-900 mr-1">
                        ₹{" "}
                        {calculateDiscountedPrice(
                          course.price,
                          course.discountPercentage
                        )}
                      </p>
                      <BsFillTagFill className="text-blue-900" size={18} />
                    </div>
                  </div>
                  {/* Payment Ui Div */}
                  <div className="pt-4">
                    <p className="text-lg font-semibold">Pay Using</p>
                    <div className="flex space-x-1 mt-2">
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
                </motion.div>
              ) : (
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 bg-blue-50 rounded-lg shadow-md p-4"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-base text-blue-700">Price:</p>
                    <div className="flex items-center">
                      <p className="font-semibold text-blue-900 mr-1">
                        ₹ {course.price}
                      </p>
                      <BsFillTagFill className="text-blue-900" size={18} />
                    </div>
                  </div>
                </motion.div>
              )}
              <motion.div
                className="w-full sm:w-1/2 lg:w-2/3 bg-blue-50 rounded-lg shadow-md p-4 flex flex-col justify-center items-center"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-lg text-blue-900 font-semibold mb-4">
                  Scan the QR Code to Complete Payment
                </p>
                <div className="relative w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 shadow-lg">
                  <img
                    src={course.qrCode}
                    alt="QR Code"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-green-100"
                    animate={{
                      y: ["-100%", "100%"],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                        delay: 0.5,
                      },
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </TabPanel>
      </Tabs>
      {/* Additional content */}
    </motion.div>
  );
};
const CodingCoursesPage = () => {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (courseTitle, moduleIndex) => {
    setExpandedModules((prev) => ({
      ...prev,
      [courseTitle]: {
        ...prev[courseTitle],
        [moduleIndex]: !prev[courseTitle]?.[moduleIndex],
      },
    }));
  };
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const codeBatchStart = `${month} ${day}, ${year}`;
  const courses = [
    {
      title: "Course 1: Introduction to HTML & CSS",
      description: "Learn the basics of programming with HTML & CSS.",
      duration: "6 weeks",
      price: 3999,
      ratings: 4.5,
      discountPercentage: 3,
      enrollments: 25,
      reviews: 10,
      isTopSelling: true,
      isTopTrending: false,
      instructorName: "Ajinkya Sir",
      instructorImage:
        "https://media.licdn.com/dms/image/D4D03AQH_icmUii_T_A/profile-displayphoto-shrink_200_200/0/1681055382341?e=2147483647&v=beta&t=bxDPZ2zHx-bBke9SlpZkesheb9vvMtDXolKStj8fOnU",
      syllabus: [
        {
          title: "Module 1: Introduction to HTML & CSS",
          description: "Understanding HTML & CSS fundamentals",
          topics: ["HTML Basics", "CSS Basics", "Selectors", "Box Model"],
        },
        {
          title: "Module 2: Basic Structure of an HTML Document",
          description: "Learn about the basic structure of HTML documents",
          topics: ["Document Structure", "HTML Tags", "Metadata"],
        },
        {
          title: "Module 3: Text Formatting with CSS",
          description: "Explore text formatting techniques using CSS",
          topics: ["Fonts", "Text Alignment", "Text Decoration"],
        },
        {
          title: "Module 4: CSS Layouts and Positioning",
          description:
            "Learn different layout techniques and positioning in CSS",
          topics: ["Floats", "Flexbox", "Grid Layout"],
        },
        {
          title: "Module 5: Responsive Web Design",
          description: "Understand how to create responsive web designs",
          topics: ["Media Queries", "Responsive Frameworks"],
        },
        {
          title: "Module 6: CSS Animations and Transitions",
          description: "Add animations and transitions to your web pages",
          topics: ["Keyframes", "Transition Effects"],
        },
        {
          title: "Module 7: Advanced CSS Techniques",
          description: "Explore advanced CSS concepts and techniques",
          topics: ["CSS Preprocessors", "CSS Frameworks"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, coding exercises, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      image:
        "https://static-00.iconduck.com/assets.00/html5-icon-253x256-0bznuxdp.png",
      qrCode: qrCodeImage, // QR code URL for Course 1
    },
    {
      title: "Course 2: Advanced C++ Programming",
      description:
        "Deep dive into advanced topics in C++ programming and improve your coding skills.",
      duration: "8 weeks",
      price: 4999,
      ratings: 4.6,
      discountPercentage: 3,
      enrollments: 45,
      reviews: 10,
      isTopSelling: true,
      isTopTrending: false,
      instructorName: "Ajinkya Sir",
      instructorImage:
        "https://media.licdn.com/dms/image/D4D03AQH_icmUii_T_A/profile-displayphoto-shrink_200_200/0/1681055382341?e=2147483647&v=beta&t=bxDPZ2zHx-bBke9SlpZkesheb9vvMtDXolKStj8fOnU",
      syllabus: [
        {
          title: "Module 1: Advanced C++ Syntax",
          description: "Master advanced C++ syntax and features",
          topics: ["Templates", "Lambda Expressions", "STL"],
        },
        {
          title: "Module 2: Memory Management",
          description: "Learn about dynamic memory management in C++",
          topics: ["Smart Pointers", "Memory Allocation", "Garbage Collection"],
        },
        {
          title: "Module 3: Concurrency in C++",
          description: "Understand concurrency and multithreading in C++",
          topics: ["Threads", "Mutexes", "Concurrency Libraries"],
        },
        {
          title: "Module 4: Advanced Data Structures",
          description: "Implement and use advanced data structures in C++",
          topics: ["Trees", "Graphs", "Hash Tables"],
        },
        {
          title: "Module 5: Design Patterns",
          description:
            "Explore various design patterns used in software development",
          topics: ["Singleton", "Factory", "Observer"],
        },
        {
          title: "Module 6: Testing and Debugging",
          description:
            "Learn techniques for testing and debugging C++ programs",
          topics: ["Unit Testing", "Debugging Tools", "Code Review"],
        },
        {
          title: "Module 7: Best Practices in C++",
          description:
            "Follow best practices for writing efficient and maintainable C++ code",
          topics: ["Code Optimization", "Refactoring", "Multithreading"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, coding exercises, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      qrCode: qrCodeImage, // QR code URL for Course 2
    },
    {
      title: "Course 3: Data Structures and Algorithms",
      description:
        "Master data structures and algorithms for efficient problem-solving.",
      duration: "12 weeks",
      price: 7999,
      ratings: 4.8,
      discountPercentage: 2,
      enrollments: 32,
      reviews: 10,
      isTopSelling: true,
      isTopTrending: false,
      instructorName: "Ajinkya Sir",
      instructorImage:
        "https://media.licdn.com/dms/image/D4D03AQH_icmUii_T_A/profile-displayphoto-shrink_200_200/0/1681055382341?e=2147483647&v=beta&t=bxDPZ2zHx-bBke9SlpZkesheb9vvMtDXolKStj8fOnU",
      syllabus: [
        {
          title: "Module 1: Introduction to Data Structures",
          description:
            "Learn the basics of data structures and their applications",
          topics: ["Arrays", "Linked Lists", "Stacks", "Queues"],
        },
        {
          title: "Module 2: Sorting and Searching Algorithms",
          description: "Explore different sorting and searching algorithms",
          topics: ["Bubble Sort", "Quick Sort", "Binary Search", "Merge Sort"],
        },
        {
          title: "Module 3: Trees and Graphs",
          description: "Understand trees and graphs and their applications",
          topics: [
            "Binary Trees",
            "Binary Search Trees",
            "Graph Algorithms",
            "Breadth-First Search",
            "Depth-First Search",
          ],
        },
        {
          title: "Module 4: Advanced Data Structures and Algorithms",
          description:
            "Learn advanced data structures and algorithms for efficient problem-solving",
          topics: [
            "Heaps",
            "Hash Tables",
            "Dynamic Programming",
            "Greedy Algorithms",
          ],
        },
        {
          title: "Module 5: Algorithm Analysis and Design",
          description:
            "Analyze and design efficient algorithms for various problems",
          topics: [
            "Time Complexity",
            "Space Complexity",
            "Algorithm Design Techniques",
          ],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, coding exercises, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      image:
        "https://images.klipfolio.com/website/public/11f3da89-351a-4ca1-a59d-b6806b0fcec1/algorithm.jpg",
      qrCode: qrCodeImage, // QR code URL for Course 3
    },
    {
      title: "Course 4: Frontend Development with React",
      description: "Become proficient in frontend development using React.js.",
      duration: "12 weeks",
      price: 7999,
      ratings: 4.9,
      syllabus: [
        {
          title: "Module 1: Introduction to React",
          description: "Get started with React basics",
          topics: ["Components", "State and Props", "Event Handling"],
        },
        {
          title: "Module 2: Advanced React Concepts",
          description: "Explore advanced concepts in React development",
          topics: ["Hooks", "Context API", "Routing"],
        },
        {
          title: "Module 3: React State Management",
          description: "Learn about state management techniques in React",
          topics: ["Redux", "MobX", "Context API"],
        },
        {
          title: "Module 4: React and REST APIs",
          description: "Integrate React applications with RESTful APIs",
          topics: ["Fetch API", "Axios", "Async/Await"],
        },
        {
          title: "Module 5: Testing React Applications",
          description: "Implement testing strategies for React applications",
          topics: ["Unit Testing", "Integration Testing", "End-to-End Testing"],
        },
        {
          title: "Module 6: React Project Development",
          description: "Work on a practical project using React",
          topics: ["Project Planning", "UI/UX Design", "Project Deployment"],
        },
      ],
      howToUse:
        "Join our React development course to learn modern frontend development with React.js. Build interactive user interfaces and dynamic web applications.",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
      qrCode: qrCodeImage,
      discountPercentage: 2,
      enrollments: 18,
      reviews: 10,
      isTopSelling: false,
      isTopTrending: true,
      instructorName: "Ajinkya Sir",
      instructorImage:
        "https://media.licdn.com/dms/image/D4D03AQH_icmUii_T_A/profile-displayphoto-shrink_200_200/0/1681055382341?e=2147483647&v=beta&t=bxDPZ2zHx-bBke9SlpZkesheb9vvMtDXolKStj8fOnU",
    },
    {
      title: "Course 5: JavaScript Fundamentals",
      description:
        "Master JavaScript programming language from basics to advanced.",
      duration: "8 weeks",
      price: 4999,
      ratings: 4.4,
      discountPercentage: 2,
      enrollments: 16,
      reviews: 10,
      isTopSelling: false,
      isTopTrending: true,
      instructorName: "Ajinkya Sir",
      instructorImage:
        "https://media.licdn.com/dms/image/D4D03AQH_icmUii_T_A/profile-displayphoto-shrink_200_200/0/1681055382341?e=2147483647&v=beta&t=bxDPZ2zHx-bBke9SlpZkesheb9vvMtDXolKStj8fOnU",
      syllabus: [
        {
          title: "Module 1: JavaScript Basics",
          description: "Understand the fundamentals of JavaScript",
          topics: [
            "Variables",
            "Data Types",
            "Functions",
            "Operators",
            "Control Flow",
            "Arrays",
            "Objects",
            "Scope",
          ],
        },
        {
          title: "Module 2: Advanced JavaScript",
          description: "Learn advanced concepts in JavaScript",
          topics: [
            "ES6 Features",
            "Asynchronous Programming",
            "Modules",
            "Promises",
            "Async/Await",
            "Closures",
            "Prototypes",
            "Error Handling",
          ],
        },
        {
          title: "Module 3: DOM Manipulation",
          description:
            "Manipulate the Document Object Model (DOM) with JavaScript",
          topics: [
            "DOM Selection",
            "DOM Manipulation",
            "Event Handling",
            "Creating and Modifying Elements",
            "DOM Traversal",
          ],
        },
        {
          title: "Module 4: Web APIs",
          description:
            "Explore various Web APIs and their integration with JavaScript",
          topics: [
            "AJAX",
            "Fetch API",
            "LocalStorage",
            "SessionStorage",
            "Geolocation API",
            "Canvas API",
            "WebSockets",
          ],
        },
        {
          title: "Module 5: Frameworks and Libraries",
          description:
            "Introduction to popular JavaScript frameworks and libraries",
          topics: [
            "React.js",
            "Angular",
            "Vue.js",
            "jQuery",
            "Node.js",
            "Express.js",
            "Bootstrap",
            "Tailwind CSS",
          ],
        },
      ],
      howToUse:
        "Enroll in our JavaScript course to gain expertise in web development. Practice coding exercises, work on projects, and enhance your JavaScript skills.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      qrCode: qrCodeImage,
    },
    {
      title: "Full Stack Web Development Bootcamp",
      description:
        "Become a full-stack developer with this comprehensive bootcamp.",
      duration: "12 weeks",
      price: 59000,
      ratings: 4.9,
      discountPercentage: 5,
      enrollments: 50,
      reviews: 20,
      isTopSelling: false,
      isTopTrending: true,
      instructorName: "Ajinkya Sir",
      instructorImage:
        "https://media.licdn.com/dms/image/D4D03AQH_icmUii_T_A/profile-displayphoto-shrink_200_200/0/1681055382341?e=2147483647&v=beta&t=bxDPZ2zHx-bBke9SlpZkesheb9vvMtDXolKStj8fOnU",
      syllabus: [
        {
          title: "Module 1: Frontend Development",
          description:
            "Learn HTML, CSS, and JavaScript for frontend development",
          topics: ["HTML Basics", "CSS Basics", "JavaScript Fundamentals"],
        },
        {
          title: "Module 2: Backend Development",
          description:
            "Explore server-side programming with Node.js and Express",
          topics: ["Node.js Fundamentals", "Express Framework", "RESTful APIs"],
        },
        {
          title: "Module 3: Database Management",
          description: "Learn database design and management with MongoDB",
          topics: ["MongoDB Basics", "CRUD Operations", "Mongoose ORM"],
        },
        {
          title: "Module 4: Full-Stack Integration",
          description:
            "Integrate frontend and backend components to build full-stack applications",
          topics: [
            "API Integration",
            "Authentication & Authorization",
            "Deployment",
          ],
        },
        {
          title: "Module 5: Advanced Concepts",
          description:
            "Explore advanced topics such as microservices and cloud deployment",
          topics: [
            "Microservices Architecture",
            "Docker Containers",
            "Cloud Platforms",
          ],
        },
      ],
      howToUse:
        "Enroll in our Full Stack Web Development Bootcamp to gain access to live lectures, hands-on projects, and mentorship from experienced instructors. Join our community forums for discussions and collaborate with peers on real-world projects.",
      image:
        "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
      qrCode: qrCodeImage,
    },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 h-auto">
      {/* Left Column (Visible for Laptop and Larger Screens) */}
      <div className="hidden md:block sticky top-0 col-span-1 h-screen p-4 bg-blue-100">
        <AjinkyaProfile />
      </div>

      {/* Middle Column */}
      <div className="col-span-3 md:col-span-3 overflow-y-scroll hide-scrollbar p-4 bg-blue-50">
        <div className="space-y-4">
          <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
            <h1 className="text-3xl sm:text-4xl gap-2 font-extrabold text-blue-900 mb-6 flex items-center justify-between">
              <Drawer courseType="Coding " batchStartInfo={codeBatchStart} />
              <span>Coding Courses</span>
            </h1>

            <motion.div
              className="w-full max-w-4xl space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  expandedModules={expandedModules}
                  toggleModule={toggleModule}
                />
              ))}
            </motion.div>
          </div>
        </div>
        <div>
          <CodingReviews />
        </div>
      </div>

      {/* Right Column (Visible for Laptop and Larger Screens) */}
      <div className="hidden md:block sticky top-0 col-span-1 h-screen p-4  bg-gradient-to-r from-blue-500 to-purple-500">
        <div class="hidden md:block sticky top-0 col-span-1 h-auto p-3 px-4 bg-blue-100">
          <div class="flex items-center justify-between mb-2 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9186/9186534.png"
              alt="Logo"
              class="h-12"
            />
            <Link
              to="/enquiry"
              class="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Enquiry
            </Link>
          </div>
          <div class="grid gap-6">
            <div>
              <h2 class="text-2xl font-semibold mb-0">
                More About Web Development
              </h2>
              <p class="text-gray-700">
                Web development trends evolve rapidly, incorporating new
                technologies and practices such as responsive design,
                progressive web apps (PWAs), and serverless architectures.
                Keeping up with these trends is crucial for businesses to stay
                competitive in the digital landscape.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-0">
                Benefits of Efficient Digital Solutions
              </h3>
              <ul className="list-none text-gray-700">
                <li className="flex items-center mb-2">
                  <BiCheckCircle size={36} className="mr-2 text-green-500" />
                  Save costs through efficient digital solutions
                </li>
                <li className="flex items-center mb-2">
                  <BiCheckCircle size={36} className="mr-2 text-green-500" />
                  Enhance user experience with responsive design
                </li>
                <li className="flex items-center mb-2">
                  <BiCheckCircle size={36} className="mr-2 text-green-500" />
                  Improve scalability with serverless architectures
                </li>
                <li className="flex items-center">
                  <BiCheckCircle size={36} className="mr-2 text-green-500" />
                  Optimize performance with progressive web apps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodingCoursesPage;
