import React from "react";
import Feedback from "./Feedback";

function Feedbacksection() {
  // Array of testimonial data objects
  const testimonialDataArray = [
    {
      name: "Tania Andrew",
      role: "Frontend Lead @ Google",
      avatarUrl:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      rating: 5,
      content:
        "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      avatarUrl: "https://storage2.timheuer.com/boratcircle.png",
      rating: 4,
      content:
        "Creative Tim's products have greatly improved our project's UI/UX. Highly recommended!",
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
      rating: 4,
      content:
        "Creative Tim's products have greatly improved our project's UI/UX. Highly recommended!",
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      avatarUrl:
        "https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",
      rating: 4,
      content:
        "Creative Tim's products have greatly improved our project's UI/UX. Highly recommended!",
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVRR689h-rJJsTMJbY7w4zLP30xxYflNRy6HM164ZjtcJHhgL8su7kCJgBLqdJOx_2D4&usqp=CAU",
      rating: 4,
      content:
        "Creative Tim's products have greatly improved our project's UI/UX. Highly recommended!",
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
