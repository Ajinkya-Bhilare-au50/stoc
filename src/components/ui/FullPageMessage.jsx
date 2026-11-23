import { Link } from "react-router";
import Spinner from "./Spinner";

/**
 * Shared full-height state screen: loading, redirecting, errors, 404.
 * `action` is either { label, onClick } or { label, to }.
 */
export default function FullPageMessage({ loading = false, title, description, action, code }) {
  const actionClass =
    "btn btn-primary mt-6";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      {loading && <Spinner className="mb-5 h-10 w-10" />}
      {code && <p className="text-6xl font-bold tracking-tight text-accent">{code}</p>}
      {title && <h1 className="mt-3 text-2xl font-bold text-ink">{title}</h1>}
      {description && <p className="mt-2 max-w-md text-sm text-ink-muted">{description}</p>}
      {action &&
        (action.to ? (
          <Link to={action.to} className={actionClass}>
            {action.label}
          </Link>
        ) : (
          <button type="button" onClick={action.onClick} className={actionClass}>
            {action.label}
          </button>
        ))}
    </div>
  );
}
