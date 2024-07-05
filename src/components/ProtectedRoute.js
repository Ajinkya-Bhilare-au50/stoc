import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Redirecting from "./Redirecting";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <div className="flex justify-center h-12 items-center text-white">redirecting</div>;
};

export default ProtectedRoute;
