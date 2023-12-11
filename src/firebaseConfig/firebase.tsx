import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBitmoWWq6GPhZKfkUt0hfGskhkt6b09zM",
  authDomain: "proyecto-final-c3c01.firebaseapp.com",
  projectId: "proyecto-final-c3c01",
  storageBucket: "proyecto-final-c3c01.appspot.com",
  messagingSenderId: "959453747654",
  appId: "1:959453747654:web:c7f2e74cd1f1c50126fac7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);