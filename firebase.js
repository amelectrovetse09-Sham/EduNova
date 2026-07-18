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
window.signup = async function () {

  const name = document.getElementById("fullName").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  try {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "students", userCredential.user.uid), {
      name: name,
      mobile: mobile,
      email: email,
      createdAt: new Date().toISOString()
    });

    alert("✅ Account Created Successfully!");
    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
  }

};
