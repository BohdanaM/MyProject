import Animal from "./animalClass.js";

export default class Mammals extends Animal {
  constructor(name, eyes, skin, legs, lungs) {
    super(name, eyes);
    this.skin = skin;
    this.legs = legs;
    this.lungs = lungs;
  }

  canBreed(children) {
    console.log(`This animal can breed ${children}.`);
  }

  childrenCanEat(food) {
    console.log(`The animal's children can eat ${food}.`);
  }

  canBreath() {
    console.log(`This animal can breath ${this.lungs} lungs.`);
  }

  showBodyParts() {
    console.log(
      `${this.name} has ${this.eyes} eyes ,${this.skin} ,${this.legs} legs, and ${this.lungs} lungs.`
    );
  }
}

// let mammal1 = new Mammals('cat', 'green', 'fur',4 , 2);

//  console.log(mammal1.getName());
//  console.log(mammal1.getEyes());
//  mammal1.canEat();
//  mammal1.canBreed('kittens');
//  mammal1.childrenCanEat('milk');
//  mammal1.canBreath();
//  mammal1.showBodyParts();
