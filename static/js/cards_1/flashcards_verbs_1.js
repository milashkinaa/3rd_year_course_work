let words = [
    { question: "йәшәй", answer: "живет" },
    { question: "ашай", answer: "ест" },
    { question: "эсә", answer: "пьет" },
    { question: "сәйнәй", answer: "жует" },
    { question: "йота", answer: "глотает" },
    { question: "атлай", answer: "шагает" },
    { question: "йүгерә", answer: "бегает" },
    { question: "ята", answer: "лежит" },
    { question: "тора", answer: "встает" },
    { question: "ултыра", answer: "сидит/садится" },
    { question: "баҫа", answer: "встает на ноги" },
    { question: "оса", answer: "летает" },
    { question: "ҡаса", answer: "убегает" },
    { question: "уйнай", answer: "играет" },
    { question: "шаяра", answer: "балуется" },
    { question: "көлә", answer: "смеется" },
    { question: "йылмая", answer: "улыбается" },
    { question: "ҡыуана", answer: "радуется" },
    { question: "шатлана", answer: "радуется" },
    { question: "ярата", answer: "любит" },
    { question: "һөйә", answer: "любит" },
    { question: "борсола", answer: "беспокоится" },
    { question: "ҡайғыра", answer: "переживает/горюет" },
    { question: "һағына", answer: "скучает" },
    { question: "күрә", answer: "видит" },
    { question: "ишетә", answer: "слышит" },
    { question: "һиҙә", answer: "чувствует" },
    { question: "тоя", answer: "осязает" },
    { question: "ҡарай", answer: "смотрит" },
    { question: "тыңлай", answer: "слушает" },
    { question: "еҫкәй", answer: "нюхает" },
    { question: "тәмләй", answer: "пробует на вкус" },
    { question: "йоҡлай", answer: "спит" },
    { question: "уяна", answer: "просыпается" },
    { question: "ала", answer: "берет" },
    { question: "һала", answer: "кладет" },
    { question: "ҡуя", answer: "ставит" },
    { question: "урынлаштыра", answer: "размещает" },
    { question: "алып ташлай", answer: "удаляет/убирает с места" },
    { question: "бирә", answer: "дает" },
    { question: "ҡайтара", answer: "возвращает" },
    { question: "тота", answer: "держит" },
    { question: "ысҡындыра", answer: "отпускает" },
    { question: "ебәрә", answer: "пускает/отпускает" },
    { question: "еткерә", answer: "доносит/доводит" },
    { question: "бара", answer: "идет (куда-то)" },
    { question: "ҡайта", answer: "возвращается" }
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
