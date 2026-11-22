import { Link } from "react-router";
import Spinner from "./Spinner";

/**
 * Shared full-height state screen: loading, redirecting, errors, 404.
 * `action` is either { label, onClick } or { label, to }.
 */
export default function FullPageMessage({ loading = false, title, description, action, code }) {
  const actionClass =
    "mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      {loading && <Spinner className="mb-5 h-10 w-10" />}
      {code && <p className="text-6xl font-extrabold tracking-tight text-indigo-600">{code}</p>}
      {title && <h1 className="mt-2 text-xl font-semibold text-gray-900">{title}</h1>}
      {description && <p className="mt-2 max-w-md text-sm text-gray-600">{description}</p>}
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
