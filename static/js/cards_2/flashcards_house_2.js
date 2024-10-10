document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.querySelector('.card-grid');

    const flashcards = [
        {
            image: '../static/img/flashcards/house/1.jpg',
            translation: 'тәҙрә'
        },
        {
            image: '../static/img/flashcards/house/2.jpg',
            translation: 'ултырғыс'
        },
        {
            image: '../static/img/flashcards/house/3.jpg',
            translation: 'һыуытҡыс'
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
