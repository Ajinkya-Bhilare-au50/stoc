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
       "My stock market Learning journey has taken off after I joined here. All strategies are good and helped me recover my fees during the course itself. Go for the course.",
   },
   {
     name: "Rahul Sharma",
     role: "Software Engineer",
     avatarUrl:
       "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
     rating: 4,
     content:
       "To Be Honest Best Place To Kickstart Your Trading Journey.Ajinkya Sir Is Best in Technical Psychology And Very Kind and Helpful,So Join for the best Technicals.Go Ahead without any 2nd thought.☺️✨. Highly recommended!",
   },
   {
     name: "Anjali Patel",
     role: "Product Manager",
     avatarUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZFCU4yspu_jxm-Zno7VXTD6K_5BMBwQRAw&usqp=CAU",
     rating: 4,
     content:
       "I am confident in both equity and FNO trading. Definitely recommended. Best place in Navi Mumbai to learn trading.The courses are extremely informative and practical. They have helped me advance in my career!",
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
       "consistent profits. He is available during live trades and also post market. Every penny paid is worth!!. The Coding is simply amazing!",
   },
   {
     name: "Amit Verma",
     role: "Full Stack Developer",
     avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
     rating: 5,
     content:
       "I understand the stock market in much better right now. He has not only passed on his knowledge but also clarified all my doubts, be they seem to e smallest all silliest, he has encouraged me to ask again and again so that everything is properly clear in my mind. ",
   },
   {
     name: "Sneha Rao",
     role: "Graphic Designer",
     avatarUrl:
       "https://qph.cf2.quoracdn.net/main-qimg-4effc688bcf20e8c8593e98ab9280f39-lq",
     rating: 4,
     content:
       "Sniper design resources are top-notch. They have elevated my work to a professional level.",
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
      <h1 className="text-center text-3xl font-bold">Testimonial</h1>
      <div className="flex flex-wrap justify-center bg-red-100 p-4 rounded-lg shadow-md max-h-full overflow-y-auto">
        {testimonialDataArray.map((testimonial, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="w-full h-full flex items-center justify-center bg-white p-4 rounded-lg shadow-lg">
              <Feedback
                name={testimonial.name}
                role={testimonial.role}
                avatarUrl={testimonial.avatarUrl}
                rating={testimonial.rating}
                content={testimonial.content}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedbacksection;
