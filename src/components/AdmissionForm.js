// src/components/AdmissionForm.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

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
      /^\d{10}$/.test(phone);
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
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Phone number must be 10 digits.");
      return;
    }

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
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-2 text-center">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m0 0l-4 4m0 0L9 12m0 0L4 9m6 3l2 2 4-4M7 7l3 3-3 3 3 3-3 3M6 6l3 3-3 3 3 3-3 3M6 6l3 3-3 3 3 3-3 3M6 6l3 3-3 3 3 3-3 3"
            />
          </svg>
        </div>
        <p className="text-lg">
          We have received your enquiry. Our team will shortly get in touch with
          you.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-2">
      <h2 className="text-2xl font-bold mb-4 text-center">Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
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
            Email
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
            Phone
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
            Date of Birth
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
            Course Interest
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
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
            Residential Address
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
            Mother's Name
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
            Father's Name
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
            Occupation
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
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={declaration}
              onChange={(e) => setDeclaration(e.target.checked)}
              required
              className="form-checkbox"
            />
            <span className="ml-2">
              I declare that the information provided is true and correct to the
              best of my knowledge.
            </span>
          </label>
        </div>
        <button
          type="submit"
          disabled={!isSubmitEnabled}
          className={`w-full py-2 px-4 ${
            isSubmitEnabled ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
          } text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
