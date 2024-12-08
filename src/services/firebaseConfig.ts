import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDi8frDLSCmcAB5mj1VvpAkvDhMn-aQnFY",
  authDomain: "recuitment-web.firebaseapp.com",
  projectId: "recuitment-web",
  storageBucket: "recuitment-web.firebasestorage.app",
  messagingSenderId: "1062523855476",
  appId: "1:1062523855476:web:82740432cd4d6e27306721",
  measurementId: "G-HVT5E8P44L"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { auth };
