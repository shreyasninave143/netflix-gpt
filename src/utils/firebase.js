// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIpLDo3EmmspNT_sFC2ib2yxEv718x2rI",
  authDomain: "netflixgpt-3e8dd.firebaseapp.com",
  projectId: "netflixgpt-3e8dd",
  storageBucket: "netflixgpt-3e8dd.appspot.com",
  messagingSenderId: "426919913163",
  appId: "1:426919913163:web:50587a1de15a4ff1361d4e",
  measurementId: "G-8G39WEP5LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();