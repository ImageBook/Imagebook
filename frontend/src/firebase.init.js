// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCN2YwKmFHNJstWoF0_TCJXjDLF8Z7WVyI",
    authDomain: "imagebook-ec708.firebaseapp.com",
    projectId: "imagebook-ec708",
    storageBucket: "imagebook-ec708.appspot.com",
    messagingSenderId: "670193474182",
    appId: "1:670193474182:web:f6a9bb650f94d8923bcf07",
    measurementId: "G-X2Y1WZE0RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;