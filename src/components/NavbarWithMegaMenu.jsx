import { createElement, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Collapse from "./ui/Collapse";
import Dropdown from "./ui/Dropdown";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  LightBulbIcon,
  LockClosedIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
// 128px copy of logo.png (the original is 3264px / 7.7 MB).
import logo from "./images/logo-128.png";
import { ROUTES } from "../config/routes";
import { DesktopAuthControls, MobileAuthControls } from "../auth/AuthControls";

const DESKTOP_BREAKPOINT = 960;

const menuItems = [
  {
    title: "Stock Courses",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    to: ROUTES.stockCourses,
    requiresAuth: true,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    to: ROUTES.home,
  },
  {
    title: "Blog",
    description: "Insights, tips and expert opinions.",
    icon: Bars4Icon,
    to: ROUTES.blog,
    requiresAuth: true,
  },
  {
    title: "Coding Courses",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    to: ROUTES.codingCourses,
    requiresAuth: true,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    to: ROUTES.nseStocks,
  },
  {
    title: "FAQ",
    description: "Answers to the most common questions.",
    icon: LightBulbIcon,
    to: ROUTES.faq,
  },
  {
    title: "Admission Enquiry",
    description: "Tell us about yourself and we'll get in touch.",
    icon: NewspaperIcon,
    to: ROUTES.enquiry,
  },
  {
    title: "Testimonial",
    description: "Hear from learners who took our courses.",
    icon: RectangleGroupIcon,
    to: ROUTES.testimonials,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
    to: ROUTES.specialOffer,
  },
];

const navLinkClass = ({ isActive }) =>
  `flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-indigo-100 text-indigo-700" : "text-gray-900 hover:bg-indigo-100/70"
  }`;

function MenuItemLink({ item, className = "", ...rest }) {
  return (
    <Link
      to={item.to}
      className={`flex items-center gap-3 rounded-lg p-3 text-left outline-none transition-colors hover:bg-indigo-50 focus:bg-indigo-50 ${className}`}
      {...rest}
    >
      <span className="flex shrink-0 items-center justify-center rounded-lg bg-blue-gray-50 p-2">
        {createElement(item.icon, { className: "h-6 w-6 text-gray-900" })}
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-sm font-bold text-blue-gray-900">
          {item.title}
          {item.requiresAuth && (
            <LockClosedIcon className="h-3 w-3 text-blue-gray-400" aria-label="Sign-in required" />
          )}
        </span>
        <span className="block text-xs font-medium text-blue-gray-500">{item.description}</span>
      </span>
    </Link>
  );
}

function CoursesMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop mega menu */}
      <div className="hidden lg:block">
        <Dropdown
          label="Courses"
          align="center"
          openOnHover
          panelClassName="grid w-[min(60rem,calc(100vw-2rem))] grid-cols-3 gap-1 p-3"
          trigger={({ open, props }) => (
            <button {...props} className={navLinkClass({ isActive: open }) + " gap-1"}>
              Courses
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          )}
        >
          {menuItems.map((item) => (
            <MenuItemLink key={item.title} item={item} />
          ))}
        </Dropdown>
      </div>

      {/* Mobile accordion */}
      <div className="lg:hidden">
        <button
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((cur) => !cur)}
          className={navLinkClass({ isActive: mobileOpen }) + " w-full justify-between"}
        >
          Courses
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>
        <Collapse open={mobileOpen}>
          <div className="grid gap-1 py-1 sm:grid-cols-2">
            {menuItems.map((item) => (
              <MenuItemLink key={item.title} item={item} />
            ))}
          </div>
        </Collapse>
      </div>
    </>
  );
}

function NavItems() {
  return (
    <nav aria-label="Main" className="flex flex-col gap-1 lg:flex-row lg:items-center">
      <NavLink to={ROUTES.home} end className={navLinkClass}>
        Home
      </NavLink>
      <CoursesMenu />
      <NavLink to={ROUTES.nseStocks} className={navLinkClass}>
        NSE Stocks
      </NavLink>
    </nav>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpenNav(false), [pathname]);

  // Close it when resizing to desktop; remove the listener on unmount.
  useEffect(() => {
    const onResize = () => window.innerWidth >= DESKTOP_BREAKPOINT && setOpenNav(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-indigo-100 bg-indigo-50 px-4 py-2 shadow-md lg:px-8">
      <div className="flex items-center justify-between gap-4 text-blue-gray-900">
        <Link
          to={ROUTES.home}
          className="flex items-center gap-2 py-1.5"
          aria-label="Sniper Coding home"
        >
          <img src={logo} alt="" className="h-8 w-8 rounded-full" />
          <span className="text-base font-bold tracking-wide">SNIPER CODING</span>
        </Link>

        <div className="hidden lg:block">
          <NavItems />
        </div>

        <div className="hidden lg:flex">
          <DesktopAuthControls />
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-blue-gray-900 hover:bg-indigo-100 lg:hidden"
          aria-label={openNav ? "Close menu" : "Open menu"}
          aria-expanded={openNav}
          aria-controls="mobile-nav"
          onClick={() => setOpenNav((cur) => !cur)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </div>

      <Collapse open={openNav} id="mobile-nav" className="lg:hidden">
        <div className="flex max-h-[calc(100dvh-4rem)] flex-col gap-4 overflow-y-auto pb-3 pt-2">
          <NavItems />
          <MobileAuthControls />
        </div>
      </Collapse>
    </header>
  );
}
