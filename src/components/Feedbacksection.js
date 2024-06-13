import React from "react";
import Feedback from "./Feedback";

function Feedbacksection() {
  // Array of testimonial data objects
  const testimonialDataArray = [
    {
      name: "Tania Andrew",
      role: "Frontend Lead @ Google",
      avatarUrl:
        "https://i.pinimg.com/originals/ac/f1/4e/acf14e593ef673ce81c1057040c3c897.jpg",
      rating: 5,
      content:
        "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      avatarUrl:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
      rating: 4,
      content:
        "Creative Tim's products have greatly improved our project's UI/UX. Highly recommended!",
    },
    {
      name: "Anjali Patel",
      role: "Product Manager",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZFCU4yspu_jxm-Zno7VXTD6K_5BMBwQRAw&usqp=CAU",
      rating: 4,
      content:
        "The courses are extremely informative and practical. They have helped me advance in my career!",
    },
    {
      name: "Vikram Gupta",
      role: "Data Scientist",
      avatarUrl:
        "https://images.pexels.com/photos/2590287/pexels-photo-2590287.jpeg?cs=srgb&dl=pexels-okaybhargav-2590287.jpg&fm=jpg",
      rating: 4,
      content:
        "I've learned so much from these courses. The instructors are top-notch and the content is very engaging.",
    },
    {
      name: "Priya Mehta",
      role: "UI/UX Designer",
      avatarUrl:
        "https://i.pinimg.com/236x/59/a9/b8/59a9b8a7a40ea4ebbce8f3fa9a745e51.jpg",
      rating: 4,
      content:
        "Creative Tim's products have been a game-changer for my projects. The UI/UX is simply amazing!",
    },
    {
      name: "Amit Verma",
      role: "Full Stack Developer",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      content:
        "The courses provided by Creative Tim are very detailed and easy to follow. They have significantly improved my coding skills.",
    },
    {
      name: "Sneha Rao",
      role: "Graphic Designer",
      avatarUrl:
        "https://qph.cf2.quoracdn.net/main-qimg-4effc688bcf20e8c8593e98ab9280f39-lq",
      rating: 4,
      content:
        "Creative Tim's design resources are top-notch. They have elevated my work to a professional level.",
    },
    {
      name: "Rohan Singh",
      role: "Project Manager",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      content:
        "The structured courses and comprehensive materials have helped me manage my projects more effectively.",
    },
    // Add more testimonial objects as needed
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h1 className=" bg-gray-100 text-center text-3xl font-bold ">
        Testimonial
      </h1>
      <div className="flex justify-center flex-wrap bg-gray-100 p-4  rounded-lg shadow-md">
        {testimonialDataArray.map((testimonial, index) => (
          <Feedback
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            avatarUrl={testimonial.avatarUrl}
            rating={testimonial.rating}
            content={testimonial.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Feedbacksection;
