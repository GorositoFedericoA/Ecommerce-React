import { collection,addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import products from "./products.js";

const seed = collection(db, "items");

const promises = products.map(product => addDoc(seed, product));

Promise.all(promises)
    .then(() =>{
        console.log("Seeded")
        process.exit(0)
    })