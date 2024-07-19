// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUxTnm7lQTICqx0Z91u53yAIgVu5nyTwg",
  authDomain: "disney-plus-app-9529f.firebaseapp.com",
  projectId: "disney-plus-app-9529f",
  storageBucket: "disney-plus-app-9529f.appspot.com",
  messagingSenderId: "884079384112",
  appId: "1:884079384112:web:f03aa5f073491cc9073ff5",
  measurementId: "G-DZKXWQ34S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };