import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }
 
  return (
    isAuthenticated && (
      <div className="bg-white">
        <div className="flex flex-row gap-2 items-center p-2 bg-white  rounded-lg max-w-sm mx-auto ">
          <img
            className="w-10 h-10 rounded-full shadow-lg "
            src={user.picture}
            alt={user.name}
          />
          <h2 className="text-sm text-center font-semibold  bg-white text-gray-800 ">
            {user.name}
          </h2>
        </div>
        <p className="text-gray-700 text-sm text-center  p-1">
          {user.email}
        </p>
      </div>
    )
  );
};

export default Profile;
