import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const AdmissionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [mothersName, setMothersName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [declaration, setDeclaration] = useState(false);
  const [dob, setDob] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dematAccount, setDematAccount] = useState("");
  const [educationStatus, setEducationStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isFormValid =
      name &&
      email &&
      phone &&
      course &&
      gender &&
      address &&
      mothersName &&
      fathersName &&
      occupation &&
      dob &&
      declaration &&
      /^\d{10}$/.test(phone) &&
      dematAccount &&
      educationStatus;
    setIsSubmitEnabled(isFormValid);
  }, [
    name,
    email,
    phone,
    course,
    gender,
    address,
    mothersName,
    fathersName,
    occupation,
    dob,
    declaration,
    dematAccount,
    educationStatus,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Phone number must be 10 digits.");
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${currentDate.getFullYear()}`;

    console.log("Form data:", {
      name,
      email,
      phone,
      course,
      gender,
      address,
      mothersName,
      fathersName,
      occupation,
      dob,
      enquiryDate: formattedDate,
      timestamp: currentDate,
      dematAccount,
      educationStatus,
    });

    try {
      const docRef = await addDoc(collection(db, "admissions"), {
        name,
        email,
        phone,
        course,
        gender,
        address,
        mothersName,
        fathersName,
        occupation,
        dob,
        enquiryDate: formattedDate,
        timestamp: currentDate,
        dematAccount,
        educationStatus,
      });
      console.log("Document written with ID: ", docRef.id);

      setIsSubmitted(true);

      // Clear form inputs
      setName("");
      setEmail("");
      setPhone("");
      setCourse("");
      setGender("");
      setAddress("");
      setMothersName("");
      setFathersName("");
      setOccupation("");
      setDob("");
      setDeclaration(false);
      setPhoneError("");
      setDematAccount("");
      setEducationStatus("");

      // Show thank you message for 4 seconds before redirecting
      setTimeout(() => {
        if (course === "Stock Courses") {
          navigate("/stockcoursepage");
        } else if (course === "Coding Courses") {
          navigate("/codingcoursespage");
        }
      }, 3000);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-6 flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-2 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Thank You!</h2>
          <div className="mb-4">
            <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We have received your enquiry. Our team will shortly get in touch
            with you.
          </p>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div>
              <CircularProgress />
            </div>
            <Link
              to={`/${
                course === "Stock Courses"
                  ? "stockcoursepage"
                  : "codingcoursespage"
              }`}
              className="hover:text-blue-500 "
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-2">
      <h2 className="text-2xl font-bold mb-4 text-center">Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPhoneError("");
            }}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Interest <span className="text-red-500">*</span>
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Course</option>
            <option value="Stock Courses">Stock Courses</option>
            <option value="Coding Courses">Coding Courses</option>
          </select>
        </div>
        <div className="mb-4 cursor-pointer">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mother's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={mothersName}
            onChange={(e) => setMothersName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Father's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fathersName}
            onChange={(e) => setFathersName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Father's Occupation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you have a demat account? <span className="text-red-500">*</span>
          </label>
          <select
            value={dematAccount}
            onChange={(e) => setDematAccount(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Are you a college student, working professional or graduated but
            not working? <span className="text-red-500">*</span>
          </label>
          <select
            value={educationStatus}
            onChange={(e) => setEducationStatus(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select an option</option>
            <option value="College Student">College Student</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Graduated but Not Working">
              Graduated but Not Working
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={declaration}
              onChange={(e) => setDeclaration(e.target.checked)}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2">
              I hereby declare that the information provided is true to the best
              of my knowledge. <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!isSubmitEnabled}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isSubmitEnabled
                ? "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
