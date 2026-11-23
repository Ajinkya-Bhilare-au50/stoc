import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRightIcon, ChartBarIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import heroBg from "./images/hero-bg.jpg";
import { ROUTES } from "../config/routes";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const TRUST = [
  { value: "4.5", label: "average rating", icon: StarIcon },
  { value: "1,000+", label: "students taught" },
  { value: "Online & offline", label: "batches" },
];

export default function HeroPage() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      {/* Background: chart image under a dark gradient so text stays readable */}
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-60"
        fetchpriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-canvas via-canvas/90 to-canvas/40"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-canvas to-transparent"
        aria-hidden
      />

      <motion.div
        className="container-page flex min-h-[560px] flex-col justify-center py-20 sm:min-h-[640px] lg:py-28"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p variants={item} className="eyebrow">
          Stock market &amp; coding education
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          Master stock market dynamics
          <span className="block text-ink-muted">with mentors who trade.</span>
        </motion.h1>
        <motion.p variants={item} className="lead mt-6 max-w-xl">
          Practical courses in trading, investing, F&amp;O and web development — structured for beginners,
          with live batches and real-market examples.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to={ROUTES.stockCourses} className="btn btn-primary btn-lg">
            <ChartBarIcon className="h-5 w-5" aria-hidden />
            Stock market courses
          </Link>
          <Link to={ROUTES.codingCourses} className="btn btn-outline btn-lg">
            <CodeBracketIcon className="h-5 w-5" aria-hidden />
            Coding courses
          </Link>
        </motion.div>

        <motion.dl variants={item} className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          {TRUST.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2">
              <dt className="sr-only">{label}</dt>
              <dd className="flex items-center gap-1.5 font-semibold text-ink">
                {Icon && <Icon className="h-4 w-4 text-warn" aria-hidden />}
                {value}
              </dd>
              <span className="text-ink-muted">{label}</span>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={item} className="mt-10">
          <Link
            to={ROUTES.market}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink"
          >
            See today's NSE market overview
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
