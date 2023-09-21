// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq7ZcnR3Tj8owc6a5-E51Zl9b8jD5Zex0",
  authDomain: "signatie-prj.firebaseapp.com",
  projectId: "signatie-prj",
  storageBucket: "signatie-prj.appspot.com",
  messagingSenderId: "706148425059",
  appId: "1:706148425059:web:dc502770fddaa4f4bd4756",
  measurementId: "G-P3FFXN8XD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);