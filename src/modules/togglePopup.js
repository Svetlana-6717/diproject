'use strict';

const togglePopup = () => {
  const btnCallback = document.querySelectorAll('.callback-btn');
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');
  const formCallback = document.querySelector('form[name = form-callback]');
  const input = formCallback.querySelectorAll('.form-control');
  const statusMessage = formCallback.querySelector('.message');

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

      input.forEach((elem) => {
        if (event.target) {
          elem.value = '';
          elem.style.cssText = `border: 2px solid #E3E3E4; margin-bottom: 20px`;
          elem.nextElementSibling.textContent = '';
        }
      });
      statusMessage.textContent = '';

    } else {
      target = target.closest('.modal-callback');
      if (!target) {
        modalOverlay.style.display = `none`;
        modalCallback.style.display = `none`;

        input.forEach((elem) => {
          if (event.target) {
            elem.value = '';
            elem.style.cssText = `border: 2px solid #E3E3E4; margin-bottom: 20px`;
            elem.nextElementSibling.textContent = '';
          }
        });
        statusMessage.textContent = '';

      }
    }
  });
};

export default togglePopup;
