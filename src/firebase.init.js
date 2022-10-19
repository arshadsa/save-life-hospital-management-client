// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPjFrJthrkMKaw-b3p3rJd8duBlFYB3jo",
    authDomain: "hospital-management-syst-79467.firebaseapp.com",
    projectId: "hospital-management-syst-79467",
    storageBucket: "hospital-management-syst-79467.appspot.com",
    messagingSenderId: "831892141174",
    appId: "1:831892141174:web:1a5e8842922f07b46d5b57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;