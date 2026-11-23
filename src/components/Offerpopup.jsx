import { useEffect, useState } from "react";
import { Link } from "react-router";
import { TagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ROUTES } from "../config/routes";
import { useSessionFlag } from "./layout/useSessionFlag";

const AUTO_HIDE_MS = 15000;
const OFFER_DAYS = 2;

/** Discount toast (bottom-left). Auto-hides; once closed, stays closed this session. */
export default function OfferPopup() {
  const [dismissed, dismiss] = useSessionFlag("promo:offer-toast");
  const [visible, setVisible] = useState(!dismissed);

  const expires = new Date();
  expires.setDate(expires.getDate() + OFFER_DAYS);
  const expiresLabel = expires.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    if (dismissed) return undefined;
    const t = setTimeout(() => setVisible(false), AUTO_HIDE_MS);
    return () => clearTimeout(t);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const close = () => {
    setVisible(false);
    dismiss();
  };

  return (
    <div
      role="status"
      className="fixed bottom-20 left-4 z-30 hidden w-80 sm:block motion-safe:animate-[toast-in_300ms_ease-out]"
    >
      <div className="flex gap-3 rounded-panel border border-line bg-elevated p-4 shadow-pop">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-control bg-warn/15 text-warn">
          <TagIcon className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">Up to 5% off courses</p>
          <p className="mt-0.5 text-xs text-ink-muted">Learning paths &amp; PRO · sale ends {expiresLabel}</p>
          <Link to={ROUTES.specialOffer} onClick={close} className="link mt-2 inline-block text-xs">
            View offer
          </Link>
        </div>
        <button
          type="button"
          onClick={close}
          className="btn btn-ghost -mr-1 -mt-1 h-8 w-8 px-0"
          aria-label="Close offer"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
