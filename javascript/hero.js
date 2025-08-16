const heroPageOpenButton = document.querySelector('.person__icon');
const fightPage = document.querySelector('.fight__page');
const heroPage = document.querySelector('.hero__page');
const homePage = document.querySelector('.home__page');
const heroChouseContainer = document.querySelector('.hover__container');
const heroPopup = document.querySelector('.hero__popup');
const closePopupButton = document.querySelector('.close__hero-btn');
const audioChoose = document.querySelector('.audio__choose');

const mainHeroPicture = document.querySelectorAll('.hero__avatar');
const heroFirst = document.querySelector('.hero1');
const heroSecond = document.querySelector('.hero2');
const heroThird = document.querySelector('.hero3');
const heroFourth = document.querySelector('.hero4');

heroPageOpenButton.addEventListener('click', () => {
  homePage.style.display = 'none';
  fightPage.style.display = 'none';
  heroPage.style.display = 'flex';
})

heroChouseContainer.addEventListener('click', () => {
  heroPopup.style.display = 'flex';
  // heroPopup.showModal();
})

closePopupButton.addEventListener('click', () => {
  heroPopup.style.display = 'none';
  // heroPopup.close();
})

// hero chouse
let avatarLink = "./images/brus_li2.jpg";
const saveAvatar = localStorage.getItem('avatarLink');

if (saveAvatar) {
  mainHeroPicture.forEach(link => {
    link.src = saveAvatar;
  })
}

audioChoose.volume = 0.3;
heroFirst.addEventListener('click', () => {
  mainHeroPicture.forEach(link => {
    link.src = "./images/brus_li2.jpg";
  })
  audioChoose.play();
  avatarLink = "./images/brus_li2.jpg";
  localStorage.setItem('avatarLink', avatarLink);
})

heroSecond.addEventListener('click', () => {
  mainHeroPicture.forEach(link => {
    link.src = "./images/asterix.jpg";
  })
  audioChoose.play();
  avatarLink = './images/asterix.jpg';
  localStorage.setItem('avatarLink', avatarLink);
})

heroThird.addEventListener('click', () => {
  mainHeroPicture.forEach(link => {
    link.src = "./images/leonardo.jpg";
  })
  audioChoose.play();
  avatarLink = './images/leonardo.jpg';
  localStorage.setItem('avatarLink', avatarLink);
})

heroFourth.addEventListener('click', () => {
  mainHeroPicture.forEach(link => {
    link.src = "./images/jaga.jpg";
  })
  audioChoose.play();
  avatarLink = './images/jaga.jpg';
  localStorage.setItem('avatarLink', avatarLink);
})

// document.addEventListener('click', function (event) {
//   if (window.heroPopup && !heroPopup.contains(event.target)) {
//     console.log('vne popup click')
//     heroPopup.style.display = 'none';
//   }
// })