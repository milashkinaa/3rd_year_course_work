let words = [
    { question: "ат", answer: "лошадь" },
    { question: "айғыр", answer: "жеребец" },
    { question: "бейә", answer: "кобыла" },
    { question: "ҡолон", answer: "жеребенок" },
    { question: "үгеҙ", answer: "бык" },.
    { question: "һыйыр", answer: "корова" },
    { question: "быҙау", answer: "теленок" },
    { question: "һарыҡ", answer: "овца" },
    { question: "һарыҡ бәрәсе", answer: "ягненок" },
    { question: "һарыҡ тәкәһе", answer: "баран" },
    { question: "кәзә", answer: "коза" },
    { question: "кәзә бәрәсе", answer: "козленок" },
    { question: "кәзә тәкәһе", answer: "козёл" },
    { question: "эт", answer: "пес/собака" },
    { question: "көсөк", answer: "щенок" },
    { question: "ата бесәй", answer: "кот" },
    { question: "инә бесәй", answer: "кошка" },
    { question: "бесәй балаһы", answer: "котенок" },
    { question: "сысҡан", answer: "мышь" },
    { question: "йорт ҡуяны", answer: "кролик" },
    { question: "ҡаҙ", answer: "гусь" },
    { question: "ата ҡаҙ", answer: "гусак" },
    { question: "инә ҡаҙ", answer: "гусыня" },
    { question: "ҡаҙ бәпкәһе", answer: "гусенок" },
    { question: "өйрәк", answer: "утка" },
    { question: "өйрәк бәпкәһе", answer: "утенок" },
    { question: "әтәс", answer: "петух" },
    { question: "тауыҡ", answer: "курица" },
    { question: "күркә", answer: "индюк" },
    { question: "инә күркә", answer: "индейка" }
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
