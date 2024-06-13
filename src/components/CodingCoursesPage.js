import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

import {
  AiOutlineFileText,
  AiOutlineBook,
  AiOutlineTool,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

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

const CourseCard = ({ course, expandedModules, toggleModule }) => (
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
          <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center space-x-2">
            <AiOutlineFileText />
            <span>Description</span>
          </Tab>
          <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center space-x-2">
            <AiOutlineBook />
            <span>Course Content</span>
          </Tab>
          <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center space-x-2">
            <AiOutlineTool />
            <span>How to Use</span>
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
          <ul className="list-disc  space-y-1 text-blue-800 ">
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
                  <h4 className="text-lg ">{item.title}</h4>
                  <span className="text-blue-900 ">
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
                    <ul className="list-disc ml-4">
                      {item.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
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
      </Tabs>
    </div>
  </motion.div>
);

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

 const courses = [
   {
     title: "Course 1: Introduction to HTML & CSS",
     description: "Learn the basics of programming with HTML & CSS.",
     duration: "6 weeks",
     price: "₹ 3999",
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
       "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
   },
   {
     title: "Course 2: C++ Programming",
     description:
       "Learn C++ programming language from basics to advanced concepts.",
     duration: "10 weeks",
     price: "₹ 5499",
     syllabus: [
       {
         title: "Module 1: Introduction to C++",
         description: "Understanding the basics of C++ programming",
         topics: [
           "Variables and Data Types",
           "Control Flow Statements",
           "Functions",
         ],
       },
       {
         title: "Module 2: Advanced C++ Concepts",
         description: "Explore advanced topics in C++ programming",
         topics: [
           "Classes and Objects",
           "Inheritance and Polymorphism",
           "Exception Handling",
         ],
       },
       {
         title: "Module 3: STL and Advanced Techniques",
         description:
           "Learn about the Standard Template Library (STL) and advanced coding techniques in C++",
         topics: [
           "STL Containers and Algorithms",
           "Smart Pointers",
           "Template Metaprogramming",
         ],
       },
       {
         title: "Module 4: File Handling and Networking in C++",
         description:
           "Understand file handling and networking concepts using C++",
         topics: [
           "File Input/Output",
           "Socket Programming",
           "HTTP Requests with C++",
         ],
       },
       {
         title: "Module 5: Multithreading and Concurrency",
         description: "Explore multithreading and concurrency concepts in C++",
         topics: [
           "Thread Management",
           "Synchronization",
           "Parallel Programming",
         ],
       },
       {
         title: "Module 6: Advanced Topics and Project Work",
         description:
           "Cover advanced topics and work on a practical project using C++",
         topics: [
           "Advanced Algorithms",
           "Memory Management",
           "Project Development",
         ],
       },
     ],
     howToUse:
       "Enroll in our C++ course to access video lectures, coding exercises, quizzes, and projects. Practice coding in C++ and build real-world applications under the guidance of experienced instructors.",
     image:
       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
   },
   {
     title: "Course 3: Data Structures and Algorithms",
     description:
       "Master data structures and algorithms for coding interviews.",
     duration: "8 weeks",
     price: "₹ 4499",
     syllabus: [
       {
         title: "Module 1: Introduction to Data Structures",
         description: "Learn about fundamental data structures",
         topics: ["Arrays and Strings", "Linked Lists", "Stacks and Queues"],
       },
       {
         title: "Module 2: Sorting and Searching Algorithms",
         description: "Study sorting and searching techniques",
         topics: ["Bubble Sort", "Merge Sort", "Binary Search"],
       },
       // Add other modules here
     ],
     howToUse:
       "Gain access to our online resources and start learning data structures and algorithms at your own pace. Watch video tutorials, practice with coding problems, and use our tools to test your skills.",
     image:
       "https://d15cw65ipctsrr.cloudfront.net/5e/41de00794811e682cb918e3e406e4d/cs161logo.png",
   },
   {
     title: "Course 4: Frontend Development with React",
     description: "Become proficient in frontend development using React.js.",
     duration: "12 weeks",
     price: "₹ 7999",
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
       "data:image/png;base64,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",
   },
   {
     title: "Course 5: JavaScript Fundamentals",
     description:
       "Master JavaScript programming language from basics to advanced.",
     duration: "8 weeks",
     price: "₹ 4999",
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
   },
   // Add more courses if needed
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
            <CourseCard
              key={index}
              course={course}
              expandedModules={expandedModules}
              toggleModule={toggleModule}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodingCoursesPage;

