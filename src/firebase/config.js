// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCuvWUMgtJzv_Fi_7eLooBhRu51Qs2S2U0",
  authDomain: "tranzbook-ab4d3.firebaseapp.com",
  projectId: "tranzbook-ab4d3",
  storageBucket: "tranzbook-ab4d3.appspot.com",
  messagingSenderId: "844912963458",
  appId: "1:844912963458:web:c1c07b25f4985b743fa99b",
  measurementId: "G-2HX4FJ36GX"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;