import Feedback from "./Feedback";

function Feedbacksection() {
  const testimonialDataArray = [
    {
      name: "Tania Andrew",
      role: "Frontend Lead @ Google",
      avatarUrl: "https://i.pinimg.com/originals/ac/f1/4e/acf14e593ef673ce81c1057040c3c897.jpg",
      rating: 5,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content:
        "My stock market Learning journey has taken off after I joined here. All strategies are good and helped me recover my fees during the course itself. Go for the course.",
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      avatarUrl:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
      rating: 4,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content:
        "To Be Honest Best Place To Kickstart Your Trading Journey.Ajinkya Sir Is Best in Technical Psychology And Very Kind and Helpful,So Join for the best Technicals.Go Ahead without any 2nd thought.☺️✨. Highly recommended!",
    },
    {
      name: "Anjali Patel",
      role: "Product Manager",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZFCU4yspu_jxm-Zno7VXTD6K_5BMBwQRAw&usqp=CAU",
      rating: 4,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content:
        "I am confident in both equity and FNO trading. Definitely recommended. Best place in Navi Mumbai to learn trading.The courses are extremely informative and practical. They have helped me advance in my career!",
    },
    {
      name: "Vikram Gupta",
      role: "Data Scientist",
      avatarUrl:
        "https://images.pexels.com/photos/2590287/pexels-photo-2590287.jpeg?cs=srgb&dl=pexels-okaybhargav-2590287.jpg&fm=jpg",
      rating: 4,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content:
        "I've learned so much from these courses. The instructors are top-notch and the content is very engaging.",
    },
    {
      name: "Priya Mehta",
      role: "UI/UX Designer",
      avatarUrl: "https://i.pinimg.com/236x/59/a9/b8/59a9b8a7a40ea4ebbce8f3fa9a745e51.jpg",
      rating: 4,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content:
        "consistent profits. He is available during live trades and also post market. Every penny paid is worth!!. The Coding is simply amazing!",
    },
    {
      name: "Amit Verma",
      role: "Full Stack Developer",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content:
        "I understand the stock market in much better right now. He has not only passed on his knowledge but also clarified all my doubts, be they seem to e smallest all silliest, he has encouraged me to ask again and again so that everything is properly clear in my mind. ",
    },
    {
      name: "Sneha Rao",
      role: "Graphic Designer",
      avatarUrl: "https://qph.cf2.quoracdn.net/main-qimg-4effc688bcf20e8c8593e98ab9280f39-lq",
      rating: 4,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content: "Sniper design resources are top-notch. They have elevated my work to a professional level.",
    },
    {
      name: "Rohan Singh",
      role: "Project Manager",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      googleicon: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
      content:
        "The structured courses and comprehensive materials have helped me manage my projects more effectively.",
    },
    // Add more testimonial objects as needed
  ];

  const average = (
    testimonialDataArray.reduce((s, t) => s + t.rating, 0) / testimonialDataArray.length
  ).toFixed(1);

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Student reviews</p>
            <h1 className="page-title mt-2">What our learners say</h1>
            <p className="lead mt-3 max-w-2xl">Traders and developers who learned with Sniper Coding.</p>
          </div>
          <div className="card flex items-center gap-3 px-5 py-3 sm:p-4">
            <span className="text-3xl font-bold tabular-nums text-ink">{average}</span>
            <span className="text-sm text-ink-muted">
              average rating
              <br />
              from {testimonialDataArray.length} reviews
            </span>
          </div>
        </div>
        <div className="mt-10 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {testimonialDataArray.map((testimonial) => (
            <div key={testimonial.name} className="mb-6 break-inside-avoid">
              <Feedback {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedbacksection;
