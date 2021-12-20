// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRgVXxMiWp7Y-WEPe8LYx2es1cYf24eBc",
  authDomain: "ios-planner.firebaseapp.com",
  projectId: "ios-planner",
  storageBucket: "ios-planner.appspot.com",
  messagingSenderId: "366030847286",
  appId: "1:366030847286:web:d1a2516bf0e7141277c797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app