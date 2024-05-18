// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1K5lHK3A48TCT3Za8yTV7IN3Vv78O9mw",
  authDomain: "first-smile-c2e7f.firebaseapp.com",
  projectId: "first-smile-c2e7f",
  storageBucket: "first-smile-c2e7f.appspot.com",
  messagingSenderId: "313478537053",
  appId: "1:313478537053:web:675abfd5279390003e92b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;