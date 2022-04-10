// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlNIFJQjHGFRK0gFUfPpTylDN6E3GU_I8",
  authDomain: "ema-john-simple-e1459.firebaseapp.com",
  projectId: "ema-john-simple-e1459",
  storageBucket: "ema-john-simple-e1459.appspot.com",
  messagingSenderId: "465110695526",
  appId: "1:465110695526:web:18a54534a7c7047435b7a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;