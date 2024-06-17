import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogB from "./blogs/BlogB.js";
import BlogA from "./blogs/BlogA.js";
import Blog1 from "./blogs/Blog1.js";
import Blog2 from "./blogs/Blog2.js";
import Blog3 from "./blogs/Blog3.js";
import Blog4 from "./blogs/Blog4.js";
import GrowthMindsetBlog from "./blogs/GrowthMindsetBlog.js";
import TraderBlog from "./blogs/TraderBlog.js";
import PortfolioBlog from "./blogs/PortfolioBlog.js";

const BlogPage = () => {
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

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
      title: "Understanding Blockchain Technology",
      author: "John Doe",
      date: "June 15, 2024",
      content:
        "Blockchain is a decentralized digital ledger technology that records transactions across multiple computers. It offers transparency, security, and immutability.",
    },
    {
      title: "The Future of Artificial Intelligence",
      author: "Jane Smith",
      date: "June 14, 2024",
      content:
        "AI is revolutionizing industries with advancements in machine learning, natural language processing, and computer vision.",
    },
    {
      title: "Exploring Quantum Computing",
      author: "Alex Johnson",
      date: "June 13, 2024",
      content:
        "Quantum computing harnesses quantum mechanics to perform complex calculations exponentially faster than classical computers, promising breakthroughs in cryptography and optimization.",
    },
    {
      title: "Cybersecurity Best Practices for Businesses",
      author: "Emily Brown",
      date: "June 12, 2024",
      content:
        "As cyber threats evolve, businesses must implement robust cybersecurity measures including encryption, multi-factor authentication, and regular security audits.",
    },
    {
      title: "The Rise of Digital Payments",
      author: "Michael Davis",
      date: "June 11, 2024",
      content:
        "Digital payments are reshaping the financial landscape, offering convenience, security, and accessibility to consumers worldwide.",
    },
    {
      title: "Cloud Computing: Benefits and Challenges",
      author: "Sarah Wilson",
      date: "June 10, 2024",
      content:
        "Cloud computing enables scalable, on-demand access to computing resources, but organizations must address security, compliance, and data management challenges.",
    },
    {
      title: "Advancements in Biotechnology",
      author: "Chris Thompson",
      date: "June 9, 2024",
      content:
        "Biotechnology innovations are transforming healthcare, agriculture, and environmental sustainability with gene editing, synthetic biology, and personalized medicine.",
    },
    {
      title: "The Impact of 5G Technology",
      author: "Jessica Lee",
      date: "June 8, 2024",
      content:
        "5G technology promises ultra-fast speeds, low latency, and connectivity for IoT devices, driving innovation in autonomous vehicles, smart cities, and telemedicine.",
    },
    {
      title: "E-commerce Trends in a Digital Era",
      author: "David Miller",
      date: "June 7, 2024",
      content:
        "E-commerce is evolving with mobile shopping, AI-powered recommendations, and omnichannel experiences, shaping the future of retail and consumer behavior.",
    },
    {
      title: "The Art of User Experience Design",
      author: "Jennifer White",
      date: "June 6, 2024",
      content:
        "UX design focuses on creating intuitive, engaging digital experiences that meet user needs, drive conversions, and foster brand loyalty.",
    },
    {
      title: "Sustainable Practices in Green Energy",
      author: "Mark Green",
      date: "June 5, 2024",
      content:
        "Green energy initiatives promote renewable resources, energy efficiency, and carbon neutrality, addressing climate change and environmental conservation.",
    },
    {
      title: "Innovative Trends in Robotics",
      author: "Sam Robinson",
      date: "June 4, 2024",
      content:
        "Robotics advancements include AI-driven robots, collaborative robots (cobots), and applications in healthcare, manufacturing, and space exploration.",
    },
  ];

  const handleReadMore = (index) => {
    setExpandedBlogIndex(index === expandedBlogIndex ? null : index);
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
    <div>
      <div className="flex flex-col bg-gray-200 sm:flex-row justify-center items-center">
        <div className="w-full sm:w-3/4 order-1 sm:order-2">
          <BlogA />
          <BlogB />
          <GrowthMindsetBlog />
          <TraderBlog />
          <PortfolioBlog/>
          <Blog1 />
          <Blog2 />
          <Blog3 />
          <Blog4 />
          <motion.div
            className="w-full mx-auto px-4 py-8 bg-white rounded-lg shadow-lg border border-gray-200"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
              Latest Blogs
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform ${
                    expandedBlogIndex === index
                      ? "bg-yellow-50"
                      : "hover:scale-105"
                  }`}
                  variants={itemVariants}
                  onClick={() => handleReadMore(index)}
                >
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-gray-700 mb-4">
                      By {blog.author} on {blog.date}
                    </p>
                    {expandedBlogIndex === index ? (
                      <p className="text-gray-800">{blog.content}</p>
                    ) : (
                      <button className="text-blue-600 hover:underline">
                        Read More
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
