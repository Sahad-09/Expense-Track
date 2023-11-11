// Import the functions you need from the SDKs you need
require('dotenv').config();
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.YOUR_API_KEY,
  authDomain: process.YOUR_AUTH_DOMAIN,
  projectId: process.YOUR_PROJECT_ID,
  storageBucket: process.YOUR_STORAGE_BUCKET,
  messagingSenderId: process.YOU_MESSAGING_SENDER_ID,
  appId: process.APP_ID,
  measurementId: process.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
