export let sandwichesName = {
  baconSandwich: "sandwich with bacon",
  salmonSandwich: "sandwich with salmon",
};

export let bread = {
  black: "slice of black bread",
  white: "slice of white bread",
};

export let topping = {
  bacon: "bacon",
  salmon: "salmon",
  tomato: "tomato",
  cheese: "cheese",
};

export let priceOfSandwich = {
  priceWithBacon: 5,
  priceWithSalmon: 7,
};

export default class Sandwich {
  showsToppingAndTheirPrice() {
    console.log("Please choose the topping:\n");
    let toppingList = [
      [topping.bacon, priceOfSandwich.priceWithBacon],
      [topping.salmon, priceOfSandwich.priceWithSalmon],
    ];

    for (let i in toppingList) {
      console.log(toppingList[i][0] + " - " + toppingList[i][1] + "$");
    }
  }

  showSandwichTypesAndIngredients() {
    let sandwichWithBaconIngredients = `${sandwichesName.baconSandwich}: \n ${bread.white} \n 10g of ${topping.bacon} \n 1 slice of ${topping.tomato} \n 1 slice of ${topping.cheese} \n`;
    let sandwichWithSalmonIngredients = `${sandwichesName.salmonSandwich}:\n ${bread.black}\n 10g of ${topping.salmon} \n 1 slice of ${topping.tomato} \n`;

    console.log("\nWe have following sandwiches: \n");

    let ingredientsOfSandwich = [
      sandwichWithBaconIngredients,
      sandwichWithSalmonIngredients,
    ];

    for (let i in ingredientsOfSandwich) {
      console.log(ingredientsOfSandwich[i]);
    }
  }

  getTypeOfSandwich(typeOfSandwich) {
    typeOfSandwich == sandwichesName.baconSandwich
      ? console.log(sandwichesName.baconSandwich)
      : console.log(sandwichesName.salmonSandwich);
  }

  showSandwichRecipeToClient(toppingType, typeOfSandwiches) {
    let clientOrder = `You chosed a ${typeOfSandwiches} \nFollow the steps:`;
    let step1 = `- Take a slice of bread`;
    let step2 = `- Put ${toppingType} to it`;
    let step3 = `- Add ${topping.tomato} to the sandwich`;
    let step4 = `- Add ${topping.cheese} to the sandwich`;

    // Recipe
    let recipe = [step1, step2, step3, step4];
    let clientrecipe = "";

    // Delete step with cheese for salmon sandwich
    for (let i in recipe) {
      if (toppingType == topping.salmon && recipe[i] == step4) continue;
      clientrecipe += recipe[i] + "\n";
    }
    console.log(clientOrder + "\n" + clientrecipe + "\n");
    return clientOrder + "\n" + clientrecipe + "\n";
  }
}
