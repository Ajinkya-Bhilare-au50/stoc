import { useState } from "react";
import { Link } from "react-router";
import Dropdown from "../components/ui/Dropdown";
import {
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
  ChevronDownIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "./useAuth";
import { ROUTES } from "../config/routes";

function Avatar({ user, size = "h-9 w-9" }) {
  const [broken, setBroken] = useState(false);
  const initials = (user?.name || user?.email || "?")
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  if (user?.picture && !broken) {
    return (
      <img
        src={user.picture}
        alt=""
        referrerPolicy="no-referrer"
        onError={() => setBroken(true)}
        className={`${size} rounded-full object-cover ring-2 ring-white`}
      />
    );
  }
  return (
    <span
      className={`${size} inline-flex items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white ring-2 ring-white`}
    >
      {initials}
    </span>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-60";
const btnPrimary = `${btnBase} bg-indigo-600 text-white shadow-sm hover:bg-indigo-700`;
const btnGhost = `${btnBase} text-gray-800 hover:bg-indigo-100`;
const btnOutline = `${btnBase} border border-gray-300 bg-white text-gray-800 hover:bg-gray-50`;

const accountLinks = [
  { label: "Stock courses", to: ROUTES.stockCourses, icon: BookOpenIcon },
  { label: "Coding courses", to: ROUTES.codingCourses, icon: CodeBracketIcon },
];

/** Desktop: avatar dropdown when signed in, Log in / Get started otherwise. */
export function DesktopAuthControls() {
  const { user, isAuthenticated, isLoading, login, signup, logout } = useAuth();

  if (isLoading) {
    return <div className="h-9 w-40 animate-pulse rounded-lg bg-indigo-100" aria-hidden />;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <button type="button" className={btnGhost} onClick={() => login()}>
          Log in
        </button>
        <button type="button" className={btnPrimary} onClick={() => signup()}>
          Get started
        </button>
      </div>
    );
  }

  return (
    <Dropdown
      label="Account"
      align="end"
      panelClassName="w-64 p-2"
      trigger={({ open, props }) => (
        <button
          {...props}
          className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Account menu"
        >
          <Avatar user={user} />
          <span className="max-w-[10rem] truncate text-sm font-medium text-gray-900">
            {user?.given_name || user?.name || user?.email}
          </span>
          <ChevronDownIcon
            className={`h-4 w-4 text-gray-600 transition-transform ${open ? "rotate-180" : ""}`}
            strokeWidth={2}
          />
        </button>
      )}
    >
      <div className="mb-1 flex items-center gap-3 border-b border-gray-100 px-2 pb-3 pt-1">
        <Avatar user={user} size="h-10 w-10" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">{user?.name}</p>
          <p className="truncate text-xs text-gray-500">{user?.email}</p>
        </div>
      </div>
      {accountLinks.map(({ label, to, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-700 outline-none hover:bg-indigo-50 focus:bg-indigo-50"
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
          {label}
        </Link>
      ))}
      <button
        type="button"
        onClick={logout}
        className="mt-1 flex w-full items-center gap-2 rounded-md border-t border-gray-100 px-2 py-2 text-sm font-medium text-red-600 outline-none hover:bg-red-50 focus:bg-red-50"
      >
        <ArrowRightOnRectangleIcon className="h-4 w-4" strokeWidth={2} />
        Log out
      </button>
    </Dropdown>
  );
}

/** Mobile drawer: full-width actions. */
export function MobileAuthControls() {
  const { user, isAuthenticated, isLoading, login, signup, logout } = useAuth();

  if (isLoading) {
    return <div className="h-11 w-full animate-pulse rounded-lg bg-indigo-100" aria-hidden />;
  }

  if (!isAuthenticated) {
    return (
      <div className="grid w-full grid-cols-2 gap-2">
        <button type="button" className={btnOutline} onClick={() => login()}>
          Log in
        </button>
        <button type="button" className={btnPrimary} onClick={() => signup()}>
          Get started
        </button>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl bg-white p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <Avatar user={user} size="h-10 w-10" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-900">{user?.name}</p>
          <p className="truncate text-xs text-gray-500">{user?.email}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={logout}
        className={`${btnOutline} mt-3 w-full text-red-600 hover:bg-red-50`}
      >
        <ArrowRightOnRectangleIcon className="h-4 w-4" strokeWidth={2} />
        Log out
      </button>
    </div>
  );
}
