import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
    apiKey: "AIzaSyDKfDyndUNOISTDS86StsyKqSgJBy31YsQ",
    authDomain: "trainingapp-617fc.firebaseapp.com",
    projectId: "trainingapp-617fc",
    storageBucket: "trainingapp-617fc.appspot.com",
    messagingSenderId: "656400301707",
    appId: "1:656400301707:web:3d82a2c3183318c0131e8e",
    measurementId: "G-QK6TWEM6RN"
})

export const auth = getAuth()
export default app

export const db = getFirestore(app);
export const storage = getStorage(app);