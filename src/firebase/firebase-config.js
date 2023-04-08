// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ_8geqnMW3pg6Z54mK5-luwWPFKgovLs",
  authDomain: "registration-form-4000a.firebaseapp.com",
  projectId: "registration-form-4000a",
  storageBucket: "registration-form-4000a.appspot.com",
  messagingSenderId: "638714825795",
  appId: "1:638714825795:web:8ef424374ac80e2ff698f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
