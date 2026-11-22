import { useCallback } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { auth0Config } from "../config/auth";
import { safeReturnTo } from "./useAuth";

/**
 * Auth0 provider wired into the router. It has to render inside the router so
 * that, after Auth0 redirects back, we can send the user to the page they
 * were originally trying to open with a client-side navigation.
 */
export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const onRedirectCallback = useCallback(
    (appState) => {
      navigate(safeReturnTo(appState?.returnTo), { replace: true });
    },
    [navigate],
  );

  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      // Keeps the session across reloads/new tabs even in browsers that block
      // third-party cookies (Safari, Brave), which would otherwise log users out.
      cacheLocation="localstorage"
      useRefreshTokens
      useRefreshTokensFallback
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
