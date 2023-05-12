import Mammals from "./mammalsClass.js";

export default class Wild extends Mammals {
  constructor(name, eyes, skin, legs, lungs, claws, fang) {
    super(name, eyes, skin, legs, lungs);
    this.claws = claws;
    this.fang = fang;
  }

  canEat(food) {
    console.log(`This animal can eat ${food}.`);
  }

  canBite() {
    console.log(`This animal can bite ${this.fang}.`);
  }

  showBodyParts() {
    console.log(
      `${this.name} has ${this.eyes} eyes,${this.skin},${this.legs} legs,${this.lungs} lungs,${this.claws} claws,${this.fang}.`
    );
  }
}

// let wild1 = new Wild('leo', 'brown', 'fur', 4, 2, 'sharp', 'fang');

// console.log(wild1.getName());
// console.log(wild1.getEyes());
// wild1.canEat('meat');
// wild1.canBreed('leos');
// wild1.childrenCanEat('milk');
// wild1.canBite();
// wild1.canBreath();
// wild1.showBodyParts();
