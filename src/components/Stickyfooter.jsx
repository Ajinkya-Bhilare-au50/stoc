import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ROUTES } from "../config/routes";
import { useSessionFlag } from "./layout/useSessionFlag";

const OFFER_SECONDS = 2 * 60 * 60; // 2-hour countdown
const SHOW_AFTER_MS = 2000;

const pad = (n) => String(n).padStart(2, "0");
const formatTime = (s) => `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;

/**
 * Bottom enquiry bar with a limited-time countdown. Dismissible for the
 * session; reserves its own height so it never covers the footer.
 */
export default function StickyFooter() {
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState(OFFER_SECONDS);
  const [dismissed, dismiss] = useSessionFlag("promo:enquiry-bar");

  useEffect(() => {
    if (dismissed) return undefined;
    const show = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    const tick = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => {
      clearTimeout(show);
      clearInterval(tick);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <>
      {/* Spacer so page content/footer can scroll clear of the fixed bar */}
      <div className="h-16" aria-hidden />
      <div
        role="region"
        aria-label="Limited time offer"
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-card/95 backdrop-blur-md transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-3 sm:justify-center sm:gap-6">
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <span className="badge badge-warn hidden sm:inline-flex">Limited time offer</span>
            {timer > 0 ? (
              <span className="inline-flex items-center gap-1.5 font-semibold tabular-nums text-ink">
                <ClockIcon className="h-4 w-4 text-warn" aria-hidden />
                <span className="sr-only">Offer ends in </span>
                {formatTime(timer)}
              </span>
            ) : (
              <span className="font-semibold text-warn">Time's up — enrol now!</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Link to={ROUTES.enquiry} className="btn btn-primary btn-sm sm:h-9 sm:px-4 sm:text-sm">
              Enquire now
            </Link>
            <button type="button" onClick={dismiss} className="btn btn-ghost h-8 w-8 px-0" aria-label="Dismiss offer bar">
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
