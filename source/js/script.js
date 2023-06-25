/* в этот файл добавляет скрипты*/
import {detectedScript, toggleClickHandler} from "./modules/menu.js";
import {arrowClickHandler} from "./modules/slider.js";

detectedScript();
toggleClickHandler();
arrowClickHandler();

const initSortElement = document.querySelector('.sort__item--init');
const dropdownElement = document.querySelector('.sort__dropdown');
const defaultSortElement = dropdownElement.querySelector('#default');
const expensiveSortElement = dropdownElement.querySelector('#expensive');
const cheapSortElement = dropdownElement.querySelector('#cheap');
const topSortElement = dropdownElement.querySelector('#top');

const sortItemClickHandler = () => {
  dropdownElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    switch (evt.target.id) {
      case ('expensive'):
        defaultSortElement.classList.remove('sort__link--current');
        expensiveSortElement.classList.add('sort__link--current');
        cheapSortElement.classList.remove('sort__link--current');
        topSortElement.classList.remove('sort__link--current');
        initSortElement.firstChild.textContent = expensiveSortElement.textContent;
        console.log('expensive');
        break;
      case ('cheap'):
        defaultSortElement.classList.remove('sort__link--current');
        expensiveSortElement.classList.remove('sort__link--current');
        cheapSortElement.classList.add('sort__link--current');
        topSortElement.classList.remove('sort__link--current');
        initSortElement.firstChild.textContent = cheapSortElement.textContent;
        console.log('cheap');
        break;
      case ('top'):
        defaultSortElement.classList.remove('sort__link--current');
        expensiveSortElement.classList.remove('sort__link--current');
        cheapSortElement.classList.remove('sort__link--current');
        topSortElement.classList.add('sort__link--current');
        initSortElement.firstChild.textContent = topSortElement.textContent;
        console.log('top');
        break;
      default:
        defaultSortElement.classList.add('sort__link--current');
        expensiveSortElement.classList.remove('sort__link--current');
        cheapSortElement.classList.remove('sort__link--current');
        topSortElement.classList.remove('sort__link--current');
        initSortElement.firstChild.textContent = defaultSortElement.textContent;
        console.log('default');
        break;
    }
  });
}

sortItemClickHandler();
