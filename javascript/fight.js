const fightPageOpenButton = document.querySelector('.fight__button');
const fightPage = document.querySelector('.fight__page');
const homePage = document.querySelector('.home__page');
const kickInputs = document.querySelectorAll('.kick__input');
const protectInputs = document.querySelectorAll('.protect__input');
const attackButton = document.querySelector('.attack__button');

let heroProtectZones = [];
let deleted = [];

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
    checkStatusInputs();
  })
})

protectInputs.forEach(chooseeed => {
  chooseeed.addEventListener('change', () => {
    const selected = document.querySelectorAll('.protect__input:checked');
    heroProtectZones.push(chooseeed.id);
    heroProtectZones = Array.from(new Set(heroProtectZones));
    if (heroProtectZones.length > 2) {
      deleted = heroProtectZones.shift();
      document.getElementById(deleted).checked = false;
    }
    console.log(heroProtectZones);
    checkStatusInputs();
  })
})

function checkStatusInputs() {
  const selectedKickPlayer = document.querySelector('.kick__input:checked');
  const selectedProtectPlayer = document.querySelectorAll('.protect__input:checked');
  if (selectedKickPlayer && selectedProtectPlayer.length === 2) {
    attackButton.classList.add('unlock__attack-btn');
  } else {
    attackButton.classList.remove('unlock__attack-btn');
  }
}
checkStatusInputs();