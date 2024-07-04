import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  
} from "@material-tailwind/react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Button onClick={() => loginWithRedirect()} variant="gradient" size="sm">
        Get Started
      </Button>
    </div>
  );
};

export default LoginButton;
