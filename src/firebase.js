import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa9N7oY2viAlUDfRJy-Y5RdqaqePbyUc4",
  authDomain: "react-auth-project-f9bf0.firebaseapp.com",
  projectId: "react-auth-project-f9bf0",
  storageBucket: "react-auth-project-f9bf0.firebasestorage.app",
  messagingSenderId: "744031129193",
  appId: "1:744031129193:web:113e232f64613c6c795cf8",
  measurementId: "G-B01JCP47TC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
