// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mern-auth-5ce74.firebaseapp.com",
  projectId: "mern-auth-5ce74",
  storageBucket: "mern-auth-5ce74.appspot.com",
  messagingSenderId: "282948850833",
  appId: "1:282948850833:web:4235f2b3e4a480a1305b30",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
