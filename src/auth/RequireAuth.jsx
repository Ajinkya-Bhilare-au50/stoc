import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import { useAuth } from "./useAuth";
import FullPageMessage from "../components/ui/FullPageMessage";

/**
 * Layout route guard. Anonymous visitors are sent to Auth0 and come back to
 * the exact URL they requested once signed in.
 */
export default function RequireAuth() {
  const { isAuthenticated, isLoading, error, login } = useAuth();
  const location = useLocation();
  const returnTo = location.pathname + location.search + location.hash;
  const redirecting = useRef(false);

  useEffect(() => {
    if (isLoading || isAuthenticated || error || redirecting.current) return;
    redirecting.current = true;
    login(returnTo);
  }, [isLoading, isAuthenticated, error, login, returnTo]);

  if (isAuthenticated) return <Outlet />;

  if (error) {
    return (
      <FullPageMessage
        title="We couldn't sign you in"
        description={error.message}
        action={{ label: "Try again", onClick: () => login(returnTo) }}
      />
    );
  }

  return (
    <FullPageMessage
      loading
      title={isLoading ? "Checking your session…" : "Redirecting to sign in…"}
    />
  );
}
