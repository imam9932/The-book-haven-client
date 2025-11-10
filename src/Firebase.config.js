// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjvIL4RsKg9Bk-RL3Q1DihZv-RNG_iJyc",
  authDomain: "the-book-haven-ae753.firebaseapp.com",
  projectId: "the-book-haven-ae753",
  storageBucket: "the-book-haven-ae753.firebasestorage.app",
  messagingSenderId: "651366191290",
  appId: "1:651366191290:web:8692efd59b217d794e3283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();