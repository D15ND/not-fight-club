const mainOpenButton = document.querySelector('.fight__icon');
const homePage = document.querySelector('.home__page');
const heroPage = document.querySelector('.hero__page');
const fightPage = document.querySelector('.fight__page');
const heroPopup = document.querySelector('.hero__popup');
const settingsPopup = document.querySelector('.settings__popup');


mainOpenButton.addEventListener('click', () => {
  heroPage.style.display = 'none';
  fightPage.style.display = 'none';
  heroPopup.style.display = 'none';
  settingsPopup.style.display = 'none';
  homePage.style.display = 'flex';
})