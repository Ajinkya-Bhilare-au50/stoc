import { ROUTES } from "./routes";

/** Business details used by the header, footer and contact page. */
export const SITE = {
  name: "Sniper Coding",
  tagline: "Stock market & coding courses from practising traders and engineers.",
  contact: {
    address: "F-203, Mega Street Building, Nerul, Navi Mumbai, India",
    phone: "+91 81049 86663",
    phoneHref: "tel:+918104986663",
    email: "sniper0011@gmail.com",
  },
  // WhatsApp community invite (https://chat.whatsapp.com/...). Empty = the
  // community section links to the contact page instead.
  whatsappGroup: "",
  // Add real profile URLs to show the icons; empty entries are hidden.
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    github: "",
  },
};

/** Primary navigation. `children` renders as a dropdown. */
export const NAV = [
  { label: "Market", to: ROUTES.market },
  {
    label: "Courses",
    children: [
      {
        label: "Stock Market Course",
        description: "Trading, investing, F&O and technical analysis.",
        to: ROUTES.stockCourses,
        icon: "chart",
        requiresAuth: true,
      },
      {
        label: "Coding Course",
        description: "HTML, CSS, JavaScript and modern web development.",
        to: ROUTES.codingCourses,
        icon: "code",
        requiresAuth: true,
      },
      {
        label: "Special Offers",
        description: "Limited-time pricing and bundles.",
        to: ROUTES.specialOffer,
        icon: "tag",
      },
      {
        label: "Admission Enquiry",
        description: "Talk to us about batches and fees.",
        to: ROUTES.enquiry,
        icon: "inbox",
      },
    ],
  },
  { label: "Blog", to: ROUTES.blog },
  { label: "Reviews", to: ROUTES.testimonials },
  { label: "FAQ", to: ROUTES.faq },
  { label: "Contact", to: ROUTES.contact },
];

export const FOOTER_LINKS = [
  {
    title: "Learn",
    links: [
      { label: "Stock Market Course", to: ROUTES.stockCourses },
      { label: "Coding Course", to: ROUTES.codingCourses },
      { label: "Blog", to: ROUTES.blog },
      { label: "Special Offers", to: ROUTES.specialOffer },
    ],
  },
  {
    title: "Market",
    links: [
      { label: "NSE Market Overview", to: ROUTES.market },
      { label: "Top Gainers & Losers", to: ROUTES.market },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Student Reviews", to: ROUTES.testimonials },
      { label: "FAQ", to: ROUTES.faq },
      { label: "Admission Enquiry", to: ROUTES.enquiry },
      { label: "Contact", to: ROUTES.contact },
    ],
  },
];
