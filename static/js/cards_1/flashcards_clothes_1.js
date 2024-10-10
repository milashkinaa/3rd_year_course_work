let words = [
    { question: "кейем-һалым", answer: "одежда" },
    { question: "өҫкө кейем", answer: "верхняя одежда" },
    { question: "күлдәк/ирҙәр күлдәге", answer: "платье/рубашка" },
    { question: "салбар", answer: "брюки" },
    { question: "яулыҡ", answer: "платок" },
    { question: "бүрек", answer: "шапка" },
    { question: "күн бирсәткәләр", answer: "кожаные перчатки" },
    { question: "тун", answer: "шуба" },
    { question: "итектәр", answer: "сапоги" },
    { question: "башлыҡ", answer: "шапка вязаная" },
    { question: "бейәләй", answer: "варежки" },
    { question: "балаҡтар", answer: "штанины" },
    { question: "күлдәк итәге", answer: "подол платья" },
    { question: "туфли/туфлиҙар", answer: "туфли" },
    { question: "быйма", answer: "валенок" },
    { question: "ойоҡ", answer: "чулки" },
    { question: "еп ойоҡ", answer: "носки" },
    { question: "яға", answer: "воротник" }
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
