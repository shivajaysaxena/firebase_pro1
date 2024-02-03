// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTSew1KZhQoEb4bsQIg_8Nf3ZeK5FTaHc",
  authDomain: "fir-12f2c.firebaseapp.com",
  projectId: "fir-12f2c",
  storageBucket: "fir-12f2c.appspot.com",
  messagingSenderId: "207586141753",
  appId: "1:207586141753:web:c121e64adfda4a42b58fe8",
  measurementId: "G-P1VSME91W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);