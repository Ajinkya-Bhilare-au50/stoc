import React, { useState } from "react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const blogs = [
    {
      title: "Introduction to React Hooks",
      category: "Coding",
      date: "June 1, 2024",
      author: "John Doe",
      content:
        "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to simplify code and eliminate the need for class components. Some commonly used hooks include useState, useEffect, and useContext. By using hooks, you can easily manage state and side effects in your components, leading to cleaner and more maintainable code.",
      image:
        "https://media.licdn.com/dms/image/D4D12AQEPzbrDMI04IQ/article-cover_image-shrink_600_2000/0/1688247700191?e=2147483647&v=beta&t=5cs3mf1GOxMA6IJyfAbU9pIgY5GhxXFuSJTskCJaSE4",
    },
    {
      title: "Getting Started with Python",
      category: "Coding",
      date: "June 5, 2024",
      author: "Jane Smith",
      content:
        "Python is a versatile and beginner-friendly programming language known for its readability and simplicity. To get started with Python, you need to install Python on your machine and set up a code editor like VSCode or PyCharm. Python's syntax is straightforward, making it easy to learn for beginners. You can begin by learning basic concepts such as variables, data types, functions, and control structures. Once you are comfortable with the basics, you can explore libraries and frameworks for web development, data analysis, and more.",
      image:
        "https://www.shutterstock.com/image-photo/python-programming-language-programing-workflow-260nw-1846209262.jpg",
    },
    {
      title: "Responsive Websites with CSS Grid",
      category: "Coding",
      date: "June 10, 2024",
      author: "Alice Johnson",
      content:
        "CSS Grid is a powerful layout system that allows you to create complex and responsive web layouts with ease. It provides a grid-based structure, enabling you to define rows and columns and place items within the grid. With CSS Grid, you can create flexible and adaptive designs that work across different screen sizes. By using properties like grid-template-columns, grid-template-rows, and gap, you can control the layout and spacing of elements. Additionally, CSS Grid supports features like grid areas and alignment, making it a versatile tool for modern web design.",
      image:
        "https://miro.medium.com/v2/resize:fit:2000/0*qe5keHwkCPQD8v2U.png",
    },
    {
      title: "Understanding Stock Market Trends",
      category: "Stock Market",
      date: "June 15, 2024",
      author: "Michael Brown",
      content:
        "Understanding stock market trends is essential for making informed investment decisions. Stock market trends can be categorized into three types: uptrends, downtrends, and sideways trends. Uptrends indicate a period of rising stock prices, while downtrends signify declining prices. Sideways trends occur when stock prices move within a narrow range. Analyzing trends involves studying price patterns, volume, and other technical indicators. By identifying trends, investors can develop strategies to capitalize on market movements and make profitable trades. Staying updated with market news and conducting thorough research are key to understanding and leveraging stock market trends.",
      image:
        "https://img.etimg.com/thumb/height-450,width-600,imgsize-62466,msid-107896739/stock-market-highlights-how-to-read-nifty-price-momentum-indicators-for-fridays-trade.jpg",
    },
  ];

  const handleReadMore = (index) => {
    setExpandedBlogIndex(index === expandedBlogIndex ? null : index);
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform ${
              expandedBlogIndex === index
                ? "bg-yellow-50 w-full"
                : "hover:scale-105"
            }`}
            variants={itemVariants}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-500 mb-2 italic">{blog.category}</p>
              <p className="text-gray-400 mb-2">{blog.date}</p>
              <p className="text-gray-400 mb-4">by {blog.author}</p>
              <div className="overflow-hidden">
                <p className="text-gray-800 mb-4">
                  {expandedBlogIndex === index
                    ? blog.content
                    : `${blog.content.substring(0, 100)}...`}
                </p>
              </div>
              <button
                onClick={() => handleReadMore(index)}
                className="text-blue-600 hover:underline mt-auto self-start"
              >
                {expandedBlogIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;
