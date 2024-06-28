import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { AiOutlineStock, AiOutlineCode } from "react-icons/ai";



const candlestickImage="https://i.ibb.co/VBQc69b/candlestick-pattern-7680x4320-19473.jpg";
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroPage = () => {
  return (
    <>
      <motion.div
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4 h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Candlestick background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-40"
          style={{
            backgroundImage: `url(${candlestickImage})`,
          }}
        ></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            Master Stock Dynamics
          </motion.h1>
          <motion.p className="text-lg md:text-xl mb-8" variants={itemVariants}>
            Unlock Your Potential with Experts
          </motion.p>
          <div className="flex space-x-4">
            <motion.div variants={itemVariants}>
              <Link
                to="/stockcoursepage"
                className="bg-yellow-800 hover:bg-yellow-900 text-black px-8 py-3 rounded-md shadow-md flex items-center space-x-2"
              >
                <AiOutlineStock className="text-black" />
                <span className="font-bold">Stock Courses</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/codingcoursespage"
                className="bg-yellow-800 hover:bg-yellow-900 text-black px-8 py-3 rounded-md shadow-md flex items-center space-x-2"
              >
                <AiOutlineCode className="text-black" />
                <span className="font-bold">Coding Courses</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
     
      
    </>
  );
};

export default HeroPage;
