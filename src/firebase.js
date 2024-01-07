import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA27J47LXF8_qeWSs7i4aksXApbJivX1Bs",
  authDomain: "chat-cd732.firebaseapp.com",
  projectId: "chat-cd732",
  storageBucket: "chat-cd732.appspot.com",
  messagingSenderId: "303558491433",
  appId: "1:303558491433:web:395a5f5f0ec0df0fe9cb38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(); 
export const db= getFirestore();
export const storage = getStorage();