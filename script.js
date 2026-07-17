document.addEventListener("DOMContentLoaded", function () {
    console.log("EduNova Website Loaded Successfully!");

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            alert("🚀 Welcome to EduNova!\nLearning Platform Coming Soon.");
        });
    }
});
// ===========================
// EduNova - script.js
// ===========================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to EduNova 🚀");
});

// ===========================
// Auto Image Slider
// ===========================

const slides = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let currentSlide = 0;

function changeSlide() {
    const slider = document.getElementById("sliderImage");

    if (slider) {
        slider.src = slides[currentSlide];
        currentSlide = (currentSlide + 1) % slides.length;
    }
}

setInterval(changeSlide, 3000);

// ===========================
// Search Function
// ===========================

function searchCourse() {

    let input = document.getElementById("searchInput");

    if (!input) return;

    let value = input.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (card.innerText.toLowerCase().includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

// ===========================
// Dark Mode
// ===========================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

}

// ===========================
// Back To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (!topBtn) return;

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// ===========================
// Simple Scroll Animation
// ===========================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});
