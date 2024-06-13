// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrqXmaXWqaJxOxuqQwno9WQ_8SqC-Bm1A",
  authDomain: "react-dragon-news-auth-62294.firebaseapp.com",
  projectId: "react-dragon-news-auth-62294",
  storageBucket: "react-dragon-news-auth-62294.appspot.com",
  messagingSenderId: "759286923606",
  appId: "1:759286923606:web:de6287d8451dc6752796f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;