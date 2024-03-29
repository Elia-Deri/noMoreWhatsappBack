import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import * as dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

let firebaseApp: FirebaseApp;
export let firestoreDb: Firestore;

export const initializeFirebase = () => {
  try {
    firebaseApp = initializeApp(firebaseConfig);
    firestoreDb = getFirestore();
    return [firebaseApp, firestoreDb];
  } catch (err) {
    console.log(err);
  }
};

export const getFirebaseApp = () => firebaseApp;
