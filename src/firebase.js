// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhHsxqs9u4y5rmS_lRWjHXO9fHR2rMg40",
  authDomain: "socialbookmark-c0a47.firebaseapp.com",
  projectId: "socialbookmark-c0a47",
  storageBucket: "socialbookmark-c0a47.appspot.com",
  messagingSenderId: "467668943228",
  appId: "1:467668943228:web:bb8ee480e2f62df6eea4f9",
  measurementId: "G-K1VXL772H3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
