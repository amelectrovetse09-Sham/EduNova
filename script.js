// =========================
// EduNova Script.js
// =========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎓 EduNova Loaded Successfully");

    // ---------- Auto Slider ----------
    const slides = document.querySelectorAll(".slide");
    let current = 0;

    if (slides.length > 0) {

        slides[current].classList.add("active");

        setInterval(() => {

            slides[current].classList.remove("active");

            current = (current + 1) % slides.length;

            slides[current].classList.add("active");

        }, 3000);

    }

    // ---------- Scroll Animation ----------
    const cards = document.querySelectorAll(".card");

    function revealCards() {

        cards.forEach(card => {

            const top = card.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }

        });

    }

    window.addEventListener("scroll", revealCards);

    revealCards();

    // ---------- Load Theme ----------
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

    }

});

// =========================
// Search
// =========================

function searchCourse() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    const value = input.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        card.style.display =
            card.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";

    });

}

// =========================
// Dark Mode
// =========================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );

}

// =========================
// Profile Menu
// =========================

function toggleProfile() {

    document.getElementById("profileMenu").classList.toggle("show");

}

window.addEventListener("click", function(e){

    const profile = document.querySelector(".profile");

    if(profile && !profile.contains(e.target)){

        document.getElementById("profileMenu").classList.remove("show");

    }

});

// =========================
// Back To Top
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    topBtn.style.display =
        document.documentElement.scrollTop > 300
        ? "block"
        : "none";

});

function topFunction() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

// =========================
// Notification
// =========================

const notification = document.querySelector(".notification");

if(notification){

    notification.addEventListener("click", () => {

        alert("📢 New Mock Test Available!\n🎉 New Notes Uploaded!");

    });

                      }
