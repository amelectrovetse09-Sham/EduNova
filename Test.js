let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
    document.getElementById("questionNo").innerHTML =
        "प्रश्न " + (currentQuestion + 1) + " / " + questions.length;

    document.getElementById("question").innerHTML =
        questions[currentQuestion].question;

    let options = "";

    questions[currentQuestion].options.forEach((option, index) => {
        options += `
        <label>
            <input type="radio" name="option" value="${option}"
            ${userAnswers[currentQuestion] == option ? "checked" : ""}>
            ${option}
        </label><br><br>`;
    });

    document.getElementById("options").innerHTML = options;
}

function nextQuestion() {

    let selected = document.querySelector('input[name="option"]:checked');

    if (selected) {
        userAnswers[currentQuestion] = selected.value;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {

    let selected = document.querySelector('input[name="option"]:checked');

    if (selected) {
        userAnswers[currentQuestion] = selected.value;
    }

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitTest() {

    let selected = document.querySelector('input[name="option"]:checked');

    if (selected) {
        userAnswers[currentQuestion] = selected.value;
    }

    score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] == questions[i].answer) {
            score++;
        }
    }

    alert(
        "परीक्षा समाप्त!\n\n" +
        "कुल प्रश्न: " + questions.length +
        "\nसही उत्तर: " + score +
        "\nगलत उत्तर: " + (questions.length - score) +
        "\nप्रतिशत: " + ((score / questions.length) * 100).toFixed(2) + "%"
    );
}

// 30 मिनट का टाइमर
let time = 1800;

setInterval(function () {

    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerHTML =
        min + ":" + (sec < 10 ? "0" : "") + sec;

    if (time > 0) {
        time--;
    } else {
        submitTest();
    }

}, 1000);

loadQuestion();
