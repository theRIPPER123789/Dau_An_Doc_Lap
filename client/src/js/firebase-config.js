// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKG5lqeTMWsciE7pV5KXu_UrYsKrvzpYE",
  authDomain: "dau-an-doc-lap.firebaseapp.com",
  projectId: "dau-an-doc-lap",
  storageBucket: "dau-an-doc-lap.firebasestorage.app",
  messagingSenderId: "508239057748",
  appId: "1:508239057748:web:6f1121824cb6d919f6aec1",
  measurementId: "G-E80JECDKC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export{auth, db};