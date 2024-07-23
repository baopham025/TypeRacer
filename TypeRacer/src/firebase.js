import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";

// My Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcCxN8VIdXDP0roKF19VQqFL_wD2M9FV8",
  authDomain: "speedykeys-cd1b3.firebaseapp.com",
  projectId: "speedykeys-cd1b3",
  storageBucket: "speedykeys-cd1b3.appspot.com",
  messagingSenderId: "815092878843",
  appId: "1:815092878843:web:ce955d6a875d68b8644f5e",
  measurementId: "G-QRXZNY730E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

export { auth, db, analytics, getFirestore, app }; 
