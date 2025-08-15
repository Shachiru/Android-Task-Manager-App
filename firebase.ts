import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi5pdYZyBkIdrGi11dDmNKdY1u4EywCdc",
  authDomain: "task-manager-5a350.firebaseapp.com",
  projectId: "task-manager-5a350",
  storageBucket: "task-manager-5a350.firebasestorage.app",
  messagingSenderId: "521770531974",
  appId: "1:521770531974:web:ea5144d3da46b13b19e507",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
