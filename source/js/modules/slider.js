const sliderListElement = document.querySelectorAll('.slider__item');
const nextButtonElement = document.querySelector('.slider__arrow--next');
const prevButtonElement = document.querySelector('.slider__arrow--prev');
const sliderElement = document.querySelector('.slider');

const getCurrentSliderID = () => {
  const currentSliderElement = document.querySelector('.slider__item--current');
  return currentSliderElement.dataset.order;
}

const getSliderBg = (slideID) => {
  let slideColor = sliderListElement[slideID].dataset.color;
  let bg = '';
  if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    bg = `linear-gradient(to bottom, ${slideColor} 0%, ${slideColor} 76%, #ffffff 76%, #ffffff 100%)`;
  } else {
    bg = `linear-gradient(to bottom, ${slideColor} 0%, ${slideColor} 100%)`;
  }
  return bg;
}

let nextSliderID = 0;

export const arrowClickHandler = () => {
  nextButtonElement.addEventListener('click', () => {

    let currentSliderID = Number(getCurrentSliderID());

    if (currentSliderID + 1 === sliderListElement.length) {
      nextSliderID = 0;
    } else {
      nextSliderID = Number(currentSliderID + 1);
    }

    sliderListElement[currentSliderID].classList.remove('slider__item--current');
    sliderListElement[nextSliderID].classList.add('slider__item--current');
    sliderElement.style.background = getSliderBg(nextSliderID);
  })
  prevButtonElement.addEventListener('click', () => {
    let currentSliderID = Number(getCurrentSliderID());

    if (currentSliderID - 1 < 0 ) {
      nextSliderID = sliderListElement.length - 1;
    } else {
      nextSliderID = Number(currentSliderID  - 1);
    }

    sliderListElement[currentSliderID].classList.remove('slider__item--current');
    sliderListElement[nextSliderID].classList.add('slider__item--current');
    sliderElement.style.background = getSliderBg(nextSliderID);
  })
}
