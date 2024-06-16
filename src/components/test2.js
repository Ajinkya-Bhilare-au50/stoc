import React from "react";
import { motion } from "framer-motion";

const Feedback = ({ name, role, avatarUrl, rating, content }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      className="m-4 bg-customGray w-full sm:w-80 hover:shadow-lg" // Adjust width for mobile responsiveness
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ height: "300px" }}
    >
      <motion.div
        className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border border-gray-300"
        variants={itemVariants}
        style={{ height: "100%" }}
      >
        <div className="mx-4 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-4 sm:pb-8 text-gray-700 shadow-none">
          <motion.img
            src={avatarUrl}
            alt={name}
            className="inline-block h-12 w-12 rounded-full object-cover object-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div
            className="flex flex-col gap-1 w-full" // Ensure full width for mobile
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.h5
                className="block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {name}
              </motion.h5>
              <motion.div
                className="flex items-center px-2 gap-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    aria-hidden="true"
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      index < rating ? "text-customYellow" : "text-gray-400"
                    }`} // Responsive size and color for rating stars
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2l3.09 6.367L22 9.259l-5.396 5.255L18.182 22 12 17.434 5.818 22l1.578-7.486L2 9.259l6.91-0.892L12 2z"
                    />
                  </svg>
                ))}
              </motion.div>
            </motion.div>
            <motion.p
              className="block font-sans text-sm font-light leading-relaxed text-blue-gray-900 antialiased"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {role}
            </motion.p>
          </motion.div>
        </div>
        <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
        <div className="mb-2 p-4 sm:p-0 overflow-auto max-h-40">
          <motion.p
            className="p-4 block font-sans text-sm font-light leading-relaxed text-inherit antialiased"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            "{content}"
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Feedback;
