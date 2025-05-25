import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGGEfG5vG2my4N54APUdssXbzLBdEb0aQ",
  authDomain: "fakestore-e9153.firebaseapp.com",
  projectId: "fakestore-e9153",
  storageBucket: "fakestore-e9153.firebasestorage.app",
  messagingSenderId: "219267677757",
  appId: "1:219267677757:web:e9c494cec4adb14034b454"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;