import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router";
import { ROUTES } from "../config/routes";
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
    const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1)
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

      // Show thank you message for 3 seconds before redirecting
      setTimeout(() => {
        if (course === "Stock Courses") {
          navigate(ROUTES.stockCourses);
        } else if (course === "Coding Courses") {
          navigate(ROUTES.codingCourses);
        }
      }, 3000);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  if (isSubmitted) {
    return (
      <section className="section">
        <div className="container-page">
          <div className="card mx-auto max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-up/10">
              <FaCheckCircle className="h-8 w-8 text-up" />
            </div>
            <h1 className="mt-5 text-3xl font-bold text-ink">Thank you!</h1>
            <p className="lead mx-auto mt-3 max-w-sm">
              We have received your enquiry. Our team will shortly get in touch with you.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4">
              <CircularProgress size={28} sx={{ color: "rgb(var(--accent))" }} />
              <p className="text-xs text-ink-subtle">Taking you to the course page…</p>
              <Link
                to={course === "Stock Courses" ? ROUTES.stockCourses : ROUTES.codingCourses}
                className="btn btn-primary"
              >
                Explore the course now
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Admissions</p>
          <h1 className="page-title mt-2">Admission enquiry</h1>
          <p className="lead mt-3">
            Tell us a little about yourself and the course you're interested in. Our team will call you back.
          </p>
          <form onSubmit={handleSubmit} className="card mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="label">
                Full Name <span className="text-down">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label">
                Email <span className="text-down">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label">
                Phone <span className="text-down">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError("");
                }}
                required
                className="input"
              />
              {phoneError && <p className="field-error">{phoneError}</p>}
            </div>
            <div>
              <label className="label">
                Date of Birth <span className="text-down">*</span>
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label">
                Course Interest <span className="text-down">*</span>
              </label>
              <select value={course} onChange={(e) => setCourse(e.target.value)} required className="select">
                <option value="">Select Course</option>
                <option value="Stock Courses">Stock Courses</option>
                <option value="Coding Courses">Coding Courses</option>
              </select>
            </div>
            <div>
              <label className="label">
                Gender <span className="text-down">*</span>
              </label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required className="select">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="label">
                Address <span className="text-down">*</span>
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="textarea"
              ></textarea>
            </div>
            <div>
              <label className="label">
                Mother's Name <span className="text-down">*</span>
              </label>
              <input
                type="text"
                value={mothersName}
                onChange={(e) => setMothersName(e.target.value)}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label">
                Father's Name <span className="text-down">*</span>
              </label>
              <input
                type="text"
                value={fathersName}
                onChange={(e) => setFathersName(e.target.value)}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label">
                Father's Occupation <span className="text-down">*</span>
              </label>
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label">
                Do you have a demat account? <span className="text-down">*</span>
              </label>
              <select
                value={dematAccount}
                onChange={(e) => setDematAccount(e.target.value)}
                required
                className="select"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="label">
                Are you a college student, working professional or graduated but not working?{" "}
                <span className="text-down">*</span>
              </label>
              <select
                value={educationStatus}
                onChange={(e) => setEducationStatus(e.target.value)}
                required
                className="select"
              >
                <option value="">Select an option</option>
                <option value="College Student">College Student</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Graduated but Not Working">Graduated but Not Working</option>
              </select>
            </div>
            <div className="sm:col-span-2 border-t border-line pt-5">
              <label className="inline-flex cursor-pointer items-start gap-3 text-sm text-ink-muted">
                <input
                  type="checkbox"
                  checked={declaration}
                  onChange={(e) => setDeclaration(e.target.checked)}
                  className="checkbox mt-0.5"
                />
                <span>
                  I confirm the information is true.
                  <span className="text-down">*</span>
                </span>
              </label>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={!isSubmitEnabled} className="btn btn-primary btn-lg w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
