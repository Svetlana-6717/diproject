'use strict';

const carousel = () => {
  const wrap = document.querySelector('.services-carousel');
  const slides = wrap.querySelectorAll('.services-carousel__item');
  const btnArrow = document.querySelectorAll('.services-btn');
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  let position = 0;
  const slidesToShow = 3;
  const widthSlide = Math.floor(100 / slidesToShow);

  const prevSlider = () => {
    --position;
    if (position < 0) {
      position = slides.length - slidesToShow;
    }
    wrap.style.transform = `translateX(-${position * widthSlide}%)`;
  };

  const nextSlider = () => {
    if (position < slides.length) {
      ++position;
      if (position > slides.length - slidesToShow) {
        position = 0;
      }
      wrap.style.transform = `translateX(-${position * widthSlide}%)`;
    }
  };

  btnArrow.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.matches('.arrow-right')) {
        nextSlider();
      } else if (target.matches('.arrow-left')) {
        prevSlider();
      }
    });
  });

  wrap.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if (target.tagName === 'A') {
      modalOverlay.style.display = `block`;
      modalCallback.style.display = `block`;
    }
  });
};

export default carousel;