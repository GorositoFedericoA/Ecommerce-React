import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp-e32KvymVKk12VHI1XvBWxdrIx-fBp4",
  authDomain: "ecommerce-react-20a20.firebaseapp.com",
  projectId: "ecommerce-react-20a20",
  storageBucket: "ecommerce-react-20a20.firebasestorage.app",
  messagingSenderId: "469891574010",
  appId: "1:469891574010:web:a5b19b4eb43d4d78e98143",
  measurementId: "G-BV5132CWT6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;