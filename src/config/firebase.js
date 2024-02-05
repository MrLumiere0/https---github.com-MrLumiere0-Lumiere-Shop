import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "lumiere-shop.firebaseapp.com",
  projectId: "lumiere-shop",
  storageBucket: "lumiere-shop.appspot.com",
  messagingSenderId: "544004629513",
  appId: "1:544004629513:web:1aefcf366a580bad1a44d8",
  measurementId: "G-WRK597R7NG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
