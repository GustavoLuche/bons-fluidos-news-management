// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-UF3gSE1lZFJvFgqVhBxHEsmJXrqH02s",
  authDomain: "precise-airship-398418.firebaseapp.com",
  projectId: "precise-airship-398418",
  storageBucket: "precise-airship-398418.appspot.com",
  messagingSenderId: "271597864169",
  appId: "1:271597864169:web:f2f3fdef59cd4eb56b5c78",
  measurementId: "G-XHGXL4MQ00",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
