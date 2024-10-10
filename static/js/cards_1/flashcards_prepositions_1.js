let words = [
    { question: "уңда", answer: "справа" },
    { question: "уң яҡта", answer: "на правой стороне" },
    { question: "һулда", answer: "слева" },
    { question: "һул яҡта", answer: "на левой стороне" },
    { question: "өҫтөндә", answer: "на (поверхности)" },
    { question: "аҫтында", answer: "под" },
    { question: "эсендә", answer: "в (внутри)" },
    { question: "янында", answer: "возле" },
    { question: "эргәһендә", answer: "рядом" },
    { question: "уртаһында", answer: "посреди (в середине)" },
    { question: "ситендә", answer: "на краю" },
    { question: "алдында", answer: "спереди" },
    { question: "артында", answer: "позади" },
    { question: "өҫтә", answer: "наверху" },
    { question: "аҫта", answer: "внизу" },
    { question: "уртала", answer: "посередине/в середине" },
    { question: "ситтә", answer: "на краю" },
    { question: "ҡырҙа", answer: "на стороне" },
    { question: "башы/башта", answer: "начало" },
    { question: "баштан", answer: "сначала" },
    { question: "башында", answer: "в начале/на начале" },
    { question: "оста", answer: "в конце" },
    { question: "осонда", answer: "на конце" }
];

let currentWordIndex = 0;

document.getElementById("showCard").addEventListener("click", function() {
    showFlashcard();
});

function showFlashcard() {
    document.querySelector(".front").style.display = "block";
    document.querySelector(".back").style.display = "none";
    document.getElementById("question").textContent = words[currentWordIndex].question;
    document.getElementById("answer").textContent = "";
}

document.getElementById("question").addEventListener("click", function() {
    showAnswer();
});

function showAnswer() {
    document.querySelector(".front").style.display = "none";
    document.querySelector(".back").style.display = "block";
    document.getElementById("answer").textContent = words[currentWordIndex].answer;
}

// Переключение карточек
setInterval(function() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
    }
}, 5000); // Карточка меняется каждые 5 секунд
