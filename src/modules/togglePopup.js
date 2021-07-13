'use strict';

const togglePopup = () => {
  const btnCallback = document.querySelectorAll('.callback-btn');
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  btnCallback.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      modalOverlay.style.display = `block`;
      modalCallback.style.display = `block`;
    });
  });

  modalOverlay.addEventListener('click', (event) => {
    let target = event.target;

    if (target.tagName === 'IMG') {
      modalOverlay.style.display = `none`;
      modalCallback.style.display = `none`;
    } else {
      target = target.closest('.modal-callback');
      if (!target) {
        modalOverlay.style.display = `none`;
        modalCallback.style.display = `none`;
      }
    }
  });
};

export default togglePopup;
