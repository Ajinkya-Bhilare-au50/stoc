import { isRouteErrorResponse, useRouteError } from "react-router";
import FullPageMessage from "../components/ui/FullPageMessage";
import NotFoundPage from "./NotFoundPage";

// After a new deploy, old lazy chunks no longer exist; a reload fixes it.
const STALE_CHUNK = /Failed to fetch dynamically imported module|Importing a module script failed/i;

/** Catches render/loader errors anywhere in the tree instead of a blank screen. */
export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) return <NotFoundPage />;

  const staleChunk = STALE_CHUNK.test(error?.message ?? "");
  if (import.meta.env.DEV) console.error(error);

  return (
    <FullPageMessage
      title={staleChunk ? "A new version is available" : "Something went wrong"}
      description={
        staleChunk
          ? "Reload the page to get the latest version of the site."
          : "An unexpected error occurred. Please try again."
      }
      action={{ label: "Reload page", onClick: () => window.location.reload() }}
    />
  );
}
