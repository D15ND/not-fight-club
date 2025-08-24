import { playerCharacters } from './fight.js';
import { setPlayerHero } from './heroes-data.js';

const heroPageOpenButton = document.querySelector('.person__icon');
const heroPage = document.querySelector('.hero__page');
const heroChouseContainer = document.querySelector('.hover__container');
const heroPopup = document.querySelector('.hero__popup');
const closePopupButton = document.querySelector('.close__hero-btn');
const audioChoose = document.querySelector('.audio__choose');
const settingsPopup = document.querySelector('.settings__popup');
const chooseContainer = document.querySelectorAll('.hero__chose__container');
const sections = document.querySelectorAll('section');

const mainHeroPicture = document.querySelectorAll('.hero__avatar');
const heroFirst = document.querySelector('.hero1');
const heroSecond = document.querySelector('.hero2');
const heroThird = document.querySelector('.hero3');
const heroFourth = document.querySelector('.hero4');

export function closeSections() {
  sections.forEach(view => {
    view.style.display = 'none';
  })
}

heroPageOpenButton.addEventListener('click', () => {
  closeSections();
  heroPage.style.display = 'flex';
  heroPageOpenButton.classList.toggle('rotate__anim');
});

heroChouseContainer.addEventListener('click', () => {
  heroPopup.style.display = 'flex';
});

closePopupButton.addEventListener('click', () => {
  heroPopup.style.display = 'none';
});

// hero chouse

function removeBorderAllHeroes() {
  chooseContainer.forEach(border => {
    audioChoose.play();
    border.classList.remove('green__border');
  })
}

let avatarLink = './images/brus_li2.jpg';
const saveAvatar = localStorage.getItem('avatarLink');

if (saveAvatar) {
  mainHeroPicture.forEach((link) => {
    link.src = saveAvatar;
  });
}

audioChoose.volume = 0.1;

heroFirst.addEventListener('click', () => {
  const character = playerCharacters.bruceLee;
  setPlayerHero(character);

  mainHeroPicture.forEach((link) => {
    link.src = character.image;
  });
  avatarLink = character.image;
  removeBorderAllHeroes();
  heroFirst.classList.add('green__border');
  localStorage.setItem('avatarLink', avatarLink);
});

heroSecond.addEventListener('click', () => {
  const character = playerCharacters.asterix;
  setPlayerHero(character);

  mainHeroPicture.forEach((link) => {
    link.src = character.image;
  });
  avatarLink = character.image;
  removeBorderAllHeroes();
  heroSecond.classList.add('green__border');
  localStorage.setItem('avatarLink', avatarLink);
});

heroThird.addEventListener('click', () => {
  const character = playerCharacters.leonardo;
  setPlayerHero(character);

  mainHeroPicture.forEach((link) => {
    link.src = character.image;
  });
  avatarLink = character.image;
  removeBorderAllHeroes();
  heroThird.classList.add('green__border');
  localStorage.setItem('avatarLink', avatarLink);
});

heroFourth.addEventListener('click', () => {
  const character = playerCharacters.juggernaut;
  setPlayerHero(character);

  mainHeroPicture.forEach((link) => {
    link.src = character.image;
  });
  avatarLink = character.image;
  removeBorderAllHeroes();
  heroFourth.classList.add('green__border');
  localStorage.setItem('avatarLink', avatarLink);
});
