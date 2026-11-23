import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BellAlertIcon, CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ROUTES } from "../config/routes";

/** "Next batch" notice: button with a badge that opens a slide-over panel. */
const Drawer = ({ courseType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const commencementDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="btn btn-secondary relative">
        <BellAlertIcon className="h-5 w-5 text-warn" aria-hidden />
        Next batch
        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-down text-[11px] font-bold text-white">
          1
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="batch-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-canvas/70 backdrop-blur-sm"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative flex h-full w-full max-w-sm flex-col border-l border-line bg-card p-6 shadow-pop motion-safe:animate-[toast-in_250ms_ease-out]">
            <div className="flex items-center justify-between">
              <h2 id="batch-title" className="text-lg font-semibold text-ink">
                New batch start date
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="btn btn-ghost h-9 w-9 px-0"
                aria-label="Close"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="tile mt-6 flex items-center gap-3">
              <CalendarDaysIcon className="h-6 w-6 text-accent" aria-hidden />
              <div>
                <p className="text-xs text-ink-subtle">Commencement date</p>
                <p className="font-semibold text-ink">{commencementDate}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              {courseType} batches start from {commencementDate}. Seats are limited — enrol now to reserve
              yours.
            </p>
            <Link
              to={ROUTES.enquiry}
              className="btn btn-primary mt-auto w-full"
              onClick={() => setIsOpen(false)}
            >
              Reserve a seat
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
