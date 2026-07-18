alert("courses.js loaded");
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnIkFMXLHfLIIxoUHN_iO_QfUujTTja_0",
  authDomain: "edunova-11508.firebaseapp.com",
  projectId: "edunova-11508",
  storageBucket: "edunova-11508.firebasestorage.app",
  messagingSenderId: "622869465696",
  appId: "1:622869465696:web:112371efd1cf8f1b505105",
  measurementId: "G-RPB647L3F6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadCourses() {
  const container = document.getElementById("courseContainer");

  try {
    container.innerHTML = "<h2>Loading...</h2>";

    const snapshot = await getDocs(collection(db, "courses"));

    container.innerHTML = "";

    if (snapshot.empty) {
      container.innerHTML = "<h2>No Courses Available</h2>";
      return;
    }

    snapshot.forEach((doc) => {
      const course = doc.data();

      container.innerHTML += `
        <div class="course">
          <img src="${course.thumbnail || 'https://picsum.photos/400/200'}"
               onerror="this.src='https://picsum.photos/400/200'">

          <div class="course-content">
            <h2>${course.courseName}</h2>
            <p><b>Teacher:</b> ${course.teacherName}</p>
            <p>${course.description}</p>
         <button onclick="startCourse('${doc.id}')">
🚀 Start Learning
</button>
          </div>
        </div>
      `;
    });

  } catch (error) {
    container.innerHTML = `<h2 style="color:red;">${error.message}</h2>`;
    console.error(error);
  }
}
window.startCourse = function(courseId) {
    window.location.href = `course.html?id=${courseId}`;
};
loadCourses();
