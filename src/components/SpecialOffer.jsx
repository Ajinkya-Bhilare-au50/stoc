import { useEffect, useState } from "react";
import { Link } from "react-router";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ROUTES } from "../config/routes";

const OFFER_DAYS = 2;
const DISCOUNT = 5;
const INCLUDES = [
  "All premium stock market courses",
  "Coding & web development courses",
  "Learning paths and PRO plans",
];

function timeLeft(end) {
  const diff = Math.max(0, end - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function SpecialOffer() {
  // Fixed once per visit (it used to be recalculated every second, so the
  // countdown never moved).
  const [end] = useState(() => Date.now() + OFFER_DAYS * 86400000);
  const [left, setLeft] = useState(() => timeLeft(end));

  useEffect(() => {
    const t = setInterval(() => setLeft(timeLeft(end)), 1000);
    return () => clearInterval(t);
  }, [end]);

  const endLabel = new Date(end).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="section">
      <div className="container-page">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-panel border border-line bg-card shadow-card">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-warn/10 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 p-6 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="badge badge-warn">Limited time</span>
              <h1 className="page-title mt-4">Special offer: {DISCOUNT}% off premium courses</h1>
              <p className="lead mt-3">
                Enrol before the offer ends and save on any course or learning path.
              </p>

              <ul className="mt-6 space-y-2.5">
                {INCLUDES.map((line) => (
                  <li key={line} className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <CheckCircleIcon className="h-5 w-5 shrink-0 text-up" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to={`${ROUTES.enquiry}?offer=${DISCOUNT}`} className="btn btn-primary btn-lg">
                  Claim offer
                </Link>
                <p className="text-sm text-ink-subtle">
                  Valid till <span className="font-semibold text-ink">{endLabel}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-warn/40 bg-warn/10 text-warn">
                <span className="text-5xl font-bold leading-none">{DISCOUNT}%</span>
                <span className="mt-1 text-sm font-semibold uppercase tracking-widest">off</span>
              </div>
              <dl className="grid grid-cols-4 gap-2" aria-label="Time left">
                {Object.entries(left).map(([unit, value]) => (
                  <div key={unit} className="tile w-16 px-2 text-center">
                    <dd className="text-xl font-bold tabular-nums text-ink">
                      {String(value).padStart(2, "0")}
                    </dd>
                    <dt className="text-[11px] uppercase tracking-wide text-ink-subtle">{unit}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
