// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoqdimHWj4qI07U8HdCkOXdanVN7Dy-IU",
  authDomain: "biblioteca-livre-53003.firebaseapp.com",
  projectId: "biblioteca-livre-53003",
  storageBucket: "biblioteca-livre-53003.firebasestorage.app",
  messagingSenderId: "43049394634",
  appId: "1:43049394634:web:fdcdd06581ef6ba8c22f33",
  measurementId: "G-SNNMDY0GEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);