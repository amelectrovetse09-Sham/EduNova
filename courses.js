import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  // 👇 यहाँ अपना वही Firebase Config पेस्ट करें
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadCourses() {

  const container = document.getElementById("courseContainer");
  container.innerHTML = "";

  const snapshot = await getDocs(collection(db, "courses"));

  if (snapshot.empty) {
    container.innerHTML = "<h2>No Courses Available</h2>";
    return;
  }

  snapshot.forEach((doc) => {

    const course = doc.data();

    container.innerHTML += `
      <div class="course">

        <img src="${course.thumbnail}" 
             onerror="this.src='https://picsum.photos/400/200'">

        <div class="course-content">

          <h2>${course.courseName}</h2>

          <p><b>Teacher:</b> ${course.teacherName}</p>

          <p>${course.description}</p>

          <button onclick="alert('Course will start soon!')">
            Start Learning
          </button>

        </div>

      </div>
    `;

  });

}

loadCourses();
