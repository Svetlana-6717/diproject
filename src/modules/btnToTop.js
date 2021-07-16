'use strict';

const btnToTop = () => {
  const block = document.querySelector('.services-section');
  const toTop = document.querySelector('.toTop');

  const windowScroll = () => {
    const domRec = block.getBoundingClientRect().bottom;
    if (window.pageYOffset < domRec) {
      toTop.style.visibility = `hidden`;
    } else {
      toTop.style.visibility = `visible`;
    }
  };

  const smoothScroll = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 25));
    }
  };

  toTop.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll();
  });

  window.addEventListener('scroll', () => {
    windowScroll();
  });

  window.addEventListener('load', () => {
    windowScroll();
  });

};

export default btnToTop;