import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import {
  AiOutlineFileText,
  AiOutlineBook,
  AiOutlineTool,
  AiOutlineQrcode,
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
          <Tab className="px-4 py-2 rounded-lg cursor-pointer bg-blue-200 text-blue-900 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-300 flex items-center space-x-2">
            <AiOutlineQrcode />
            <span>Pay Online</span>
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
          <ul className="list-disc space-y-1 text-blue-800">
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
        <TabPanel>
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg text-blue-900">
              Scan the QR code below to pay online:
            </p>
            <img
              src={course.qrCode} // Use course-specific QR code image URL
              alt="QR Code"
              className="w-32 h-32"
            />
          </motion.div>
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
        "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5-thumbnail.png",
      qrCode: "https://www.qrcode-monkey.com/img/default-preview-qr.svg", // QR code URL for Course 1
    },
    {
      title: "Course 2: Advanced C++ Programming",
      description:
        "Deep dive into advanced topics in C++ programming and improve your coding skills.",
      duration: "8 weeks",
      price: "₹ 4999",
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
      qrCode:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg", // QR code URL for Course 2
    },
    {
      title: "Course 3: Data Structures and Algorithms",
      description:
        "Master data structures and algorithms for efficient problem-solving.",
      duration: "12 weeks",
      price: "₹ 7999",
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
      qrCode:
        "https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png", // QR code URL for Course 3
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
        "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
      qrCode:
        "https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png",
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
      qrCode:
        "https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6">
        Coding Courses
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
  );
};

export default CodingCoursesPage;
