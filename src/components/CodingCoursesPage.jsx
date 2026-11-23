import { useState } from "react";
import { Link } from "react-router";
import { ArrowPathIcon, CalendarDaysIcon, ClockIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import AjinkyaProfile from "./AjinkyaProfile";
import CodingReviews from "./CodingReviews";
import SimpleSlider from "./SimpleSlider";
import Stepper from "./Stepper";
import CourseCard from "../features/courses/CourseCard";
import CoursePageLayout, { CourseIndex, InfoCard } from "../features/courses/CoursePageLayout";
import { ROUTES } from "../config/routes";

const ENROLL_LINK = "https://rzp.io/i/TY3pcckq2";

const formattedDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const qrCodeImage = "https://i.ibb.co/SmYWhFq/20240617-193344-removebg-preview.png";
// Animation Variants

const WEB_DEV_BENEFITS = [
  { title: "Save costs through efficient digital solutions" },
  { title: "Enhance user experience with responsive design" },
  { title: "Improve scalability with serverless architectures" },
  { title: "Optimise performance with progressive web apps" },
];

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
          description: "Learn different layout techniques and positioning in CSS",
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
      image: "https://static-00.iconduck.com/assets.00/html5-icon-253x256-0bznuxdp.png",
      qrCode: qrCodeImage, // QR code URL for Course 1
    },
    {
      title: "Course 2: Advanced C++ Programming",
      description: "Deep dive into advanced topics in C++ programming and improve your coding skills.",
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
          description: "Explore various design patterns used in software development",
          topics: ["Singleton", "Factory", "Observer"],
        },
        {
          title: "Module 6: Testing and Debugging",
          description: "Learn techniques for testing and debugging C++ programs",
          topics: ["Unit Testing", "Debugging Tools", "Code Review"],
        },
        {
          title: "Module 7: Best Practices in C++",
          description: "Follow best practices for writing efficient and maintainable C++ code",
          topics: ["Code Optimization", "Refactoring", "Multithreading"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, coding exercises, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      qrCode: qrCodeImage, // QR code URL for Course 2
    },
    {
      title: "Course 3: Data Structures and Algorithms",
      description: "Master data structures and algorithms for efficient problem-solving.",
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
          description: "Learn the basics of data structures and their applications",
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
          description: "Learn advanced data structures and algorithms for efficient problem-solving",
          topics: ["Heaps", "Hash Tables", "Dynamic Programming", "Greedy Algorithms"],
        },
        {
          title: "Module 5: Algorithm Analysis and Design",
          description: "Analyze and design efficient algorithms for various problems",
          topics: ["Time Complexity", "Space Complexity", "Algorithm Design Techniques"],
        },
      ],
      howToUse:
        "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, coding exercises, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
      image: "https://images.klipfolio.com/website/public/11f3da89-351a-4ca1-a59d-b6806b0fcec1/algorithm.jpg",
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
      description: "Master JavaScript programming language from basics to advanced.",
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
          description: "Manipulate the Document Object Model (DOM) with JavaScript",
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
          description: "Explore various Web APIs and their integration with JavaScript",
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
          description: "Introduction to popular JavaScript frameworks and libraries",
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
      description: "Become a full-stack developer with this comprehensive bootcamp.",
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
          description: "Learn HTML, CSS, and JavaScript for frontend development",
          topics: ["HTML Basics", "CSS Basics", "JavaScript Fundamentals"],
        },
        {
          title: "Module 2: Backend Development",
          description: "Explore server-side programming with Node.js and Express",
          topics: ["Node.js Fundamentals", "Express Framework", "RESTful APIs"],
        },
        {
          title: "Module 3: Database Management",
          description: "Learn database design and management with MongoDB",
          topics: ["MongoDB Basics", "CRUD Operations", "Mongoose ORM"],
        },
        {
          title: "Module 4: Full-Stack Integration",
          description: "Integrate frontend and backend components to build full-stack applications",
          topics: ["API Integration", "Authentication & Authorization", "Deployment"],
        },
        {
          title: "Module 5: Advanced Concepts",
          description: "Explore advanced topics such as microservices and cloud deployment",
          topics: ["Microservices Architecture", "Docker Containers", "Cloud Platforms"],
        },
      ],
      howToUse:
        "Enroll in our Full Stack Web Development Bootcamp to gain access to live lectures, hands-on projects, and mentorship from experienced instructors. Join our community forums for discussions and collaborate with peers on real-world projects.",
      image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
      qrCode: qrCodeImage,
    },
  ];

  // Map this page's course data onto the shared CourseCard shape.
  const toCard = (course) => ({
    title: course.title,
    description: course.description,
    image: course.image,
    price: course.price,
    discountPercentage: course.discountPercentage,
    rating: course.ratings,
    reviews: course.reviews,
    enrollments: course.enrollments,
    isTopSelling: course.isTopSelling,
    isTopTrending: course.isTopTrending,
    instructor: { name: course.instructorName, image: course.instructorImage },
    facts: [
      { icon: CalendarDaysIcon, label: "Starts on", value: formattedDate },
      { icon: ClockIcon, label: "Duration", value: course.duration },
      { icon: ComputerDesktopIcon, label: "Mode of learning", value: "Online & offline" },
      { icon: ArrowPathIcon, label: "Last updated", value: course.lastUpdated || "2 days ago" },
    ],
    syllabus: course.syllabus,
    howToJoin: course.howToUse,
    qrImage: course.qrCode,
    payLink: ENROLL_LINK,
  });

  return (
    <CoursePageLayout
      eyebrow="Web development"
      title="Coding courses"
      description="Learn to build modern, responsive websites — from HTML & CSS fundamentals to full-stack JavaScript."
      actions={<Drawer courseType="Coding" batchStartInfo={codeBatchStart} />}
      aside={
        <>
          <AjinkyaProfile />
          <CourseIndex courses={courses} />
          <InfoCard title="More about web development">
            <p>
              Web development evolves rapidly — responsive design, progressive web apps (PWAs) and serverless
              architectures. Keeping up with these trends is crucial for staying competitive.
            </p>
          </InfoCard>
          <InfoCard title="Benefits of efficient digital solutions" points={WEB_DEV_BENEFITS} />
          <div className="card">
            <p className="card-title">Not sure which course fits?</p>
            <p className="card-desc">Tell us your goals and we'll recommend a path.</p>
            <Link to={ROUTES.enquiry} className="btn btn-primary mt-4 w-full">
              Make an enquiry
            </Link>
          </div>
        </>
      }
      after={
        <>
          <CodingReviews />
          <SimpleSlider />
        </>
      }
    >
      {courses.map((course, index) => (
        <div key={course.title} id={`course-${index + 1}`} className="scroll-mt-24">
          <CourseCard
            course={toCard(course)}
            isModuleOpen={(m) => expandedModules[course.title]?.[m]}
            onToggleModule={(m) => toggleModule(course.title, m)}
            joinSteps={<Stepper />}
          />
        </div>
      ))}
    </CoursePageLayout>
  );
};

export default CodingCoursesPage;
