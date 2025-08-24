export function createHero({ name, hp, damage, image }) {
  return {
    name,
    hp,
    maxHp: hp,
    damage,
    image,
    greet() {
      console.log('Hello');
    },
  };
}