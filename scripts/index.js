const modalOverlay = document.querySelector('.modal-overlay');
const modalCard = document.querySelector('.modal__card');
const cards = document.querySelectorAll('.card');
const closeClick = document.querySelector('.close-modal');

for (let card of cards) {
  card.addEventListener('click', function() {
    modalOverlay.classList.add('active');
    modalCard.innerHTML += `${card.innerHTML}`;
  });
}

closeClick.addEventListener('click', function() {
  modalOverlay.classList.remove('active');
  modalCard.innerHTML = '';
});
