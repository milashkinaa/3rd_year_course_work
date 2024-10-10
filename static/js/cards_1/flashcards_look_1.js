let words = [
    { question: "сибәр", answer: "красивая" },
    { question: "матур", answer: "красивый" },
    { question: "зифа буйлы", answer: "со стройной фигурой" },
    { question: "һомғол", answer: "стройная" },
    { question: "мыҡты", answer: "дюжий/крепкого телосложения" },
    { question: "таҙа", answer: "здоровый" },
    { question: "яурынтаҡ", answer: "плечистый" },
    { question: "һимеҙ", answer: "упитанный" },
    { question: "һипкелле", answer: "веснушчатый/конопатый" },
    { question: "шаҙра", answer: "рябой" },
    { question: "ябыҡ", answer: "худой" },
    { question: "батыр", answer: "храбрый/отважный" },
    { question: "ышаныслы", answer: "надежный" },
    { question: "намыҫлы", answer: "честный" },
    { question: "ҡыйыу", answer: "смелый" },
    { question: "көслө", answer: "сильный" },
    { question: "көләс", answer: "приветливый" },
    { question: "һөйкөмлө", answer: "миловидный" },
    { question: "алсаҡ", answer: "радушный" },
    { question: "игелекле", answer: "добрый" },
    { question: "аҡыллы", answer: "умный" },
    { question: "яуаплы", answer: "ответственный" },
    { question: "тоғро", answer: "верный" },
    { question: "үҙ-үҙенә ышаныусан", answer: "уверенный в себе" },
    { question: "тыйнаҡ", answer: "скромный" },
    { question: "тырыш", answer: "старательный" },
    { question: "егәрле", answer: "прилежный" },
    { question: "эшһөйәр", answer: "трудолюбивый" },
    { question: "ихлас", answer: "чистосердечный" },
    { question: "ябай", answer: "простой" },
    { question: "тәртипле", answer: "порядочный" },
    { question: "ялҡау", answer: "лентяй" },
    { question: "тиҫкәре", answer: "капризный" },
    { question: "килбәтһеҙ", answer: "неуклюжий" },
    { question: "тыңлауһыҙ", answer: "непослушный" },
    { question: "илаҡ", answer: "плакса" },
    { question: "мыжыҡ", answer: "зануда" }
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
