// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBnIkFMXLhLFIIxoUHN_iO_QfUujTTja_0",
  authDomain: "edunova-11508.firebaseapp.com",
  projectId: "edunova-11508",
  storageBucket: "edunova-11508.firebasestorage.app",
  messagingSenderId: "622869465696",
  appId: "1:622869465696:web:112371efd1cf8f1b505105",
  measurementId: "G-RPB647L3F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Signup
window.signup = function () {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("✅ Account Created Successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Login
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("🎉 Login Successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Logout
window.logout = function () {
  signOut(auth).then(() => {
    alert("Logged Out");
    window.location.href = "login.html";
  });
};
