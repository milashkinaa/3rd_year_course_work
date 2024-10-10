document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.querySelector('.card-grid');

    const flashcards = [
        {
            image: '../static/img/flashcards/body/1.jpg',
            translation: 'толом'
        },
        {
            image: '../static/img/flashcards/body/2.jpg',
            translation: 'теш'
        },
        {
            image: '../static/img/flashcards/body/3.jpg',
            translation: 'ус'
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
