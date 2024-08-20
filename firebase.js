// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_krFU24NhnoMmWZgfk2FdLB4bogPoEg8",
  authDomain: "flashcardsaas-46efd.firebaseapp.com",
  projectId: "flashcardsaas-46efd",
  storageBucket: "flashcardsaas-46efd.appspot.com",
  messagingSenderId: "588305515450",
  appId: "1:588305515450:web:3aeaefd59b2ef1cead5383",
  measurementId: "G-JTMJR0WCR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}