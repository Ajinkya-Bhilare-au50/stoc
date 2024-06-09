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

const CourseCard = ({ course }) => (
  <motion.div
    className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6"
    initial="hidden"
    animate="visible"
    variants={itemVariants}
  >
    <div className="sm:w-1/4 flex justify-center">
      <img
        src={course.image}
        alt={course.title}
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
      />
    </div>
    <div className="flex-1">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-900">
        {course.title}
      </h2>
      <Tabs>
        <TabList className="flex flex-wrap gap-2 mb-4">
          <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300">
            Description
          </Tab>
          <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300">
            Course Content
          </Tab>
          <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300">
            How to Use
          </Tab>
        </TabList>

        <TabPanel>
          <motion.p
            className="text-base sm:text-lg mb-2 text-blue-800"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            {course.description}
          </motion.p>
          <motion.p
            className="text-blue-700"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            Duration: {course.duration}
          </motion.p>
          <motion.p
            className="text-blue-700"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            Price: {course.price}
          </motion.p>
        </TabPanel>
        <TabPanel>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">
            Syllabus:
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-800">
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
            className="text-base sm:text-lg mb-2 text-blue-800"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            {course.howToUse}
          </motion.p>
        </TabPanel>
      </Tabs>
    </div>
  </motion.div>
);

const CodingCoursesPage = () => {
  const courses = [
            {
              title: "Course 1: Introduction to HTML & CSS",
              description: "Learn the basics of programming with HTML & CSS.",
              duration: "6 weeks",
              price: "₹ 3999",
              syllabus: [
                "Module 1: Introduction to HTML & CSS",
                "Module 2: Basic Structure of an HTML Document",
                "Module 3: Text Formatting Tags",
                "Module 4: Lists",
                "Module 5: Tables",
                "Module 6: Forms",
              ],
              howToUse:
                "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, coding exercises, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
              image:
                "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
            },
            {
              title: "Course 2: Web Development Bootcamp",
              description: "Become a full-stack web developer.",
              duration: "12 weeks",
              price: "₹ 59000",
              syllabus: [
                "Module 1: HTML & CSS",
                "Module 2: JavaScript Basics",
                "Module 3: Advanced JavaScript",
                "Module 4: Frontend Frameworks (React)",
                "Module 5: Backend Development (Node.js)",
                "Module 6: Databases (MongoDB)",
                "Module 7: Deployment",
                "Module 8: Capstone Project",
              ],
              howToUse:
                "This course is designed for intermediate learners. Access the course through our platform, where you will find video lectures, coding exercises, and real-world projects. Participate in live coding sessions and get feedback from experts.",
              image: "https://tse1.mm.bing.net/th?q=web%20page%20logo",
            },
            {
              title: "Course 3: C++ Programming",
              description:
                "Learn C++ programming language from basics to advanced concepts.",
              duration: "10 weeks",
              price: "₹ 5499",
              syllabus: [
                "Module 1: Introduction to C++",
                "Module 2: Variables and Data Types",
                "Module 3: Control Flow Statements",
                "Module 4: Functions and Scope",
                "Module 5: Arrays and Pointers",
                "Module 6: Classes and Objects",
                "Module 7: Inheritance and Polymorphism",
                "Module 8: File Handling and Exception Handling",
                "Module 9: Standard Template Library (STL)",
                "Module 10: Project Work",
              ],
              howToUse:
                "Enroll in our C++ course to access video lectures, coding exercises, quizzes, and projects. Practice coding in C++ and build real-world applications under the guidance of experienced instructors.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
            },

            {
              title: "Course 4: Data Structures and Algorithms",
              description:
                "Master data structures and algorithms for coding interviews.",
              duration: "8 weeks",
              price: "₹ 4499",
              syllabus: [
                "Module 1: Introduction to Data Structures",
                "Module 2: Arrays and Strings",
                "Module 3: Linked Lists",
                "Module 4: Stacks and Queues",
                "Module 5: Trees and Graphs",
                "Module 6: Sorting and Searching Algorithms",
                "Module 7: Dynamic Programming",
                "Module 8: Practice Problems",
              ],
              howToUse:
                "Gain access to our online resources and start learning data structures and algorithms at your own pace. Watch video tutorials, practice with coding problems, and use our tools to test your skills.",
              image:
                "https://d15cw65ipctsrr.cloudfront.net/5e/41de00794811e682cb918e3e406e4d/cs161logo.png",
            },
          ];

  return (
    <motion.div
      className="bg-blue-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-blue-800"
          variants={itemVariants}
        >
          Coding Courses
        </motion.h1>
        <div className="space-y-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodingCoursesPage;
