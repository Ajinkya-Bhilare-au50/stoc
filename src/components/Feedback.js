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
  // Calculate the height of the content dynamically
  const getHeight = (content) => {
    const lineHeight = 1.5; // Adjust based on your font size and line height
    const lines = content.split("\n").length;
    return `${lines * lineHeight}em`; // Convert to em units for better responsiveness
  };

  return (
    <motion.div
      className="m-2 bg-White w-full sm:w-80 " // Adjust width for mobile responsiveness
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ minHeight: "300px", height: getHeight(content) }} // Set dynamic height based on content length
    >
      <motion.div
        className="relative flex flex-col rounded-xl bg-transparent  text-gray-700 shadow-none "
        variants={itemVariants}
        style={{ height: "100%" }}
      >
        <div className="p-4">
          <div className="flex items-center gap-4 overflow-hidden mb-4">
            <motion.img
              src={avatarUrl}
              alt={name}
              className="inline-block h-12 w-12 rounded-full object-cover object-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="flex flex-col flex-grow" // Take remaining width for mobile
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h5
                className="block font-semibold text-lg mb-1 text-blue-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {name}
              </motion.h5>
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    aria-hidden="true"
                    className={`h-4 w-4 ${
                      index < rating ? "text-customYellow" : "text-gray-400"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
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
          </div>
          <motion.p
            className="block font-light text-sm leading-relaxed mb-2 text-blue-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {role}
          </motion.p>
          <motion.div
            className="p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.p
              className="block font-light text-sm leading-relaxed text-blue-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              "{content}"
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Feedback;
