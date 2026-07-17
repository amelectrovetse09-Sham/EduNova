document.addEventListener("DOMContentLoaded", function () {
    console.log("EduNova Website Loaded Successfully!");

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            alert("🚀 Welcome to EduNova!\nLearning Platform Coming Soon.");
        });
    }
});
