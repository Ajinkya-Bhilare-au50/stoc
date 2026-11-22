import React from "react";
import Rating from "@mui/material/Rating";

const ReviewsUser = ({ name, rating, reviewContent, imageUrl }) => {
  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase", // Ensure text is in uppercase
  };

  // Extract first letter of name and surname
  const [firstName, lastName] = name.split(" ");
  const initials =
    firstName.charAt(0).toUpperCase() +
    (lastName ? lastName.charAt(0).toUpperCase() : "");

  return (
    <div className="bg-white   shadow-md rounded-lg p-6 mb-4 flex items-start">
      <div className="">
        <div className=" items-center mb-4 ">
          <div className="flex items-start p-2 gap-4 ">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="rounded-full"
                style={{ width: "40px", height: "40px" }}
              />
            ) : (
              <div className="bg-red-900" style={avatarStyle}>
                {initials}
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold pl-1 ">{name}</h3>
              <div>
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  precision={0.5}
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-700">{reviewContent}</p>
      </div>
    </div>
  );
};

export default ReviewsUser;
