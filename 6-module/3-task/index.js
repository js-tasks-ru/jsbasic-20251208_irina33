import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
  }

  render() {
    this.elem = createElement(`
      <div class="carousel">
      
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      
      <div class="carousel__inner">
        ${this.slides.map(({ name, price, image }) => `
        <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${price.toFixed(2)}</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`)}
      </div>
    </div>`);

    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.activeSlideNumber = 0;

    this.rightArrowClass = '.carousel__arrow_right';
    this.leftArrowClass = '.carousel__arrow_left';

    this.rightArrow = this.elem.querySelector(this.rightArrowClass);
    this.leftArrow = this.elem.querySelector(this.leftArrowClass);
    this.leftArrow.style.display = 'none';

    this.onClick();

    return this.elem;
  }

  onClick() {
    this.elem.addEventListener('click', (event) => {
      this.slidesSwitcher(event.target);

      this.addProductToCart(event.target);
    });
  }

  slidesSwitcher(eventTarget) {
    const slidesCount = this.slides.length;

    if (eventTarget.closest(this.rightArrowClass)) {
      this.activeSlideNumber = Math.min(this.activeSlideNumber + 1, slidesCount - 1);
      this.carouselInner.style.transform = `translateX(-${this.carouselInner.offsetWidth * this.activeSlideNumber}px)`;
    }

    if (eventTarget.closest(this.leftArrowClass)) {
      this.activeSlideNumber = Math.max(this.activeSlideNumber - 1, 0);
      this.carouselInner.style.transform = `translateX(-${this.carouselInner.offsetWidth * this.activeSlideNumber}px)`;
    }

    if (this.activeSlideNumber === 0) {
      this.leftArrow.style.display = 'none';
    } else {
      this.leftArrow.style.display = '';
    }

    if (this.activeSlideNumber === slidesCount - 1) {
      this.rightArrow.style.display = 'none';
    } else {
      this.rightArrow.style.display = '';
    }
  }

  addProductToCart(eventTarget) {
    if (eventTarget.closest('.carousel__button')) {
      eventTarget.dispatchEvent(new CustomEvent("product-add", {
        detail: this.slides[this.activeSlideNumber].id,
        bubbles: true
      }));
    }
  }
}
