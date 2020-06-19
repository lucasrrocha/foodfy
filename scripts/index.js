const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal__content');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function() {
    const imageId = card.getAttribute('id');
    const h2Text = card.querySelector('img').getAttribute('alt');
    const pText = card.querySelector('p');

    let contentH2 = document.createElement('h2');
    contentH2.appendChild(document.createTextNode(`${h2Text}`));

    let closeModal = document.createElement('a');
    closeModal.setAttribute('class', 'close-modal');
    closeModal.setAttribute('onClick', 'closeModalButton()');

    let closeIcon = document.createElement('i');
    closeIcon.setAttribute('class', 'material-icons');
    closeIcon.appendChild(document.createTextNode('close'));

    closeModal.appendChild(closeIcon);

    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = `./assets/${imageId}.png`;
    modalContent.appendChild(contentH2);
    modalContent.appendChild(pText);
    modalContent.appendChild(closeModal);
  });
}

function closeModalButton() {
  modalOverlay.classList.remove('active');
  modalContent.innerHTML = '';
}

// closeClick.addEventListener('click', function() {
//   modalOverlay.classList.remove('active');
// });
