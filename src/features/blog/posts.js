import { lazy } from "react";

/** Blog registry: one entry per article component in src/components/blogs. */
export const POSTS = [
  {
    slug: "rakesh-jhunjhunwala-success-story",
    title: "Rakesh Jhunjhunwala: The Success Story",
    excerpt: "From ₹5,000 in 1985 to India's 'Big Bull' — the investments and principles behind the journey.",
    category: "Investor stories",
    minutes: 4,
    Component: lazy(() => import("../../components/blogs/BlogA")),
  },
  {
    slug: "vijay-kedia-success-story",
    title: "Vijay Kedia: The Success Story",
    excerpt: "How one of India's most respected investors went from humble beginnings to market success.",
    category: "Investor stories",
    minutes: 4,
    Component: lazy(() => import("../../components/blogs/BlogB")),
  },
  {
    slug: "growth-mindset",
    title: "Embracing a Growth Mindset: The Path to Continuous Improvement",
    excerpt: "Why believing abilities can be developed changes how you learn, trade and handle setbacks.",
    category: "Mindset",
    minutes: 5,
    Component: lazy(() => import("../../components/blogs/GrowthMindsetBlog")),
  },
  {
    slug: "life-of-a-trader",
    title: "The Life of a Trader: A Journey of Ups and Downs",
    excerpt: "Trading looks glamorous from outside. Here's what the day-to-day reality actually involves.",
    category: "Trading",
    minutes: 6,
    Component: lazy(() => import("../../components/blogs/TraderBlog")),
  },
  {
    slug: "portfolio-management-guide",
    title: "Conquering the Market: Your Guide to Portfolio Management",
    excerpt: "Allocation, diversification and rebalancing — building a portfolio that fits your goals.",
    category: "Investing",
    minutes: 6,
    Component: lazy(() => import("../../components/blogs/PortfolioBlog")),
  },
  {
    slug: "art-of-investing",
    title: "The Art of Investing: Building Wealth and Securing Futures",
    excerpt: "Why investing is the most powerful tool for growing wealth — and how to get started.",
    category: "Investing",
    minutes: 5,
    Component: lazy(() => import("../../components/blogs/Blog1")),
  },
  {
    slug: "investing-goals-2024",
    title: "Investing Goals in 2024: Strategies for Financial Growth",
    excerpt: "Setting clear, realistic goals and the strategies that help you reach them.",
    category: "Investing",
    minutes: 5,
    Component: lazy(() => import("../../components/blogs/Blog2")),
  },
  {
    slug: "value-investing-guide",
    title: "Value Investing: A Comprehensive Guide",
    excerpt: "Picking stocks that trade below their intrinsic value — the method, the metrics and the risks.",
    category: "Investing",
    minutes: 4,
    Component: lazy(() => import("../../components/blogs/Blog3")),
  },
  {
    slug: "billionaire-mindset",
    title: "The Billionaire Mindset: Unlocking the Secrets to Success",
    excerpt: "The habits and ways of thinking shared by the world's most successful people.",
    category: "Mindset",
    minutes: 4,
    Component: lazy(() => import("../../components/blogs/Blog4")),
  },
];

export const findPost = (slug) => POSTS.find((p) => p.slug === slug);
