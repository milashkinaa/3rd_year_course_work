let words = [
    { question: "мин", answer: "я" },
    { question: "һин", answer: "ты" },
    { question: "ул", answer: "он (она, оно)" },
    { question: "беҙ", answer: "мы" },
    { question: "һеҙ", answer: "вы" },
    { question: "улар", answer: "они" },
    { question: "минең", answer: "мой (моя, мое)" },
    { question: "һинең", answer: "твой (твоя, твое)" },
    { question: "уның", answer: "его (ее)" },
    { question: "беҙҙең", answer: "наш (наша, наше)" },
    { question: "һеҙҙең", answer: "ваш (ваша, ваше)" },
    { question: "уларҙың", answer: "их" },
    { question: "миңә", answer: "мне" },
    { question: "һиңә", answer: "тебе" },
    { question: "уға", answer: "ему (ей)" },
    { question: "беҙгә", answer: "нам" },
    { question: "һеҙгә", answer: "вам" },
    { question: "уларға", answer: "им" },
    { question: "миндә", answer: "у меня" },
    { question: "беҙҙә", answer: "у нас" },
    { question: "минән", answer: "от меня/с меня" },
    { question: "һинән", answer: "от тебя/с тебя" },
    { question: "унан", answer: "от него (от нее)/с него (с нее)" },
    { question: "ошо", answer: "это/этот/эта (этот самый)" },
    { question: "теге", answer: "то/тот/та (тот другой)" },
    { question: "анау", answer: "то/тот/та (вот тот самый)" },
    { question: "әллә кем", answer: "кто-то" },
    { question: "әллә нәмә", answer: "что-то" },
    { question: "ниндәйҙер", answer: "какой-то" },
    { question: "нисектер", answer: "как-то" },
    { question: "берәүҙәр", answer: "берәүҙәр" },
    { question: "икенселәр", answer: "другие" }
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
