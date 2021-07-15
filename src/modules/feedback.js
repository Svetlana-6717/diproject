'use strict';

const feedback = () => {
  const btnFeedback = document.querySelector('.button-services');
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  btnFeedback.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if (target.tagName === 'A') {
      modalOverlay.style.display = `block`;
      modalCallback.style.display = `block`;
    }
  });
};

export default feedback;