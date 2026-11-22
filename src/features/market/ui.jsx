// Small presentational primitives shared by the market feature.
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function Card({ className = "", children, ...rest }) {
  return (
    <section
      className={`rounded-2xl border border-market-border bg-market-card p-4 shadow-xl shadow-black/20 sm:p-6 ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

export function Skeleton({ className = "" }) {
  return <div className={`animate-pulse rounded-lg bg-market-elevated/70 ${className}`} aria-hidden />;
}

export function ErrorState({ title, description, onRetry }) {
  return (
    <div role="alert" className="flex flex-col items-center px-4 py-10 text-center">
      <ExclamationTriangleIcon className="h-8 w-8 text-market-warn" aria-hidden />
      <p className="mt-3 font-semibold text-market-text">{title}</p>
      {description && <p className="mt-1 max-w-sm text-sm text-market-muted">{description}</p>}
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 h-10 rounded-lg bg-market-accent px-5 text-sm font-semibold text-white transition hover:bg-market-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-market-accent focus-visible:ring-offset-2 focus-visible:ring-offset-market-card"
        >
          Try again
        </button>
      )}
    </div>
  );
}
