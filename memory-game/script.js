const card = document.querySelectorAll('.memory_card');

function flipCard() {
  this.classList.toggle('flip');
}

card.forEach(card => card.addEventListener('click', flipCard));