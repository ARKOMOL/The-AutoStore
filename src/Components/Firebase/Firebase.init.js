// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDES7iuVtCgF8nrWvapP8brVEHg6J9RzA8",
  authDomain: "testing-assignment-12.firebaseapp.com",
  projectId: "testing-assignment-12",
  storageBucket: "testing-assignment-12.appspot.com",
  messagingSenderId: "712349785083",
  appId: "1:712349785083:web:0c2ee92844e23956b4095e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;