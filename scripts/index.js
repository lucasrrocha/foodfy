const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal__content');
const cards = document.querySelectorAll('.card');
const closeClick = document.querySelector('.close-modal');

for (let card of cards) {
  card.addEventListener('click', function() {
    const imageId = card.getAttribute('id');
    const h2Text = card.querySelector('img').getAttribute('alt');
    const pText = card.querySelector('.card__info').querySelector('p')
      .textContent;

    const contentH3 = document.createElement('h3');
    contentH3.appendChild(document.createTextNode(`${h2Text}`));

    const contentP = document.createElement('p');
    contentP.appendChild(document.createTextNode(`${pText}`));

    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = `./assets/${imageId}.png`;
    modalContent.appendChild(contentH3);
    modalContent.appendChild(contentP);
  });
}

closeClick.addEventListener('click', function() {
  modalOverlay.classList.remove('active');
  modalContent.innerHTML = '';
});
