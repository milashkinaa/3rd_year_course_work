let words = [
    { question: "кеше", answer: "человек" },
    { question: "кәүҙә", answer: "туловище/тело" },
    { question: "баш", answer: "голова" },
    { question: "сәс", answer: "волос" },
    { question: "сәстәр", answer: "волосы" },
    { question: "толом", answer: "коса" },
    { question: "маңлай", answer: "лоб" },
    { question: "ҡаш", answer: "бровь" },
    { question: "күҙ", answer: "глаз" },
    { question: "күҙҙәр", answer: "глаза" },
    { question: "керпек", answer: "ресница" },
    { question: "керпектәр", answer: "ресницы" },
    { question: "күҙ ҡабағы", answer: "веко" },
    { question: "ҡолаҡ", answer: "ухо" },
    { question: "танау", answer: "нос" },
    { question: "бит", answer: "лицо" },
    { question: "бит алмаһы", answer: "щека" },
    { question: "эйәк", answer: "подбородок" },
    { question: "ауыҙ", answer: "рот" },
    { question: "ирен", answer: "губа" },
    { question: "теш", answer: "зуб" },
    { question: "тел", answer: "язык" },
    { question: "аңҡау", answer: "нёбо" },
    { question: "тамаҡ", answer: "горло" },
    { question: "яңаҡ", answer: "челюсть" },
    { question: "мыйыҡ", answer: "усы" },
    { question: "һаҡал", answer: "борода" },
    { question: "елкә", answer: "затылок" },
    { question: "муйын", answer: "шея" },
    { question: "яурын", answer: "плечо" },
    { question: "ҡул", answer: "" },
    { question: "беләк", answer: "предплечье" },
    { question: "терһәк", answer: "локоть" },
    { question: "ҡул суғы", answer: "кисть руки" },
    { question: "ус", answer: "ладонь" },
    { question: "бармаҡ", answer: "палец" },
    { question: "тырнаҡ", answer: "ноготь" },
    { question: "күкрәк/түш", answer: "грудь" },
    { question: "эс", answer: "живот" },
    { question: "арҡа", answer: "спина" },
    { question: "бил", answer: "поясница" },
    { question: "аяҡ", answer: "нога" },
    { question: "бот/янбаш", answer: "бедро" },
    { question: "тубыҡ", answer: "колено" },
    { question: "бәкәл", answer: "голень" },
    { question: "табан", answer: "ступня" },
    { question: "үксә", answer: "пятка" }
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
