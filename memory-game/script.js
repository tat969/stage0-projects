const card = document.querySelectorAll('.memory_card');
let ClickedCard = false;
let firstCard, secondCard;
let lockBoard = false;

card.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  if(lockBoard) return;
  if(this === firstCard) return;

  this.classList.add('flip');

  if(!ClickedCard) {
    ClickedCard = true;
    firstCard = this;
    return;

  } else {
    secondCard = this;

    matchingCards();
} 
}

function matchingCards() {
  if(firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
 } else {
  unflipCards();
}
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard () {
  [ClickedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

