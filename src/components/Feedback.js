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
      className="m-4 bg-customGray w-80 hover:shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border border-gray-300"
        variants={itemVariants}
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
            className="flex flex-col gap-1"
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
                {[...Array(rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 text-customYellow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
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
        <div className="mb-2 p-4 sm:p-0 h-32">
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
