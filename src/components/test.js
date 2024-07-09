import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { motion } from "framer-motion";

const tabVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const CourseDetails = ({ course }) => {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (moduleIndex) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex],
    }));
  };

  return (
    <div className="mt-4">
      {course.syllabus.map((module, moduleIndex) => (
        <motion.div
          key={moduleIndex}
          className="bg-gray-700 p-4 mb-4 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={tabVariants}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleModule(moduleIndex)}
          >
            <h3 className="text-lg font-bold text-yellow-300">
              {module.title}
            </h3>
            <span className="text-yellow-300">
              {expandedModules[moduleIndex] ? (
                <BiChevronUp className="text-yellow-300" size={30} />
              ) : (
                <BiChevronDown className="text-yellow-300" size={30} />
              )}
            </span>
          </div>
          {expandedModules[moduleIndex] && (
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
              <p className="text-gray-400 mb-2">{module.description}</p>
              <ul className="list-inside text-gray-400">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex flex-col mb-2">
                    <div className="flex items-center">
                      <MdOndemandVideo className="mr-2" />
                      {topic.title}
                    </div>
                    {topic.subtopics && (
                      <ul className="ml-6 list-disc">
                        {topic.subtopics.map((subtopic, subtopicIndex) => (
                          <li key={subtopicIndex}>{subtopic}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Example usage with course data
const course = {
  title: "Course 1: Introduction to Stock Market",
  description: "Learn the basics of Stock Market investing.",
  duration: "3 weeks",
  price: "₹ 3999",
  discountPercentage: 5,
  instructor: "Ajinkya Sir",
  enrollments: "12+",
  instructorImage: "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg",
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
      topics: [
        {
          title: "Stock exchanges",
          subtopics: ["NYSE", "NASDAQ", "Tokyo Stock Exchange"],
        },
        {
          title: "Market participants",
          subtopics: ["Retail investors", "Institutional investors"],
        },
        {
          title: "Types of stocks",
          subtopics: ["Common stocks", "Preferred stocks"],
        },
      ],
    },
    // More modules here...
  ],
  howToUse:
    "This course can be accessed through our online learning platform. Once enrolled, you will receive access to video lectures, reading materials, and assignments. Engage with fellow learners through discussion forums and track your progress via our interactive dashboard.",
  QrImage: "qrCodeImage", // Placeholder for actual QR image data
};

export default function Test() {
  return <CourseDetails course={course} />;
}
