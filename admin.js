import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Check Login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// Add Course
window.addCourse = async function () {

  const courseName = document.getElementById("courseName").value;
  const teacherName = document.getElementById("teacherName").value;
  const description = document.getElementById("courseDescription").value;
  const thumbnail = document.getElementById("thumbnail").value;
const videoUrl = document.getElementById("videoUrl").value;
const pdfUrl = document.getElementById("pdfUrl").value;

  if (!courseName || !teacherName) {
    alert("Please fill all required fields.");
    return;
  }
await addDoc(collection(db, "courses"), {
  courseName,
  teacherName,
  description,
  thumbnail,
  videoUrl,
  pdfUrl,
  createdAt: new Date().toISOString()
});
  
  alert("Course Added Successfully");

  document.getElementById("courseName").value = "";
  document.getElementById("teacherName").value = "";
  document.getElementById("courseDescription").value = "";
  document.getElementById("thumbnail").value = "";
  document.getElementById("videoUrl").value = "";
  document.getElementById("pdfUrl").value = "";
  loadCourses();
};

// Load Courses
async function loadCourses() {

  const list = document.getElementById("courseList");
  list.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "courses"));

  querySnapshot.forEach((course) => {

    const data = course.data();

    list.innerHTML += `
      <div class="course">
        <h3>${data.courseName}</h3>
        <p><b>Teacher:</b> ${data.teacherName}</p>
        <p>${data.description}</p>

        <button onclick="deleteCourse('${course.id}')">
          Delete
        </button>
      </div>
    `;
  });
}

loadCourses();

// Delete Course
window.deleteCourse = async function(id){

  await deleteDoc(doc(db,"courses",id));

  alert("Course Deleted");

  loadCourses();

}

// Logout
window.logout=function(){

signOut(auth).then(()=>{

window.location.href="login.html";

});

}
