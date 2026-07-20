import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnIkFMXLhLFIIxoUHN_iO_QfUujTTja_0",
  authDomain: "edunova-11508.firebaseapp.com",
  projectId: "edunova-11508",
  storageBucket: "edunova-11508.firebasestorage.app",
  messagingSenderId: "622869465696",
  appId: "1:622869465696:web:112371efd1cf8f1b505105",
  measurementId: "G-RPB647L3F6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

async function loadCourse() {

  if (!courseId) {
    document.getElementById("courseTitle").innerText = "Course Not Found";
    return;
  }

  const snap = await getDoc(doc(db, "courses", courseId));

  if (!snap.exists()) {
    document.getElementById("courseTitle").innerText = "Course Not Found";
    return;
  }

  const data = snap.data();

  document.getElementById("courseTitle").innerText = data.courseName;
  document.getElementById("teacher").innerHTML =
    "<b>Teacher:</b> " + data.teacherName;

  document.getElementById("description").innerText =
    data.description || "";

  document.getElementById("video").src =
    data.videoUrl || "";

  document.getElementById("notes").href =
    data.pdfUrl || "#";
}

loadCourse();
