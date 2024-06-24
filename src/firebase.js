// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcgaWMZ_3QFzBWCwNYRvu_c_5JmW5IgWw",
  authDomain: "courseportalstocks.firebaseapp.com",
  projectId: "courseportalstocks",
  storageBucket: "courseportalstocks.appspot.com",
  messagingSenderId: "23620332794",
  appId: "1:23620332794:web:8fd86b0cf4d61a369fad43",
  measurementId: "G-2W9ZHWTLDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
