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
      <h1>Admission Forms</h1>
      <ul>
        {admissions.map((admission) => (
          <li key={admission.id}>
            <p>Name: {admission.name}</p>
            <p>Email: {admission.email}</p>
            <p>Phone: {admission.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdmissionList;
