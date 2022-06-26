// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_fldlaSf33wblKacBeoxz0i92m_O3zQ",
  authDomain: "atgtask-78ea9.firebaseapp.com",
  projectId: "atgtask-78ea9",
  storageBucket: "atgtask-78ea9.appspot.com",
  messagingSenderId: "883691587063",
  appId: "1:883691587063:web:6d034629955018251e9af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;