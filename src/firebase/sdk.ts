// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOM-13x_RGDzSROiMVrntr9a8QrPfNMBw",
  authDomain: "myblog-49337.firebaseapp.com",
  projectId: "myblog-49337",
  storageBucket: "myblog-49337.appspot.com",
  messagingSenderId: "100795972568",
  appId: "1:100795972568:web:02bc50f753aebe451250ad",
  measurementId: "G-2K55X7XWGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics