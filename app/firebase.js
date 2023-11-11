// Import the functions you need from the SDKs you need
require('dotenv').config();
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU8JrlgqGa5ZFFGXQG2eQVapp35v1NKcU",
  authDomain: "expense-tracker-e856f.firebaseapp.com",
  projectId: "expense-tracker-e856f",
  storageBucket: "expense-tracker-e856f.appspot.com",
  messagingSenderId: "88583824447",
  appId: "1:88583824447:web:d3ebf1652ac170ab5f848a",
  measurementId: "G-Y2V4QY7XES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
