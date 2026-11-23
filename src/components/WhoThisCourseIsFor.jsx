import ChecklistSection from "../features/courses/ChecklistSection";

const WhoThisCourseIsFor = () => {
  const targetAudience = [
    "This course is ideal for anyone looking to quickly get started in stock market trading or investing.",
    "This course is probably not for you if you are CFA, FRM, or CMT qualified.",
  ];

  return <ChecklistSection eyebrow="Audience" title="Who this course is for" items={targetAudience} />;
};

export default WhoThisCourseIsFor;
