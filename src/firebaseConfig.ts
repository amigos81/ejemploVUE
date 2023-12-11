import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLyFP2jW8p7lW2rd3wcuwcsyqcyAR_-og",
  authDomain: "iestpejemplo.firebaseapp.com",
  projectId: "iestpejemplo",
  storageBucket: "iestpejemplo.appspot.com",
  messagingSenderId: "14265757928",
  appId: "1:14265757928:web:6d2257a34fab45e529d95d"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };