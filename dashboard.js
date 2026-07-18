import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc
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

// Check Login
onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  try {

    const docRef = doc(db, "students", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      const data = docSnap.data();

      document.getElementById("userName").innerText =
        "Welcome, " + data.name;

      document.getElementById("userEmail").innerText =
        "📧 " + data.email;

      document.getElementById("userMobile").innerText =
        "📱 " + data.mobile;

    } else {

      document.getElementById("userName").innerText =
        "Welcome Student";

      document.getElementById("userEmail").innerText =
        user.email;

    }

  } catch (error) {

    console.log(error);

  }

});

// Logout
window.logout = function () {

  signOut(auth)
    .then(() => {
      alert("Logout Successful");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });

};
