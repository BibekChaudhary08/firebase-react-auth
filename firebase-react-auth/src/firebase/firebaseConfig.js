// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChiGbrMKWtcG9ZHSluV-NwzruYUcDHfq8",
  authDomain: "auth-4d615.firebaseapp.com",
  projectId: "auth-4d615",
  storageBucket: "auth-4d615.appspot.com",
  messagingSenderId: "845089615419",
  appId: "1:845089615419:web:1e18d8b3f71d65f130b61e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);