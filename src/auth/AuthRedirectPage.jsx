import { useEffect, useRef } from "react";
import { Navigate, useSearchParams } from "react-router";
import { safeReturnTo, useAuth } from "./useAuth";
import FullPageMessage from "../components/ui/FullPageMessage";

/**
 * /login and /signup. Sign-in is handled by Auth0's hosted page, so these
 * routes simply hand off to it (or bounce back if already signed in).
 * Supports ?returnTo=/some/path.
 */
export default function AuthRedirectPage({ mode = "login" }) {
  const { isAuthenticated, isLoading, error, login, signup } = useAuth();
  const [params] = useSearchParams();
  const returnTo = safeReturnTo(params.get("returnTo"));
  const started = useRef(false);
  const start = mode === "signup" ? signup : login;

  useEffect(() => {
    if (isLoading || isAuthenticated || error || started.current) return;
    started.current = true;
    start(returnTo);
  }, [isLoading, isAuthenticated, error, start, returnTo]);

  if (isAuthenticated) return <Navigate to={returnTo} replace />;

  if (error) {
    return (
      <FullPageMessage
        title="Something went wrong"
        description={error.message}
        action={{ label: "Try again", onClick: () => start(returnTo) }}
      />
    );
  }

  return (
    <FullPageMessage
      loading
      title={mode === "signup" ? "Taking you to sign up…" : "Taking you to sign in…"}
    />
  );
}
