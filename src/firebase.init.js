// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_rAlJ2UYEKdvyNMjwQVj4ppPtl1rlmqA",
  authDomain: "ema-john-simple-react-pr-a77bb.firebaseapp.com",
  projectId: "ema-john-simple-react-pr-a77bb",
  storageBucket: "ema-john-simple-react-pr-a77bb.appspot.com",
  messagingSenderId: "747773202924",
  appId: "1:747773202924:web:531718c67b4350c98eb0c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;