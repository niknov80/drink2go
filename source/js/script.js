/* в этот файл добавляет скрипты*/
import {toggleClickHandler, detectedScript} from "./modules/menu.js";
// import Swiper, {Navigation, Pagination} from "swiper";
// import {initSwiper} from "./modules/slider.js";

detectedScript();
toggleClickHandler();
// initSwiper();
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  // modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});

const slider = document.querySelector('.swiper');
const sliderWidth = document.body.clientWidth;
console.log(sliderWidth);
slider.style.width = `${sliderWidth}px`;

window.addEventListener('resize', (e) => {

  const slider = document.querySelector('.swiper');
  const sliderWidth = document.body.clientWidth;
  console.log(sliderWidth);
  slider.style.width = `${sliderWidth}px`;
});

