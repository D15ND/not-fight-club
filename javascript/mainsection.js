import {closeSections} from './hero.js';

const mainOpenButton = document.querySelector('.fight__icon');
const homePage = document.querySelector('.home__page');

mainOpenButton.addEventListener('click', () => {
  closeSections();
  homePage.style.display = 'flex';
})