import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChartBarIcon,
  CodeBracketIcon,
  InboxArrowDownIcon,
  LockClosedIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import logo from "../images/logo-128.png";
import { ROUTES } from "../../config/routes";
import { NAV, SITE } from "../../config/site";
import { DesktopAuthControls, MobileAuthControls } from "../../auth/AuthControls";
import Collapse from "../ui/Collapse";
import Dropdown from "../ui/Dropdown";
import ThemeToggle from "../../theme/ThemeToggle";

const ICONS = { chart: ChartBarIcon, code: CodeBracketIcon, tag: TagIcon, inbox: InboxArrowDownIcon };
const DESKTOP_BREAKPOINT = 1024;

const linkClass = ({ isActive }) =>
  `relative inline-flex h-9 items-center rounded-control px-3 text-sm font-medium transition-colors ${
    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
  }`;

const ActiveBar = ({ isActive }) =>
  isActive ? (
    <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-accent" aria-hidden />
  ) : null;

function DropdownItem({ item }) {
  const Icon = ICONS[item.icon] ?? ChartBarIcon;
  return (
    <Link
      to={item.to}
      className="flex items-start gap-3 rounded-tile p-3 transition-colors hover:bg-elevated focus:bg-elevated focus:outline-none"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-control bg-accent/10 text-accent">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
          {item.label}
          {item.requiresAuth && (
            <LockClosedIcon className="h-3 w-3 text-ink-subtle" aria-label="Sign-in required" />
          )}
        </span>
        <span className="mt-0.5 block text-xs text-ink-muted">{item.description}</span>
      </span>
    </Link>
  );
}

function DesktopNav() {
  const { pathname } = useLocation();
  return (
    <nav aria-label="Main" className="flex items-center gap-1">
      {NAV.map((item) =>
        item.children ? (
          <Dropdown
            key={item.label}
            label={item.label}
            align="center"
            openOnHover
            panelClassName="grid w-[34rem] grid-cols-2 gap-1 p-2"
            trigger={({ open, props }) => {
              const isActive = item.children.some((c) => pathname.startsWith(c.to));
              return (
                <button {...props} className={linkClass({ isActive: isActive || open }) + " gap-1"}>
                  {item.label}
                  <ChevronDownIcon
                    className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                    strokeWidth={2.5}
                  />
                  <ActiveBar isActive={isActive} />
                </button>
              );
            }}
          >
            {item.children.map((child) => (
              <DropdownItem key={child.to} item={child} />
            ))}
          </Dropdown>
        ) : (
          <NavLink key={item.to} to={item.to} className={linkClass}>
            {({ isActive }) => (
              <>
                {item.label}
                <ActiveBar isActive={isActive} />
              </>
            )}
          </NavLink>
        ),
      )}
    </nav>
  );
}

function MobileNav() {
  const mobileLink = ({ isActive }) =>
    `flex h-11 items-center rounded-control px-3 text-base font-medium transition-colors ${
      isActive ? "bg-accent/10 text-ink" : "text-ink-muted hover:bg-elevated hover:text-ink"
    }`;

  return (
    <nav aria-label="Main" className="flex flex-col gap-1">
      <NavLink to={ROUTES.home} end className={mobileLink}>
        Home
      </NavLink>
      {NAV.map((item) =>
        item.children ? (
          <div key={item.label} className="py-1">
            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              {item.label}
            </p>
            {item.children.map((child) => (
              <NavLink key={child.to} to={child.to} className={mobileLink}>
                <span className="flex items-center gap-2">
                  {child.label}
                  {child.requiresAuth && (
                    <LockClosedIcon className="h-3.5 w-3.5 text-ink-subtle" aria-hidden />
                  )}
                </span>
              </NavLink>
            ))}
          </div>
        ) : (
          <NavLink key={item.to} to={item.to} className={mobileLink}>
            {item.label}
          </NavLink>
        ),
      )}
    </nav>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onResize = () => window.innerWidth >= DESKTOP_BREAKPOINT && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70">
      <div className="container-page flex h-header items-center justify-between gap-6">
        <Link
          to={ROUTES.home}
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${SITE.name} home`}
        >
          <img src={logo} alt="" width="32" height="32" className="h-8 w-8 rounded-full ring-1 ring-line" />
          <span className="text-base font-bold tracking-tight text-ink">
            Sniper<span className="text-accent">Coding</span>
          </span>
        </Link>

        <div className="hidden lg:block">
          <DesktopNav />
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <DesktopAuthControls />
        </div>

        <button
          type="button"
          className="btn btn-ghost -mr-2 h-10 w-10 px-0 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      <Collapse open={open} id="mobile-nav" className="lg:hidden">
        <div className="container-page max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line pb-6 pt-3">
          <MobileNav />
          <div className="mt-4 space-y-3 border-t border-line pt-4">
            <ThemeToggle withLabel />
            <MobileAuthControls />
          </div>
        </div>
      </Collapse>
    </header>
  );
}
