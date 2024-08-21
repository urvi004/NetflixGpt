// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCerM6l6TMB8K3QBmaoDCyEQA7YeB2K4J0",
  authDomain: "netflixgpt-13689.firebaseapp.com",
  projectId: "netflixgpt-13689",
  storageBucket: "netflixgpt-13689.appspot.com",
  messagingSenderId: "23308705433",
  appId: "1:23308705433:web:3eb89d91798bf02f5fe208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
export const auth = getAuth();