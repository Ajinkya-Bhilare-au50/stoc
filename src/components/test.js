import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BlogB from "./blogs/BlogB.js";
import BlogA from "./blogs/BlogA.js";
import Blog1 from "./blogs/Blog1.js";
import Blog2 from "./blogs/Blog2.js";
import Blog3 from "./blogs/Blog3.js";
import Blog4 from "./blogs/Blog4.js";
import GrowthMindsetBlog from "./blogs/GrowthMindsetBlog.js";

const BlogPage = () => {
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
  const contentRefs = useRef([]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const blogs = [
    { component: <Blog1 />, title: "Blog One Title" },
    { component: <Blog2 />, title: "Blog Two Title" },
    { component: <BlogA />, title: "Another Blog Title" },
    // Add other blog components with custom titles here as needed
  ];

  const handleReadMore = (index) => {
    setExpandedBlogIndex(index === expandedBlogIndex ? null : index);
  };

  const handleBlogTitleClick = (index) => {
    setSelectedBlogIndex(index);
    // Scroll to the selected blog's content
    contentRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 h-screen">
      <div className="bg-blue-100 overflow-y-auto h-full p-5 lg:col-span-1 lg:h-auto lg:relative lg:sticky lg:top-0">
        {blogs.map((blog, index) => (
          <p
            key={index}
            className={`cursor-pointer p-2 rounded-lg ${
              selectedBlogIndex === index ? "bg-blue-200" : "bg-gray-100"
            }`}
            onClick={() => handleBlogTitleClick(index)}
          >
            {/* Use the custom title for each blog */}
            {blog.title}
          </p>
        ))}
      </div>
      <div className="bg-red-100 col-span-1 lg:col-span-4 overflow-y-auto h-full">
        {blogs.map((blog, index) => (
          <div key={index} ref={(el) => (contentRefs.current[index] = el)}>
            {selectedBlogIndex === index && (
              <motion.div
                className="w-full mx-auto px-4 py-8 bg-white rounded-lg shadow-lg border border-gray-200 overflow-y-auto"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {/* Render the selected blog component */}
                {blog.component}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
