import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4zaZ-XnHmdPCkKP_UD1d9dz3asInPtNc",
  authDomain: "tomo-o30-to-do-app.firebaseapp.com",
  projectId: "tomo-o30-to-do-app",
  storageBucket: "tomo-o30-to-do-app.appspot.com",
  messagingSenderId: "248371512910",
  appId: "1:248371512910:web:f8fa12089b52245fde651f",
  measurementId: "G-3CKM7R7ST0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider, db };
