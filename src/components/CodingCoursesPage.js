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

const CodingCoursesPage = () => {
  return (
    <motion.div
      className="bg-blue-50 min-h-screen py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-blue-800"
          variants={itemVariants}
        >
          Coding Courses
        </motion.h1>
        <div className="space-y-8">
          {[
            {
              title: "Course 1: Introduction to Programming",
              description: "Learn the basics of programming with Python.",
              duration: "6 weeks",
              price: "$99",
              syllabus: [
                "Module 1: Introduction to Python",
                "Module 2: Variables and Data Types",
                "Module 3: Control Structures",
                "Module 4: Functions",
                "Module 5: Lists and Dictionaries",
                "Module 6: Basic Projects",
              ],
              howToUse:
                "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, coding exercises, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
            },
            {
              title: "Course 2: Web Development Bootcamp",
              description: "Become a full-stack web developer.",
              duration: "12 weeks",
              price: "$299",
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
            },
            {
              title: "Course 3: Data Structures and Algorithms",
              description:
                "Master data structures and algorithms for coding interviews.",
              duration: "8 weeks",
              price: "$149",
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
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-md"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-900">
                {course.title}
              </h2>
              <Tabs>
                <TabList className="flex space-x-4 mb-4">
                  <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300">
                    Description
                  </Tab>
                  <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300">
                    Course Content
                  </Tab>
                  <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300">
                    How to Use
                  </Tab>
                </TabList>

                <TabPanel>
                  <motion.p
                    className="text-lg mb-2 text-blue-800"
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
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
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
                    className="text-lg mb-2 text-blue-800"
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

export default CodingCoursesPage;
