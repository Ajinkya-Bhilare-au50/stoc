// src/components/AdmissionList.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const AdmissionList = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      const querySnapshot = await getDocs(collection(db, "admissions"));
      const admissionList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAdmissions(admissionList);
    };

    fetchAdmissions();
  }, []);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admission Forms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {admissions.map((admission) => (
            <div
              key={admission.id}
              className="bg-white p-6 rounded-lg shadow-md border"
            >
              <p className="mb-2">
                <strong>Name:</strong> {admission.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {admission.email}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {admission.phone}
              </p>
              <p className="mb-2">
                <strong>Address:</strong> {admission.address}
              </p>
              <p className="mb-2">
                <strong>Course:</strong> {admission.course}
              </p>
              <p className="mb-2">
                <strong>Father's Name:</strong> {admission.fathersName}
              </p>
              <p className="mb-2">
                <strong>Gender:</strong> {admission.gender}
              </p>
              <p className="mb-2">
                <strong>Mother's Name:</strong> {admission.mothersName}
              </p>
              <p className="mb-2">
                <strong>Occupation:</strong> {admission.occupation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionList;
