let words = [
    { question: "бер", answer: "один" },
    { question: "ике", answer: "два" },
    { question: "өс", answer: "три" },
    { question: "дүрт", answer: "четыре" },
    { question: "биш", answer: "пять" },
    { question: "алты", answer: "шесть" },
    { question: "ете", answer: "семь" },
    { question: "һигеҙ", answer: "восемь" },
    { question: "туғыҙ", answer: "девять" },
    { question: "ун", answer: "десять" },
    { question: "ун бер", answer: "одиннадцать" },
    { question: "егерме", answer: "двадцать" },
    { question: "утыҙ", answer: "тридцать" },
    { question: "ҡырҡ", answer: "сорок" },
    { question: "илле", answer: "пятьдесят" },
    { question: "алтмыш", answer: "шестьдесят" },
    { question: "етмеш", answer: "семьдесят" },
    { question: "һикһән", answer: "восемьдесят" },
    { question: "туҡһан", answer: "девяносто" },
    { question: "йөҙ", answer: "сто" },
    { question: "ике йөҙ", answer: "двести" },
    { question: "мең", answer: "тысяча" },
    { question: "ярты", answer: "половина" },
    { question: "бер ярым", answer: "полторы" },
    { question: "ике ярым", answer: "два с половиной" },
    { question: "өстән бер өлөш", answer: "одна третья часть" },
    { question: "дүрттән ике", answer: "две четверти" },
    { question: "йөҙ ҙә бер", answer: "сто один" },
    { question: "бер мең бер йөҙ ҙә етмеш ете", answer: "одна тысяча сто семьдесят" }
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
