export default class Animal {
  constructor(name, eyes) {
    this.name = name;
    this.eyes = eyes;
  }

  getName() {
    console.log(`The name of the animal is ${this.name}.`);
  }

  getEyes() {
    console.log(`The color of the animal eyes is ${this.eyes}.`);
  }

  canEat() {
    console.log(`This animal can eat.`);
  }

  canBreed() {
    console.log(`This animal can breed.`);
  }

  canBreath() {
    console.log(`This animal can breath.`);
  }
}

// Making object with the help of the constructor
// let animal1 = new Animal('tiger', 'yellow');

// console.log(animal1.getName());
// console.log(animal1.getEyes());
// animal1.canEat();
// animal1.canBreed();
// animal1.canBreath();
