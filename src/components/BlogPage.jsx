import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRightIcon,
  BookOpenIcon,
  ChartBarIcon,
  LightBulbIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { POSTS } from "../features/blog/posts";
import { ROUTES } from "../config/routes";

const CATEGORY_STYLE = {
  "Investor stories": { icon: UserIcon, tone: "text-accent bg-accent/10" },
  Investing: { icon: ChartBarIcon, tone: "text-up bg-up/10" },
  Trading: { icon: BookOpenIcon, tone: "text-accent-2 bg-accent-2/10" },
  Mindset: { icon: LightBulbIcon, tone: "text-warn bg-warn/10" },
};

const QUICK_READS = [
  {
    title: "Understanding Blockchain Technology",
    author: "John Doe",
    date: "June 15, 2024",
    content:
      "Blockchain is a decentralized digital ledger technology that records transactions across multiple computers. It offers transparency, security, and immutability.",
  },
  {
    title: "The Future of Artificial Intelligence",
    author: "Jane Smith",
    date: "June 14, 2024",
    content:
      "AI is revolutionizing industries with advancements in machine learning, natural language processing, and computer vision.",
  },
  {
    title: "Exploring Quantum Computing",
    author: "Alex Johnson",
    date: "June 13, 2024",
    content:
      "Quantum computing harnesses quantum mechanics to perform complex calculations exponentially faster than classical computers, promising breakthroughs in cryptography and optimization.",
  },
  {
    title: "Cybersecurity Best Practices for Businesses",
    author: "Emily Brown",
    date: "June 12, 2024",
    content:
      "As cyber threats evolve, businesses must implement robust cybersecurity measures including encryption, multi-factor authentication, and regular security audits.",
  },
  {
    title: "The Rise of Digital Payments",
    author: "Michael Davis",
    date: "June 11, 2024",
    content:
      "Digital payments are reshaping the financial landscape, offering convenience, security, and accessibility to consumers worldwide.",
  },
  {
    title: "Cloud Computing: Benefits and Challenges",
    author: "Sarah Wilson",
    date: "June 10, 2024",
    content:
      "Cloud computing enables scalable, on-demand access to computing resources, but organizations must address security, compliance, and data management challenges.",
  },
  {
    title: "Advancements in Biotechnology",
    author: "Chris Thompson",
    date: "June 9, 2024",
    content:
      "Biotechnology innovations are transforming healthcare, agriculture, and environmental sustainability with gene editing, synthetic biology, and personalized medicine.",
  },
  {
    title: "The Impact of 5G Technology",
    author: "Jessica Lee",
    date: "June 8, 2024",
    content:
      "5G technology promises ultra-fast speeds, low latency, and connectivity for IoT devices, driving innovation in autonomous vehicles, smart cities, and telemedicine.",
  },
  {
    title: "E-commerce Trends in a Digital Era",
    author: "David Miller",
    date: "June 7, 2024",
    content:
      "E-commerce is evolving with mobile shopping, AI-powered recommendations, and omnichannel experiences, shaping the future of retail and consumer behavior.",
  },
  {
    title: "The Art of User Experience Design",
    author: "Jennifer White",
    date: "June 6, 2024",
    content:
      "UX design focuses on creating intuitive, engaging digital experiences that meet user needs, drive conversions, and foster brand loyalty.",
  },
  {
    title: "Sustainable Practices in Green Energy",
    author: "Mark Green",
    date: "June 5, 2024",
    content:
      "Green energy initiatives promote renewable resources, energy efficiency, and carbon neutrality, addressing climate change and environmental conservation.",
  },
  {
    title: "Innovative Trends in Robotics",
    author: "Sam Robinson",
    date: "June 4, 2024",
    content:
      "Robotics advancements include AI-driven robots, collaborative robots (cobots), and applications in healthcare, manufacturing, and space exploration.",
  },
];

function PostCard({ post, featured = false }) {
  const { icon: Icon, tone } = CATEGORY_STYLE[post.category] ?? CATEGORY_STYLE.Investing;
  return (
    <Link
      to={`${ROUTES.blog}/${post.slug}`}
      className={`card card-interactive group flex h-full flex-col ${featured ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-8" : ""}`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-tile ${tone} ${featured ? "h-40 w-full lg:h-48 lg:w-72" : "h-28 w-full"}`}
        aria-hidden
      >
        <Icon className={featured ? "h-14 w-14" : "h-9 w-9"} />
      </span>
      <div className={featured ? "mt-5 lg:mt-0" : "mt-5"}>
        <p className="flex items-center gap-2 text-xs text-ink-subtle">
          <span className="badge badge-neutral">{post.category}</span>
          {post.minutes} min read
        </p>
        <h2
          className={`mt-3 font-semibold text-ink group-hover:text-accent ${featured ? "text-2xl" : "text-lg"}`}
        >
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read article{" "}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

/** Blog index: featured + article grid, then short quick reads. */
const BlogPage = () => {
  const [openQuick, setOpenQuick] = useState(null);
  const [featured, ...rest] = POSTS;

  return (
    <>
      <section className="border-b border-line bg-surface/40">
        <div className="container-page py-10 sm:py-14">
          <p className="eyebrow">Blog</p>
          <h1 className="page-title mt-2">Insights for traders &amp; investors</h1>
          <p className="lead mt-3 max-w-2xl">
            Investor success stories, investing strategies and the mindset behind consistent results.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PostCard post={featured} featured />
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="container-page">
          <h2 className="section-title">Quick reads</h2>
          <p className="lead mt-2">Short briefs on technology shaping finance and business.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_READS.map((blog, index) => {
              const open = openQuick === index;
              return (
                <li key={blog.title} className="card flex flex-col">
                  <h3 className="text-base font-semibold text-ink">{blog.title}</h3>
                  <p className="mt-1 text-xs text-ink-subtle">
                    {blog.author} · {blog.date}
                  </p>
                  {open && <p className="mt-3 text-sm leading-6 text-ink-muted">{blog.content}</p>}
                  <button
                    type="button"
                    className="link mt-3 self-start text-sm"
                    aria-expanded={open}
                    onClick={() => setOpenQuick(open ? null : index)}
                  >
                    {open ? "Show less" : "Read more"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
