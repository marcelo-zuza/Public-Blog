import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db
