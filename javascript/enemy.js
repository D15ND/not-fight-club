import { createHero } from './create-hero.js';
import { setEnemyHero } from './heroes-data.js';

const enemyName = document.querySelectorAll('.enemy__name');
const enemyHP = document.querySelector('.health__quality-enemy');
const enemyHPProgressLine = document.querySelector('.health__enemy');
const enemyAvatar = document.querySelector('.enemy__avatar');
const fightPageOpenButton = document.querySelector('.fight__button');

const enemyCharacters = [
  createHero({
    name: 'Ork',
    hp: 200,
    damage: 30,
    image: "images/enemy_1.jpg",
  }),
  createHero({
    name: 'Doc Ock',
    hp: 150,
    damage: 20,
    image: "images/enemy_2.jpg",
  }),
  createHero({
    name: 'Green Goblin',
    hp: 180,
    damage: 25,
    image: "images/enemy_3.jpg",
  }),
];

export function randomEnemyData() {
  const randomIndex = Math.floor(Math.random() * enemyCharacters.length);
  const enemy = enemyCharacters[randomIndex];

  enemy.hp = enemy.maxHp;
  setEnemyHero(enemy);

  enemyName.forEach((name) => {
    name.textContent = enemy.name;
  });

  enemyHP.textContent = enemy.hp;
  enemyHPProgressLine.value = enemy.hp;
  enemyHPProgressLine.max = enemy.hp;
  enemyAvatar.src = enemy.image;
}