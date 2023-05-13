import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4zaZ-XnHmdPCkKP_UD1d9dz3asInPtNc",
  authDomain: "tomo-o30-to-do-app.firebaseapp.com",
  projectId: "tomo-o30-to-do-app",
  storageBucket: "tomo-o30-to-do-app.appspot.com",
  messagingSenderId: "248371512910",
  appId: "1:248371512910:web:f8fa12089b52245fde651f",
  measurementId: "G-3CKM7R7ST0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { db, auth };
