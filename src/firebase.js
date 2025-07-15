import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA45POAxbNmp6r6eHXOyEaJkPnpeqb_w3o",
  authDomain: "mybu-27624.firebaseapp.com",
  databaseURL: "https://mybu-27624-default-rtdb.firebaseio.com",
  projectId: "mybu-27624",
  storageBucket: "mybu-27624.firebasestorage.app",
  messagingSenderId: "805380112740",
  appId: "1:805380112740:web:3836b32f93050f71e97a71",
  //measurementId: "G-K9ENBS13SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };