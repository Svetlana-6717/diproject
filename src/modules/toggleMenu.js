'use strict';

const toggleMenu = () => {
  const topMenu = document.querySelector('.top-menu');
  const items = topMenu.querySelectorAll('li>a');
  const services = document.getElementById('services');
  const faq = document.getElementById('faq');
  const contacts = document.getElementById('contacts');

  let arr = [];
  arr.push(services, faq, contacts);

  const scroll = (el, direction) => {
    let duration = 2000;
    let start = new Date().getTime();

    const fn = () => {
      let top = el.getBoundingClientRect().top - 100;

      let now = new Date().getTime() - start;
      let result = Math.round(top * now / duration);

      if (result > direction * top) {
        result = top;

      } else if (result === 0) {
        result = direction;
      } else {
        result = result;
      }

      if (direction * top > 0) {
        window.scrollBy(0, result);
        requestAnimationFrame(fn);
      }
    };
    requestAnimationFrame(fn);
  };

  const switchLinks = (el) => {
    let current;
    [].forEach.call(items, (item, index) => {
      if (item === el) {
        current = index;
      }
    });
    return current;
  };

  const selectId = (current) => {
    arr.forEach.call(arr, (item, index) => {

      if (index === current) {
        let startY = item.getBoundingClientRect().top - 100;
        let direction;

        if (startY < 0) {
          direction = -1;
        } else if (startY > 0) {
          direction = 1;
        }
        else {
          direction = 0;
        }

        if (direction === 0) {
          return;
        }
        scroll(item, direction);
      }
    });
  };

  topMenu.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;
    if (target.tagName !== 'A') {
      return;
    }
    let current = switchLinks(target);
    selectId(current);
  });


};

export default toggleMenu;
