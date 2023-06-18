/* в этот файл добавляет скрипты*/
import {detectedScript, toggleClickHandler} from "./modules/menu.js";
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

const sortListElement = document.querySelector('.sort__list');
const sortItemInit = sortListElement.querySelector('.sort__item--init');
const sortItemsElement = sortListElement.querySelectorAll('.sort__item');
const sortWithoutInit = sortListElement.querySelectorAll('.sort__item:not(.sort__item--init)');
// let sortText = 'По умолчанию';
// sortItemInit.innerHTML = sortText;
// const url = window.location.search;
// const setSortText = (url) => {
//   sortText = url.split('=')[1];
//   sortItemInit.innerHTML = sortText;
// }
// setSortText(url);


sortItemInit.addEventListener('click', () => {
  sortItemsElement.forEach((item) => {
    item.style.display = 'flex';
  })
});

const removeCurrentClass = () => {
  let sortCurrentElement = sortListElement.querySelector('.sort__link--current');
  sortCurrentElement.classList.remove('sort__link--current');
}

const setCurrentText = (text) => {
  sortItemInit.textContent = text;
}

const hideSortList = () => {
  sortWithoutInit.forEach((item) => {
      item.style.display = 'none';
  })
};

sortItemsElement.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    removeCurrentClass();
    e.target.classList.add('sort__link--current');
    setCurrentText(e.target.textContent);
    // hideSortList();
    console.log(sortWithoutInit);
  })
})
