export let coffeeName = {
  latte: "latte coffee",
  americano: "americano coffee",
};

export let drink = {
  water: "hot water",
  milk: "almond milk",
};

export let sizeOfCup = {
  sizeS: "small",
  sizeM: "medium",
  sizeL: "big",
};

export let priceOfCoffee = {
  priceS: 3,
  priceM: 5,
  priceL: 7,
};

export default class Coffee {
  getTypeOfCoffee(typeOfCoffee) {
    typeOfCoffee == coffeeName.latte
      ? console.log(coffeeName.latte)
      : console.log(coffeeName.americano);
  }

  showCupSizesAndTheirPrice() {
    console.log("Please choose the size:\n");
    let cupList = [
      [sizeOfCup.sizeS, priceOfCoffee.priceS],
      [sizeOfCup.sizeM, priceOfCoffee.priceM],
      [sizeOfCup.sizeL, priceOfCoffee.priceL],
    ];

    for (let i in cupList) {
      console.log(cupList[i][0] + " - " + cupList[i][1] + "$");
    }
  }

  showCoffeeTypesAndIngredients() {
    let coffeeBeans = {
      arabica: "arabica beans",
      robusta: "robusta beans",
    };
    let latteIngredients = `${coffeeName.latte}:\n 10g of ${coffeeBeans.arabica} \n ${drink.water} \n ${drink.milk} \n `;
    let americanoIngredients = `${coffeeName.americano}:\n 10g of ${coffeeBeans.robusta} \n ${drink.water} \n `;

    console.log("\nWe have following coffee: \n");

    let ingredientsOfCoffee = [latteIngredients, americanoIngredients];

    for (let i in ingredientsOfCoffee) {
      console.log(ingredientsOfCoffee[i]);
    }
  }

  showCoffeeRecipeToClient(cupSize, typeOfCoffee) {
    let clientOrder = `You chosed a ${cupSize} size of ${typeOfCoffee} \nFollow the steps:`;
    let step1 = `- Take a ${cupSize} cup`;
    let step2 = `- Put 1 spoon of coffee to it`;
    let step3 = `- Add ${drink.water} to the cup with coffee`;
    let step4 = `- Add ${drink.milk} to the cup with coffee`;
    let step5 = `- Stir coffee in the cup`;

    // Recipe
    let recipe = [step1, step2, step3, step4, step5];
    let clientrecipe = "";

    // Delete step with milk for americano coffee
    for (let i in recipe) {
      if (typeOfCoffee == coffeeName.americano && recipe[i] == step4) continue;
      clientrecipe += recipe[i] + "\n";
    }
    console.log(clientOrder + "\n" + clientrecipe + "\n");
    return clientOrder + "\n" + clientrecipe + "\n";
  }
}
