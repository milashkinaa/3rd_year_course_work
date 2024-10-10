let words = [
    { question: "өй", answer: "дом" },
    { question: "йорт", answer: "дом (многоквартирный)" },
    { question: "ҡат", answer: "этаж" },
    { question: "бүлмә", answer: "комната" },
    { question: "тәҙрә", answer: "окно" },
    { question: "ишек", answer: "дверь" },
    { question: "түбә", answer: "потолок" },
    { question: "диуар", answer: "стена" },
    { question: "иҙән", answer: "пол" },
    { question: "бәҙрәф", answer: "туалет" },
    { question: "ванна бүлмәһе", answer: "ванная" },
    { question: "өҫтәл", answer: "стол" },
    { question: "ултырғыс", answer: "стул" },
    { question: "карауат", answer: "кровать" },
    { question: "кәштә", answer: "полка" },
    { question: "көҙгө", answer: "зеркало" },
    { question: "элгес", answer: "вешалка" },
    { question: "япма", answer: "покрывало" },
    { question: "ҡорма/ҡорған", answer: "шторы" },
    { question: "селтәр", answer: "тюль" },
    { question: "тәҙрә төбө", answer: "подоконник" },
    { question: "һыуытҡыс", answer: "холодильник" },
    { question: "саң һурҙырғыс", answer: "пылесос" },
    { question: "кер йыуыу машинаһы", answer: "стиральная машина" },
    { question: "тегеү машинаһы", answer: "швейная машина" },
    { question: "мейес", answer: "печь" },
    { question: "плитә", answer: "плита" },
    { question: "кәстрүл", answer: "кастрюля" },
    { question: "тәрилкә", answer: "тарелка" },
    { question: "самауыр", answer: "самовар" },
    { question: "сәйнүк", answer: "чайник" },
    { question: "сынаяҡ", answer: "чашка" },
    { question: "бысаҡ", answer: "нож" },
    { question: "ижау/сүмес", answer: "половник" },
    { question: "сәнске", answer: "вилка" },
    { question: "ҡалаҡ", answer: "ложка" },
    { question: "бал ҡалағы/сәй ҡалағы", answer: "чайная ложка" },
    { question: "ҡырғыс", answer: "терка" },
    { question: "ит турағыс", answer: "мясорубка" }
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
