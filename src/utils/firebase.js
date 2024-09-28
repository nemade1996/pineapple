

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeLrmbzoY0ajbFTsoBLpAcZPHS-zakCjY",
  authDomain: "ecommerce-c32d4.firebaseapp.com",
  projectId: "ecommerce-c32d4",
  storageBucket: "ecommerce-c32d4.appspot.com",
  messagingSenderId: "380138736196",
  appId: "1:380138736196:web:e6da9e80b6d2b58bf30a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
