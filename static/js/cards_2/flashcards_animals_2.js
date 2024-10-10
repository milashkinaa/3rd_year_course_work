document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.querySelector('.card-grid');

    const flashcards = [
        {
            image: '../static/img/flashcards/animals/1.jpg',
            translation: 'һарыҡ'
        },
        {
            image: '../static/img/flashcards/animals/2.jpeg',
            translation: 'эт'
        },
        {
            image: '../static/img/flashcards/animals/3.jpeg',
            translation: 'йорт ҡуяны'
        }
    ];


    function createFlashcard(flashcard) {
        const card = document.createElement('div');
        card.className = 'card';

        const front = document.createElement('div');
        front.className = 'front';
        front.style.backgroundImage = `url(${flashcard.image})`;
        front.style.backgroundSize = 'cover';
        front.style.backgroundPosition = 'center';

        const back = document.createElement('div');
        back.className = 'back';
        back.innerHTML = `<h2>${flashcard.translation}</h2>`;

        card.appendChild(front);
        card.appendChild(back);

        return card;
    }

    flashcards.forEach(flashcard => {
        const card = createFlashcard(flashcard);
        cardGrid.appendChild(card);
    });

    cardGrid.addEventListener('click', event => {
        const clickedCard = event.target.closest('.card');
        if (clickedCard) {
            clickedCard.classList.toggle('flipped');
        }
    });
});
