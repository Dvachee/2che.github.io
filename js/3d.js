const cards = findAllCards();
bindEventsCard(cards);


function findAllCards() {
  return document.querySelectorAll('.card');
}

function bindEventsCard(cards) {
  for (let i = 0, length = cards.length; i < length; i++) {
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
  }
}

function startRotate(event) {
  let cardItem = this.querySelector('.grid-item'),
      halfHeight = cardItem.offsetHeight / 2,
      halfWidth = cardItem.offsetWidth / 2;
  
  cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
}

function stopRotate(event) {
  let cardItem = this.querySelector('.grid-item');
  cardItem.style.transform = 'rotate(0)';
}