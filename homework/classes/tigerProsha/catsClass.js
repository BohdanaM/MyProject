import Wild from "./wildClass.js";

export default class Cats extends Wild {
  constructor(name, eyes, skin, legs, lungs, claws, fang, roar) {
    super(name, eyes, skin, legs, lungs, claws, fang);
    this.roar = roar;
  }

  canRoar() {
    console.log(`This animal can ${this.roar}`);
  }
}

// let cats1 = new Cats('puma', 'black', 'fur', 4, 2, 'sharp', 'fang', 'meow');

// console.log(cats1.getName());
// console.log(cats1.getEyes());
// cats1.canEat('meat');
// cats1.canBreed('pumas');
// cats1.childrenCanEat('milk');
// cats1.canBite();
// cats1.canBreath();
// cats1.canRoar();
// cats1.showBodyParts();
