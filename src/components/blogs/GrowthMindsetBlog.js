import React from "react";

const GrowthMindsetBlog = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Embracing a Growth Mindset: The Path to Continuous Improvement
      </h1>
      <div className="flex flex-col gap-6 mb-6">
        <img
          className="w-full h-96 object-contain rounded"
          src="https://img.freepik.com/premium-photo/ambitious-business-man-climbing-stairs-success_31965-3080.jpg"
          alt="Growth Mindset"
        />
        <p className="text-gray-700 leading-relaxed">
          A growth mindset is the belief that abilities and intelligence can be
          developed through dedication and hard work. This view creates a love
          of learning and resilience that is essential for great accomplishment.
          In contrast, a fixed mindset is the belief that abilities are static
          and unchangeable. Here, we'll explore how to cultivate a growth
          mindset and the benefits it brings.
        </p>
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Understanding the Growth Mindset
      </h2>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-1/3">
          <img
            className="w-full h-64 object-contain rounded"
            src="https://img.freepik.com/premium-vector/businessman-climb-success-ladder_8140-314.jpg"
            alt="Understanding Growth Mindset"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-700 leading-relaxed">
            The concept of a growth mindset was developed by psychologist Carol
            Dweck. It revolves around the idea that the brain is like a muscle
            that can grow stronger and more capable through effort and learning.
            People with a growth mindset embrace challenges, persist in the face
            of setbacks, see effort as the path to mastery, learn from
            criticism, and find inspiration in others' success.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Benefits of a Growth Mindset
      </h2>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-2/3">
          <p className="text-gray-700 leading-relaxed">
            Adopting a growth mindset can lead to several positive outcomes.
            These include increased motivation, improved performance, enhanced
            creativity, and greater resilience. People who believe in the
            possibility of growth are more likely to embrace lifelong learning
            and continuously seek out new opportunities to develop their skills
            and knowledge.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            className="w-full h-64 object-contain rounded"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-climbing-ladder-4730733-3926198.png?f=webp"
            alt="Benefits of Growth Mindset"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        How to Develop a Growth Mindset
      </h2>
      <div className="flex flex-col gap-6 mb-6">
        <img
          className="w-60 h-64 object-cover rounded"
          src="https://cdn-icons-png.flaticon.com/512/7096/7096022.png"
          alt="Developing Growth Mindset"
        />
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <strong>Embrace Challenges:</strong> View challenges as
            opportunities to learn and grow rather than obstacles.
          </li>
          <li>
            <strong>Persist Through Difficulties:</strong> Understand that
            effort and perseverance are essential to overcoming difficulties.
          </li>
          <li>
            <strong>Learn from Criticism:</strong> Use feedback and criticism as
            valuable tools for improvement.
          </li>
          <li>
            <strong>Celebrate Effort, Not Just Results:</strong> Focus on the
            process and effort put into learning, not just the outcomes.
          </li>
          <li>
            <strong>Find Inspiration in Others' Success:</strong> Let the
            success of others inspire and motivate you to reach your goals.
          </li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Developing a growth mindset is a journey that requires time, effort, and
        persistence. By adopting these principles, you can unlock your full
        potential and achieve greater success in all areas of life.
      </p>
      <p className="text-gray-700">
        <strong>Author:</strong> John Doe
      </p>
      <p className="text-gray-700">
        <strong>Date:</strong> June 15, 2024
      </p>
    </div>
  );
};

export default GrowthMindsetBlog;
