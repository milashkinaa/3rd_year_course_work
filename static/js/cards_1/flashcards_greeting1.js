let words = [
    { question: "Һаумыһығыҙ!", answer: "Здравствуйте!" },
    { question: "Һаумы!", answer: "Здравствуй!" },
    { question: "Хәйерле көн!", answer: "Добрый день!" },
    { question: "Хәйерле иртә!", answer: "Доброе утро!" },
    { question: "Хәйерле кис!", answer: "Добрый вечер!" },
    { question: "Сәләм!", answer: "Привет!" },
    { question: "Хәлдәр нисек?", answer: "Как дела?" },
    { question: "Һау булығыҙ!", answer: "До свидания!" },
    { question: "Әлегә хуш!", answer: "Пока!" },
    { question: "Осрашҡанға тиклем!", answer: "До встречи!" },
    { question: "Сәләм әйт!", answer: "Передай привет!" },
    { question: "Шылтырат!", answer: "Позвони!" },
    { question: "Тыныс йоҡо!", answer: "Спокойной ночи!" },
    { question: "Ғәфү итегеҙ.", answer: "Извините" },
    { question: "Рәхмәт!", answer: "Спасибо!" },
    { question: "Ҙур рәхмәт!", answer: "Большое спасибо!" },
    { question: "Изгелеген күр!", answer: "Добра тебе!" },
    { question: "Зинһар өсөн", answer: "Пожалуйста" },
    { question: "Бик шат!", answer: "Очень рад!" },
    { question: "Мөмкинме?", answer: "Можно?" },
    { question: "Мөмкин!", answer: "Можно!" },
    { question: "Әйтегеҙ әле, зинһар", answer: "Подскажите, пожалуйста" },
    { question: "О, бик матур исем!", answer: "О, очень красивое имя!" },
    { question: "Танышыуға шатмын!", answer: "Рад знакомству!" }
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
