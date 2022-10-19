// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgfwpg_7OclkrLGZ2BpH3zuA3QMrTbqcI",
  authDomain: "react-firebase-todo-app-9e33f.firebaseapp.com",
  projectId: "react-firebase-todo-app-9e33f",
  storageBucket: "react-firebase-todo-app-9e33f.appspot.com",
  messagingSenderId: "532762880326",
  appId: "1:532762880326:web:2d0f2448bef5fb764f1d47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
