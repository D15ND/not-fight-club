import { playerCharacters } from './fight.js';

let playerHero = playerCharacters.bruceLee;
let enemyHero = null;

export const setPlayerHero = (hero) => {
  playerHero = hero;
};
export const setEnemyHero = (hero) => {
  enemyHero = hero;
};

export const getPlayerHero = () => playerHero;
export const getEnemyHero = () => enemyHero;
