function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner');

  const rightArrowClass = '.carousel__arrow_right';
  const leftArrowClass = '.carousel__arrow_left';
  const rightArrow = carousel.querySelector(rightArrowClass);
  const leftArrow = carousel.querySelector(leftArrowClass);
  leftArrow.style.display = 'none';

  const slidesCount = 4;
  let i = 0;
  const slideWidth = carouselInner.offsetWidth;

  carousel.addEventListener('click', (event) => {
    if (event.target.closest(rightArrowClass)) {
      i = Math.min(i + 1, slidesCount - 1);
      carouselInner.style.transform = `translateX(-${slideWidth * i}px)`;
    }

    if (event.target.closest(leftArrowClass)) {
      i = Math.max(i - 1, 0);
      carouselInner.style.transform = `translateX(-${slideWidth * i}px)`;
    }

    if (i === 0) {
      leftArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
    }

    if (i === slidesCount - 1) {
      rightArrow.style.display = 'none';
    } else {
      rightArrow.style.display = '';
    }
  });
}
