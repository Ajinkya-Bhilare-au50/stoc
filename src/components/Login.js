import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: data.get("email"),
          password: data.get("password"),
        });
        console.log(response.data); // Log the response from the server
      } catch (error) {
        console.error("Error logging in:", error);
      }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sign in</h1>
          <p className="text-sm mb-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
        <p className="text-xs mt-6 text-center text-gray-500">
          &copy; Sniper Trading {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Login;
