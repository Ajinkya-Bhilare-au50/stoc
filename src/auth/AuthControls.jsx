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
        className={`${size} rounded-full object-cover ring-2 ring-line`}
      />
    );
  }
  return (
    <span
      className={`${size} inline-flex items-center justify-center rounded-full bg-accent text-sm font-semibold text-white ring-2 ring-line`}
    >
      {initials}
    </span>
  );
}

const btnPrimary = "btn btn-primary";
const btnGhost = "btn btn-ghost";
const btnOutline = "btn btn-outline";

/** Short display name: Auth0 database users have their email as `name`. */
const displayName = (user) =>
  user?.given_name ||
  user?.nickname ||
  (user?.name?.includes("@") ? user.name.split("@")[0] : user?.name) ||
  "Account";

const accountLinks = [
  { label: "Stock courses", to: ROUTES.stockCourses, icon: BookOpenIcon },
  { label: "Coding courses", to: ROUTES.codingCourses, icon: CodeBracketIcon },
];

/** Desktop: avatar dropdown when signed in, Log in / Get started otherwise. */
export function DesktopAuthControls() {
  const { user, isAuthenticated, isLoading, login, signup, logout } = useAuth();

  if (isLoading) {
    return <div className="h-9 w-40 animate-pulse rounded-control bg-elevated" aria-hidden />;
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
          className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Account menu"
        >
          <Avatar user={user} size="h-8 w-8" />
          <span className="max-w-[9rem] truncate text-sm font-medium text-ink">{displayName(user)}</span>
          <ChevronDownIcon
            className={`h-4 w-4 text-ink-subtle transition-transform ${open ? "rotate-180" : ""}`}
            strokeWidth={2}
          />
        </button>
      )}
    >
      <div className="mb-1 flex items-center gap-3 border-b border-line px-2 pb-3 pt-1">
        <Avatar user={user} size="h-10 w-10" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{displayName(user)}</p>
          <p className="truncate text-xs text-ink-muted">{user?.email}</p>
        </div>
      </div>
      {accountLinks.map(({ label, to, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center gap-2 rounded-control px-2 py-2 text-sm text-ink-muted outline-none hover:bg-elevated hover:text-ink focus:bg-elevated"
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
          {label}
        </Link>
      ))}
      <button
        type="button"
        onClick={logout}
        className="mt-1 flex w-full items-center gap-2 rounded-control px-2 py-2 text-sm font-medium text-down outline-none hover:bg-down/10 focus:bg-down/10"
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
    return <div className="h-11 w-full animate-pulse rounded-control bg-elevated" aria-hidden />;
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
    <div className="w-full rounded-tile border border-line bg-card p-3">
      <div className="flex items-center gap-3">
        <Avatar user={user} size="h-10 w-10" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{displayName(user)}</p>
          <p className="truncate text-xs text-ink-muted">{user?.email}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={logout}
        className={`${btnOutline} mt-3 w-full text-down hover:border-down hover:text-down`}
      >
        <ArrowRightOnRectangleIcon className="h-4 w-4" strokeWidth={2} />
        Log out
      </button>
    </div>
  );
}
