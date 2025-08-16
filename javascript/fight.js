const fightPageOpenButton = document.querySelector('.fight__button');
const fightPage = document.querySelector('.fight__page');
const homePage = document.querySelector('.home__page');

fightPageOpenButton.addEventListener('click', () => {
  homePage.style.display = 'none';
  fightPage.style.display = 'flex';
})