// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU2tFilyEbjckruAWSv3uZhyUfC70p_S4",
  authDomain: "p-d-analyser.firebaseapp.com",
  projectId: "p-d-analyser",
  storageBucket: "p-d-analyser.appspot.com",
  messagingSenderId: "687003625113",
  appId: "1:687003625113:web:09fbf32d06cdc90670fa08",
  measurementId: "G-N4SCGDTC8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
