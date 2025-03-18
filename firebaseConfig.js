// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9-tIR3vEwjXQHtELGWhGRxOuS9xbZTvA",
  authDomain: "github-pages-ec8ac.firebaseapp.com",
  projectId: "github-pages-ec8ac",
  storageBucket: "github-pages-ec8ac.firebasestorage.app",
  messagingSenderId: "552576250177",
  appId: "1:552576250177:web:1cc965f999b1045ee0b1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth(app);