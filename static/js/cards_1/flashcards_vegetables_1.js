let words = [
    { question: "картуф", answer: "картофель/картошка" },
    { question: "кәбеҫтә", answer: "капуста" },
    { question: "кишер", answer: "морковь" },
    { question: "һуған", answer: "лук" },
    { question: "һарымһаҡ", answer: "чеснок" },
    { question: "шалҡан", answer: "репа" },
    { question: "редис", answer: "редиска" },
    { question: "ҡабаҡ", answer: "тыква" },
    { question: "ҡауын", answer: "дыня" },
    { question: "ҡарбуз", answer: "арбуз" },
    { question: "ҡыяр", answer: "огурец" },
    { question: "борсаҡ", answer: "горох" },
    { question: "помидор", answer: "помидор" },
    { question: "хөрмә", answer: "хурма" },
    { question: "алма", answer: "яблоко" },
    { question: "әфлисун", answer: "апельсин" },
    { question: "слива", answer: "слива" },
    { question: "виноград", answer: "виноград" },
    { question: "емеш", answer: "фрукт" },
    { question: "еләк", answer: "ягода" },
    { question: "йөҙөм", answer: "изюм" },
    { question: "өрөк", answer: "урюк" },
    { question: "сейә", answer: "вишня" },
    { question: "муйыл", answer: "черемуха" },
    { question: "ҡурай еләге", answer: "малина" },
    { question: "ҡарағат", answer: "смородина" },
    { question: "миләш", answer: "рябина" },
    { question: "балан", answer: "калина" }
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
