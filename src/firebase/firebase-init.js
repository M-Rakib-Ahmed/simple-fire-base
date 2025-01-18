// Do not store config no the client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYO4yiamp55x2uxcpBQ5OIKmFo7wYG0FY",
  authDomain: "rakib-firebase-cd179.firebaseapp.com",
  projectId: "rakib-firebase-cd179",
  storageBucket: "rakib-firebase-cd179.firebasestorage.app",
  messagingSenderId: "173748036755",
  appId: "1:173748036755:web:daa17ee7ec522268f49966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
