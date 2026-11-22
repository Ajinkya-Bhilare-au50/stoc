import React from "react";

import { FaStar } from "react-icons/fa";
import ReviewsUser from "./ReviewsUser";

const codingReviewsData = [
  {
    name: "Aryan P.",
    rating: 4.2,
    reviewContent:
      "The course was very comprehensive and covered all the basics of Python programming. The instructor explained the concepts clearly, but I would have liked more real-world examples to apply the knowledge.",
    imageUrl: "",
  },
  {
    name: "Neha M.",
    rating: 4.7,
    reviewContent:
      "Great course for beginners! The hands-on projects were very helpful in understanding the concepts. However, the pace was a bit fast in some sections.",
    imageUrl: "",
  },
  {
    name: "Rajiv K.",
    rating: 4.0,
    reviewContent:
      "Good introduction to JavaScript. The exercises were well-structured, but I would suggest adding more challenging problems for advanced learners.",
    imageUrl: "",
  },
  {
    name: "Simran L.",
    rating: 4.8,
    reviewContent:
      "Excellent course! The instructor was very knowledgeable and the projects were engaging. I learned a lot about web development using HTML, CSS, and JavaScript.",
    imageUrl: "",
  },
  {
    name: "Ravi K.",
    rating: 4.5,
    reviewContent:
      "The course provided a solid foundation in Python programming. The exercises and projects were well thought out and helped reinforce the concepts.",
    imageUrl: "",
  },
  {
    name: "Anjali P.",
    rating: 4.3,
    reviewContent:
      "Good course overall. The instructor explained the concepts clearly, but I would have liked more advanced topics to be covered.",
    imageUrl: "",
  },
  {
    name: "Manish T.",
    rating: 4.7,
    reviewContent:
      "Great course for learning JavaScript. The hands-on projects were very helpful, and the instructor's explanations were easy to follow.",
    imageUrl: "",
  },
  {
    name: "Sneha R.",
    rating: 4.0,
    reviewContent:
      "The course content was good, but some sections felt a bit rushed. More in-depth explanations would be helpful.",
    imageUrl: "",
  },
  {
    name: "Arjun S.",
    rating: 4.6,
    reviewContent:
      "I enjoyed the course a lot. The instructor was engaging and the projects were very practical. Learned a lot about front-end development.",
    imageUrl: "",
  },
  {
    name: "Priya V.",
    rating: 4.9,
    reviewContent:
      "Excellent course! The instructor's passion for coding was evident and made the learning experience enjoyable. Highly recommend for beginners.",
    imageUrl: "",
  },
  {
    name: "Rahul D.",
    rating: 4.1,
    reviewContent:
      "Good introduction to web development. The projects were interesting, but more real-world examples would have been nice.",
    imageUrl: "",
  },
  {
    name: "Kavita M.",
    rating: 3.8,
    reviewContent:
      "The course was informative, but the pace was a bit too fast for beginners. Additional resources for beginners would be beneficial.",
    imageUrl: "",
  },
  {
    name: "Amit J.",
    rating: 4.4,
    reviewContent:
      "Great course with a lot of useful content. The instructor was very knowledgeable and the projects were well designed.",
    imageUrl: "",
  },
  {
    name: "Nisha G.",
    rating: 4.2,
    reviewContent:
      "Learned a lot from this course. The instructor explained the concepts clearly and the projects were very helpful in understanding the material.",
    imageUrl: "",
  },
  {
    name: "Vikram S.",
    rating: 3.9,
    reviewContent:
      "The course content was good, but the instructor's teaching style was a bit monotonous. More interactive sessions would have made the learning experience better.",
    imageUrl: "",
  },
];

function CodingReviews() {
  return (
    <div>
      <div>
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">
            <div className="flex justify-cent items-center pl-2 gap-2 ">
              <FaStar size={20} color="#FAB000" />
              <div>4.7 Course Reviews</div>
            </div>
          </h2>
          {codingReviewsData.map((review, index) => (
            <ReviewsUser
              key={index}
              name={review.name}
              rating={review.rating}
              reviewContent={review.reviewContent}
              imageUrl={review.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CodingReviews;
