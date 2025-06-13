import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, setLogLevel } from 'firebase/firestore';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZS-PM_ihoMWrvxEehLmPpnOjuS7TVkQY",
  authDomain: "myesh-892c4.firebaseapp.com",
  projectId: "myesh-892c4",
  storageBucket: "myesh-892c4.appspot.com",
  messagingSenderId: "147936624891",
  appId: "1:147936624891:web:ea9a00825ee41c2866705e",
  measurementId: "G-BC21TD2FFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Optional: log Firestore actions in dev
setLogLevel('debug');
