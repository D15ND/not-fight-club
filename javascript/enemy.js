const enemyName = document.querySelectorAll('.enemy__name');
const enemyHP = document.querySelector('.health__quality-enemy');
const enemyHPProgressLine = document.querySelector('.health__enemy');
const enemyAvatar = document.querySelector('.enemy__avatar');
const fightPageOpenButton = document.querySelector('.fight__button');

let arrListEnemy = [
  { name: "Doc Ock", hp: "150", damage: "20", url: "./images/enemy_2.jpg" },
  { name: "Green Goblin", hp: "180", damage: "25", url: "./images/enemy_3.jpg" },
  { name: 'Ork', hp: '200', damage: '30', url: "./images/enemy_1.jpg" }
];

function randomEnemyDates() {
  let randomChoose = Math.floor(Math.random() * arrListEnemy.length);
  enemyName.forEach(name => {
    name.textContent = arrListEnemy[randomChoose].name;
  })
  enemyHP.textContent = arrListEnemy[randomChoose].hp;
  enemyHPProgressLine.value = arrListEnemy[randomChoose].hp;
  enemyHPProgressLine.max = arrListEnemy[randomChoose].hp;
  enemyAvatar.src = arrListEnemy[randomChoose].url;
}
randomEnemyDates();

fightPageOpenButton.addEventListener('click', () => {
  randomEnemyDates();
})