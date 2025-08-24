export function createHero({ name, hp, damage, image }) {
  return {
    name,
    hp,
    damage,
    image,
    greet() {
      console.log('Hello');
    },
  };
}