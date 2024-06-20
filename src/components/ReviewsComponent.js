import React from "react";

import { FaStar } from "react-icons/fa";
import ReviewsUser from "./ReviewsUser";

const reviewsData = [
  {
    name: "Radhika S.",
    rating: 3.5,
    reviewContent:
      "Initially it was a good start as I learnt a lot of good concepts. However, for beginner level, the course got too detailed towards the end. I would also suggest giving more exercises where one could apply the learnings rather than just quizzes.",
    imageUrl:
      "https://www.hrw.org/sites/default/files/styles/square/public/media_2022/04/202203asia_shivani_photo.jpg?h=a7e6d17b&itok=wehPfhaH",
  },
  {
    name: "Yogesh A.",
    rating: 4,
    reviewContent:
      "Good for beginner level. It would be helpful if an excel can be provided with all formulas and framework points, and example for later reference and use.",
  },
  {
    name: "Alok S.",
    rating: 4.5,
    reviewContent:
      "Course is more on practical rather theoretical, It helps on screening stocks ",
  },
  {
    name: "Anurag M.",
    rating: 4.5,
    reviewContent:
      "More exercises on ratios are required and information about some software/tools to create own investment framework based on principles taught in the course could have been added.",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQFVx-V6Ixgt5g/profile-displayphoto-shrink_200_200/0/1667603591916?e=2147483647&v=beta&t=s8SZESf9DpO47kpOWG72uuibwDLAnrI8PrMriz5CqWM",
  },
  {
    name: "Sujith R.",
    rating: 5,
    reviewContent:
      "First 4 chapters could be more illustrative than going by definitions of market terms. I liked section 5, 6, 7 where concepts are explained with good illustrations and examples. Expected explanation on charts",
    imageUrl: "",
  },
  {
    name: "Harkesh D.",
    rating: 3.5,
    reviewContent:
      "Wonderful course...got what i expected from the course...i will definitely recommend this everyone who wants to invest in stock market",
    imageUrl: "",
  },
  {
    name: "Sudhir A.",
    rating: 4.5,
    reviewContent:
      "I liked Graham's Framework. The course had little to do with investing. I went through this course very carefully. Very few insights and a whole lot of theory and jargon.",
    imageUrl: "",
  },
  {
    name: "Ankit S.",
    rating: 4.0,
    reviewContent:
      "So this could be the best starter for the stock market, since I have been investing in the market since last 3-4 years now still this is really informative and you can take this course if you wanna get yourself equipped with the value investing ideas.",
    imageUrl: "",
  },
  {
    name: "Deepak S.",
    rating: 2.5,
    reviewContent:
      "I recently completed the course and I must say, it exceeded my expectations in every way. The coverage of the topics was comprehensive, ensuring that all the crucial aspects were thoroughly explained. The pace of the course was perfect, striking a fine balance between being informative and engaging",
    imageUrl: "",
  },

  {
    name: "Nisar F.",
    rating: 5,
    reviewContent:
      "I am a beginner and its good learning. new concept learned , doubts cleared. Hope this course will help to buy good business",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:2400/1*8gue6aIsPhY82XRPfHPNDQ@2x.jpeg",
  },
  {
    name: "Abderrahmane D",
    rating: 4.5,
    reviewContent:
      "Elaborate and clear. Mr. Utmani did a great job in explaining all concepts surrounding value investing. He often goes even further to give additional suggestions and good advise.",
    imageUrl: "",
  },
  {
    name: "Anurag M.",
    rating: 4.5,
    reviewContent:
      "More exercises on ratios are required and information about some software/tools to create own investment framework based on principles taught in the course could have been added.",
    imageUrl: "",
  },
  {
    name: "Priya K.",
    rating: 5,
    reviewContent:
      "The course was incredibly informative and well-structured. The instructor was very knowledgeable and explained concepts clearly.",
    imageUrl: "",
  },
  {
    name: "Ravi S.",
    rating: 4,
    reviewContent:
      "Great course overall, but I would have liked more real-world examples and case studies.",
    imageUrl: "",
  },
  {
    name: "Sunita R.",
    rating: 3.5,
    reviewContent:
      "The course was good, but it moved a bit too fast for beginners. Additional beginner-friendly resources would be helpful.",
    imageUrl: "",
  },
  {
    name: "Amit T.",
    rating: 4.8,
    reviewContent:
      "Excellent course! The hands-on exercises and quizzes really helped reinforce the material.",
    imageUrl: "",
  },
  {
    name: "Neha G.",
    rating: 4.2,
    reviewContent:
      "Very detailed and comprehensive course. I learned a lot about stock market analysis and investment strategies.",
    imageUrl: "",
  },
  {
    name: "Rajesh P.",
    rating: 3.8,
    reviewContent:
      "The content was good, but I think the course could benefit from more interactive elements and community support.",
    imageUrl: "",
  },
  {
    name: "Sneha V.",
    rating: 4.7,
    reviewContent:
      "Loved the course! The instructor's passion for the subject was evident and made the learning experience enjoyable.",
    imageUrl: "",
  },
  {
    name: "Vikram B.",
    rating: 4.3,
    reviewContent:
      "The course provided a solid foundation in investment principles, but I wish there were more advanced topics covered.",
    imageUrl: "",
  },
  {
    name: "Anjali N.",
    rating: 4.9,
    reviewContent:
      "Fantastic course! The practical tips and real-world applications were especially valuable.",
    imageUrl: "",
  },
  {
    name: "Karan L.",
    rating: 4.1,
    reviewContent:
      "Good course with useful content. However, the videos could be more engaging and less monotonous.",
    imageUrl: "",
  },
  // Add more review objects as needed
];
function ReviewsComponent() {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">
          <div className="flex justify-cent items-center pl-2 gap-2 ">
            <FaStar size={20} color="#FAB000" />
            <div>4.7 Course Reviews</div>
          </div>
        </h2>
        {reviewsData.map((review, index) => (
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
  );
}

export default ReviewsComponent;
