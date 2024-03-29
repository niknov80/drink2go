const toggle = document.querySelector('.user-nav__button');
const menu = document.querySelector('.main-nav');

export const toggleClickHandler = () => {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('main-nav--closed');
  })
}

export const detectedScript = () => {
  menu.classList.remove('no-js');
  menu.classList.add('main-nav--closed');
}
