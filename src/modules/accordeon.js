'use strict';

const accordeon = () => {
  const accordeon = document.querySelector('.accordeon');
  const items = accordeon.querySelectorAll('.element');

  const close = (btn, content) => {
    btn.classList.remove('active');
    content.classList.remove('active');
    content.style.display = `none`;
  };

  const closeAll = (btn, content) => {
    items.forEach((elem) => {
      if (elem.children[0] !== btn && elem.children[1] !== content) {
        close(elem.children[0], elem.children[1]);
      }
    });
  };

  const open = (btn, content) => {
    closeAll();
    content.style.display = `block`;
    btn.classList.add('active');
    content.classList.add('active');
  };

  accordeon.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('title')) {
      const parent = target.closest('.element');
      const content = parent.querySelector('.element-content');

      if (content.classList.contains('active')) {
        close(target, content);
      } else {
        open(target, content);
      }
    }

    items.forEach((elem) => {
      if (elem.children[0].classList.contains('active')) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    });

  });
};

export default accordeon;