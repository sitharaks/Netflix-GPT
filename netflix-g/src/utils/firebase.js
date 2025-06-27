// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAELlINjBQlU0iy5Lj9gY7-TYMKmggbWAw",
  authDomain: "netflix-11210.firebaseapp.com",
  projectId: "netflix-11210",
  storageBucket: "netflix-11210.firebasestorage.app",
  messagingSenderId: "608344260743",
  appId: "1:608344260743:web:61d5910e4ee1db8d9fb822",
  measurementId: "G-DFLMGV26NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth  = getAuth();