import ChecklistSection from "../features/courses/ChecklistSection";

const WhyTakeThisCourse = () => {
  const courseBenefits = [
    "Learn how to start trading in the stock market.",
    "Understand the basics of shares or stocks.",
    "Gain knowledge about stock exchanges and how they function.",
    "Get insights into trading Futures & Options with limited funds.",
    "Learn how to choose a suitable stock broker for your trading needs.",
    "Receive guidance on how much money to invest in the stock market.",
    "Explore the concept of algorithmic trading and its relevance to your trading strategy.",
  ];

  return (
    <ChecklistSection eyebrow="Benefits" title="Why should I take this course?" items={courseBenefits} />
  );
};

export default WhyTakeThisCourse;
