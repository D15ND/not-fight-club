import { createHero } from './create-hero.js';
import { getEnemyHero, getPlayerHero } from './heroes-data.js';
import { closeSections } from './hero.js';

const fightPageOpenButton = document.querySelector('.fight__button');
const fightPage = document.querySelector('.fight__page');
const homePage = document.querySelector('.home__page');
const kickInputs = document.querySelectorAll('.kick__input');
const protectInputs = document.querySelectorAll('.protect__input');
const attackButton = document.querySelector('.attack__button');
const playerProgressLine = document.querySelector('.health__user');
const playerHpQuality = document.querySelector('.health__quality-user');
const enemyProgressLine = document.querySelector('.health__enemy');
const enemyHpQuality = document.querySelector('.health__quality-enemy');
const finishPopup = document.querySelector('.finish__popup');
const resultInfo = document.querySelector('.result__description');
const winsCount = document.querySelector('.wins__count');
const losesCount = document.querySelector('.loses__count');
const nicknameGlobal = document.querySelector('.nickname'); // late import from nickname js file.
const enemyName = document.querySelector('.enemy__name'); // redact from Object with random

const savedWins = localStorage.getItem('winsCount');
const savedLoses = localStorage.getItem('losesCount');
if (savedWins) {
  winsCount.textContent = savedWins;
}
if (savedLoses) {
  losesCount.textContent = savedLoses;
}

const playerProtectZone = [];
let playerKickZone = undefined;

fightPageOpenButton.addEventListener('click', () => {
  closeSections();
  removeLogs();
  playerProgressLine.value = 150;
  playerHpQuality.textContent = 150;
  fightPage.style.display = 'flex';
});

attackButton.addEventListener('click', () => {
  attack(getPlayerHero(), getEnemyHero());
});

kickInputs.forEach((chooseeed) => {
  chooseeed.addEventListener('change', (e) => {
    playerKickZone = e.target.value;
    toggleAttackButton();
  });
});

protectInputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    if (e.target.checked) {
      playerProtectZone.push(input.value);
    } else {
      playerProtectZone.splice(playerProtectZone.indexOf(input.value), 1);
    }
    toggleAttackButton();
  });
});

function toggleAttackButton() {
  if (playerProtectZone.length === 2 && playerKickZone) {
    attackButton.classList.add('unlock__attack-btn');
  } else {
    attackButton.classList.remove('unlock__attack-btn');
  }
}

toggleAttackButton();

const enemyKickZone = ['head', 'neck', 'body', 'belly', 'legs'];
const enemyProtectZone = ['head', 'neck', 'body', 'belly', 'legs'];

function enemyRandomKickZone() {
  const randomIndex = Math.floor(Math.random() * enemyKickZone.length);

  return enemyKickZone[randomIndex];
}

function enemyRandomProtectZone() {
  const randomProtectEnemy = [];

  for (let i = 0; i < enemyProtectZone.length; i++) {
    if (randomProtectEnemy.length < 2) {
      randomProtectEnemy.push(
        enemyProtectZone[Math.floor(Math.random() * enemyProtectZone.length)],
      );
    }
  }

  return randomProtectEnemy;
}

function attack(player, enemy) {
  const enemyKickZone = enemyRandomKickZone();
  const enemyProtectZone = enemyRandomProtectZone();

  if (!enemyProtectZone.includes(playerKickZone) && playerProtectZone.length === 2) {
    enemy.hp -= player.damage;
    enemyProgressLine.value -= player.damage;
    enemyHpQuality.textContent -= player.damage;
    const newLog = document.createElement("p");
    newLog.className = 'log__styles';
    newLog.textContent = `${enemyName.textContent} attacked ${nicknameGlobal.textContent} to ${enemyRandomKickZone()} and dealth ${enemy.damage} damage.`;
    document.querySelector('.log__information').appendChild(newLog);
    if (enemyProgressLine.value <= 0) {
      finishPopup.style.display = 'flex';
      winsCount.textContent = +(winsCount.textContent) + 1;
      localStorage.setItem('winsCount', winsCount.textContent);
    }
  } else if (enemyProtectZone.includes(playerKickZone) && playerProtectZone.length === 2) {
    const newLog = document.createElement("p");
    newLog.className = 'log__styles';
    newLog.textContent = `${enemyName.textContent} attacked ${nicknameGlobal.textContent} to ${enemyRandomKickZone()}, but attack blocked.`;
    document.querySelector('.log__information').appendChild(newLog);
  }

  if (!playerProtectZone.includes(enemyKickZone) && playerProtectZone.length === 2) {
    player.hp -= enemy.damage;
    playerProgressLine.value -= enemy.damage;
    playerHpQuality.textContent -= enemy.damage;
    const newLog = document.createElement("p");
    newLog.className = 'log__styles';
    newLog.textContent = `${nicknameGlobal.textContent} attacked ${enemyName.textContent} to ${playerKickZone} and dealth ${player.damage} damage.`;
    document.querySelector('.log__information').appendChild(newLog);
    if (playerProgressLine.value <= 0) {
      finishPopup.style.display = 'flex';
      resultInfo.textContent = 'You lost ;(';
      losesCount.textContent = +(losesCount.textContent) + 1;
      localStorage.setItem('losesCount', losesCount.textContent);
    }
  } else if (playerProtectZone.includes(enemyKickZone) && playerProtectZone.length === 2) {
    const newLog = document.createElement("p");
    newLog.className = 'log__styles';
    newLog.textContent = `${nicknameGlobal.textContent} attacked ${enemyName.textContent} to ${playerKickZone}, but attack blocked.`;
    document.querySelector('.log__information').appendChild(newLog);
  }
}

function removeLogs() {
  const logs = document.querySelectorAll('.log__styles');
  logs.forEach(log => {
    log.remove();
  })
}

export const playerCharacters = {
  bruceLee: createHero({
    name: 'Bruce Lee',
    hp: 150,
    damage: 20,
    image: "images/brus_li2.jpg",
  }),
  juggernaut: createHero({
    name: 'Juggernaut',
    hp: 150,
    damage: 20,
    image: "images/jaga.jpg",
  }),
  leonardo: createHero({
    name: 'Leonardo',
    hp: 150,
    damage: 20,
    image: "images/leonardo.jpg",
  }),
  asterix: createHero({
    name: 'Asterix',
    hp: 150,
    damage: 20,
    image: "images/asterix.jpg",
  }),
};

finishPopup.addEventListener('click', () => {
  finishPopup.style.display = 'none';
  closeSections();
  homePage.style.display = 'flex';
})