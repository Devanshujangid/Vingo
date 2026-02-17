// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTO0zOfpB7QN4v1p-dnLFMbgSY6khJ3V0",
  authDomain: "vango-food-del.firebaseapp.com",
  projectId: "vango-food-del",
  storageBucket: "vango-food-del.firebasestorage.app",
  messagingSenderId: "173302152018",
  appId: "1:173302152018:web:6123d15858bad5421c588b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}