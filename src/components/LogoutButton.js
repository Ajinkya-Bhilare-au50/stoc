import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-tailwind/react";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="pt-3">
      <Button
        onClick={() => logout({ returnTo: window.location.origin })}
        variant="gradient"
        size="sm"
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
