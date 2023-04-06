// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSb1Ysoks4qasI7OpR5E1jd4ZE-dN-530",
  authDomain: "rve-chatbot.firebaseapp.com",
  projectId: "rve-chatbot",
  storageBucket: "rve-chatbot.appspot.com",
  messagingSenderId: "239409812522",
  appId: "1:239409812522:web:e5c1b16afa4987f2ee1f53"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
console.log(db)

export { db }