/* в этот файл добавляет скрипты*/
import {detectedScript, toggleClickHandler} from "./modules/menu.js";
import {arrowClickHandler} from "./modules/slider.js";

detectedScript();
toggleClickHandler();
arrowClickHandler();

const initSortElement = document.querySelector('.sort__item--init');
const sortLinksListElement = document.querySelectorAll('.sort__link');
const sortItemsListElement = document.querySelectorAll('.sort__item');
const currentSortLinkElement = document.querySelector('.sort__link--current');
const currentSortItemElement = document.querySelector('.sort__item--current');

const deleteCurrentSort = () => {
  sortItemsListElement.forEach((sortItem) => {
    sortItem.classList.remove('sort__item--current');
    sortItem.childNode.classList

  })
}

const sortItemClickHandler = () => {
  sortLinksListElement.forEach((sortItem) => {
    sortItem.addEventListener('click', (e) => {
      e.preventDefault();
      deleteCurrentSort();
      console.log(e.target.classList.add('sort__link--current'));
    })
  })
}

sortItemClickHandler();
