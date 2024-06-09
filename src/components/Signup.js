import React from "react";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
   const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   firstName: data.get("firstName"),
    //   lastName: data.get("lastName"),
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   allowExtraEmails: data.get("allowExtraEmails"),
    // });
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        allowExtraEmails: data.get("allowExtraEmails"),
      });
      console.log(response.data); // Log the response from the server
      // Redirect to login page after successful signup
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sign up</h1>
          <p className="text-sm mb-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <div className="px-2 py-2 flex justify-center">
              <input
                type="checkbox"
                id="allowExtraEmails"
                name="allowExtraEmails"
                className="mr-2  self-start"
              />
              <label htmlFor="allowExtraEmails" className="text-sm">
                I want to receive inspiration, marketing promotions and updates
                via email.
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
