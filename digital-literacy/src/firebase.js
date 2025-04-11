// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6sacsiEWIaasCwZ7PzRIErxD5ZZfJmgk",
  authDomain: "digitalliteracy-6e9a4.firebaseapp.com",
  projectId: "digitalliteracy-6e9a4",
  storageBucket: "digitalliteracy-6e9a4.firebasestorage.app",
  messagingSenderId: "809097584669",
  appId: "1:809097584669:web:001f096cc345e20a8f66f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;