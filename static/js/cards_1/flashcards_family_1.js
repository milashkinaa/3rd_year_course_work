let words = [
    { question: "әсәй", answer: "мама, мать" },
    { question: "атай", answer: "папа, отец" },
    { question: "олатай", answer: "дедушка" },
    { question: "өләсәй", answer: "бабушка" },
    { question: "ҡусты", answer: "младший брат, братик" },
    { question: "һеңле", answer: "младшая сестра, сестрёнка" },
    { question: "ағай", answer: "брат, дядя" },
    { question: "апай", answer: "сестра, тетя" },
    { question: "ейән", answer: "внук" },
    { question: "ейәнсәр", answer: "внучка" },
    { question: "ата-әсә", answer: "родители" },
    { question: "ата-бабалар", answer: "предки" },
    { question: "бүлә", answer: "правнук" },
    { question: "бүләсәр", answer: "правнучка" },
    { question: "ҡарт олатай", answer: "прадед" },
    { question: "ҡарт өләсәй", answer: "прабабушка" },
    { question: "бала-саға", answer: "детвора" },
    { question: "йәштәр", answer: "молодежь" },
    { question: "үҫмер", answer: "юноша" },
    { question: "егет", answer: "парень" },
    { question: "ҡыҙ", answer: "девушка" },
    { question: "ҡыҙыҡай", answer: "девочка" },
    { question: "ҡарттар", answer: "старики" },
    { question: "йәш-елкенсәк", answer: "молодежь" },
    { question: "бәпес/бәпәй", answer: "ребенок" },
    { question: "бала", answer: "дитя" },
    { question: "әбей/ҡарсыҡ", answer: "старушка" },
    { question: "бабай/ҡарт", answer: "старик" },
    { question: "ҡарт-ҡоро", answer: "старики и старушки" }
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
