'use strict';

const slider = () => {
  const slider = document.querySelector('.top-slider');
  const slide = slider.querySelectorAll('.item');
  const dot = slider.querySelectorAll('.dot');
  const table = slider.querySelectorAll('.table');

  let currentSlide = 0;
  let interval;

  slide[currentSlide].classList.add('item-active');
  dot[currentSlide].classList.add('slick-active');
  table[currentSlide].classList.add('active');

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(dot, currentSlide, 'slick-active');
    prevSlide(table, currentSlide, 'active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(dot, currentSlide, 'slick-active');
    nextSlide(table, currentSlide, 'active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    let target = event.target;
    if (!target.matches('.dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(dot, currentSlide, 'slick-active');
    prevSlide(table, currentSlide, 'active');

    if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });

      nextSlide(slide, currentSlide, 'item-active');
      nextSlide(dot, currentSlide, 'slick-active');
      nextSlide(table, currentSlide, 'active');
    }
  });

  slider.addEventListener('mouseover', () => {
    if (event.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', () => {
    if (event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(3000);

};

export default slider;