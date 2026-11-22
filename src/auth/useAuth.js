import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const currentPath = () => window.location.pathname + window.location.search + window.location.hash;

/**
 * Only allow same-origin, path-relative return targets ("/foo"), never
 * "//evil.com" or absolute URLs, so ?returnTo= can't become an open redirect.
 */
export function safeReturnTo(value, fallback = "/") {
  if (typeof value !== "string") return fallback;
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return fallback;
  }
  return value;
}

/**
 * App-level wrapper around Auth0. Components should use this rather than
 * useAuth0 directly so login/logout behaviour stays consistent everywhere.
 */
export function useAuth() {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    loginWithRedirect,
    logout: auth0Logout,
  } = useAuth0();

  const login = useCallback(
    (returnTo = currentPath()) =>
      loginWithRedirect({ appState: { returnTo: safeReturnTo(returnTo) } }),
    [loginWithRedirect],
  );

  const signup = useCallback(
    (returnTo = currentPath()) =>
      loginWithRedirect({
        appState: { returnTo: safeReturnTo(returnTo) },
        authorizationParams: { screen_hint: "signup" },
      }),
    [loginWithRedirect],
  );

  const logout = useCallback(
    () => auth0Logout({ logoutParams: { returnTo: window.location.origin } }),
    [auth0Logout],
  );

  return { user, isAuthenticated, isLoading, error, login, signup, logout };
}
