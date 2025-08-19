const fightPageOpenButton = document.querySelector('.fight__button');
const fightPage = document.querySelector('.fight__page');
const homePage = document.querySelector('.home__page');
const kickInputs = document.querySelectorAll('.kick__input');
const protectInputs = document.querySelectorAll('.protect__input');
const attackButton = document.querySelector('.attack__button');

let heroProtectZones = [];

fightPageOpenButton.addEventListener('click', () => {
  homePage.style.display = 'none';
  fightPage.style.display = 'flex';
})

kickInputs.forEach(chooseeed => {
  chooseeed.addEventListener('change', () => {
    const selected = document.querySelector('.kick__input:checked');
    if (selected) {
      console.log('kick input is selected');
      console.log('select input id: ', chooseeed.id);
    }
  })
})

protectInputs.forEach(chooseeed => {
  chooseeed.addEventListener('change', () => {
    const selected = document.querySelectorAll('.protect__input:checked');
    heroProtectZones.push(chooseeed.id);
    if (selected.length == 2) {
      console.log('choosed 2 inputs in protect section');
      attackButton.classList.add('unlock__attack-btn')
    } else {
      console.log('choosed 1 or more then 3 inputs in protect section');
      attackButton.classList.remove('unlock__attack-btn');
    }
    console.log(heroProtectZones);
  })
})