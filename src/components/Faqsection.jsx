import { useId, useState } from "react";
import { Link } from "react-router";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Collapse from "./ui/Collapse";
import { ROUTES } from "../config/routes";

const faqData = [
  {
    question: "What coding languages are taught in the courses?",
    answer:
      "Our coding courses cover a wide range of languages, including JavaScript, Python, Java, HTML/CSS, and more. Each course focuses on practical skills and real-world projects.",
    isOpen: false,
  },
  {
    question: "Do I need any prior experience to enroll in a coding course?",
    answer:
      "No prior experience is required for most of our coding courses. We offer beginner-friendly courses as well as advanced topics for experienced developers.",
    isOpen: false,
  },
  {
    question: "Can I get a certificate upon completion of a coding course?",
    answer:
      "Yes, we provide certificates of completion for our coding courses. These certificates can be valuable for showcasing your skills to employers.",
    isOpen: false,
  },
  {
    question: "What topics are covered in the trading courses?",
    answer:
      "Our trading courses cover a range of topics, including technical analysis, fundamental analysis, risk management, trading strategies, and market psychology.",
    isOpen: false,
  },
  {
    question: "Are the trading courses suitable for beginners?",
    answer:
      "Yes, we offer trading courses tailored for beginners. These courses provide a solid foundation in trading concepts and strategies.",
    isOpen: false,
  },
  {
    question:
      "Do I need any special software or tools for the trading courses?",
    answer:
      "While not mandatory, having access to trading platforms and financial analysis tools can enhance your learning experience in our trading courses.",
    isOpen: false,
  },
];

function FaqItem({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className="border-b border-line last:border-b-0">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink transition-colors hover:text-accent"
        >
          {item.question}
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted">
            {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
          </span>
        </button>
      </h3>
      <Collapse open={open} id={id}>
        <p className="pb-5 pr-10 text-sm leading-6 text-ink-muted">{item.answer}</p>
      </Collapse>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="FAQsection" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h1 className="page-title mt-2">Frequently asked questions</h1>
          <p className="lead mt-4">Everything you need to know about our coding and trading courses.</p>
          <div className="card mt-8 hidden lg:block">
            <p className="card-title">Still have questions?</p>
            <p className="card-desc">Our team usually replies within a day.</p>
            <Link to={ROUTES.contact} className="btn btn-primary mt-4">Contact us</Link>
          </div>
        </div>
        <div className="card py-1 sm:py-1">
          {faqData.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex((cur) => (cur === index ? -1 : index))}
            />
          ))}
        </div>
        <div className="card lg:hidden">
          <p className="card-title">Still have questions?</p>
          <p className="card-desc">Our team usually replies within a day.</p>
          <Link to={ROUTES.contact} className="btn btn-primary mt-4">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
