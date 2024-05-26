const images = [
    "/10.images/神経衰弱/image1.jpg", "/10.images/神経衰弱/image2.jpg", "/10.images/神経衰弱/image3.jpg", "/10.images/神経衰弱/image4.jpg",
    "/10.images/神経衰弱/image1.jpg", "/10.images/神経衰弱/image2.jpg", "/10.images/神経衰弱/image3.jpg", "/10.images/神経衰弱/image4.jpg"
];

let flippedCards = [];
let matchedCards = [];
let hasFlippedCard = false;
let lockBoard = false;

const gameBoard = document.getElementById("game-board");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.style.display = "none";
    shuffle(images);
    createBoard();
}

function createBoard() {
    for (let i = 0; i < images.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = i;
        card.addEventListener("click", flipCard);

        const img = document.createElement("img");
        img.src = images[i];
        img.classList.add("hidden");

        card.appendChild(img);
        gameBoard.appendChild(card);
    }
}

function flipCard() {
    if (lockBoard) return;
    if (this === flippedCards[0]) return;

    this.firstChild.classList.remove("hidden");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        flippedCards[0] = this;
        return;
    }

    flippedCards[1] = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = flippedCards[0].firstChild.src === flippedCards[1].firstChild.src;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    flippedCards.forEach(card => {
        card.removeEventListener("click", flipCard);
        matchedCards.push(card);
    });

    if (matchedCards.length === images.length) {
        setTimeout(() => alert("ゆー、うぃん。"), 500);
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        flippedCards.forEach(card => {
            card.firstChild.classList.add("hidden");
        });
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [flippedCards[0], flippedCards[1]] = [null, null];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}