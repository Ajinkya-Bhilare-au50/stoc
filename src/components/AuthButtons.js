import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const AuthButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="flex gap-2 bg-white shadow-md rounded-lg p-1">
            <Profile />
            <LogoutButton />
          </div>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default AuthButtons;
