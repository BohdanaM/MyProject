let sandwichesName = {
  baconSandwich: "sandwich with bacon",
  salmonSandwich: "sandwich with salmon",
};

let bread = {
  black: "slice of black bread",
  white: "slice of white bread",
};

let topping = {
  bacon: "bacon",
  salmon: "salmon",
  tomato: "tomato",
  cheese: "cheese",
};

let priceOfSandwich = {
  priceWithBacon: 5,
  priceWithSalmon: 7,
};

function showWelcomeMessage() {
  console.log("Welcome to our cafe!");
  console.log("Please choose the bread and topping:\n");
}

function showsToppingAndTheirPrice() {
  let toppingList = [
    [topping.bacon, priceOfSandwich.priceWithBacon],
    [topping.salmon, priceOfSandwich.priceWithSalmon],
  ];

  for (let i in toppingList) {
    console.log(toppingList[i][0] + " - " + toppingList[i][1] + "$");
  }
}

function showSandwichTypesAndIngredients() {
  let sandwichWithBaconIngredients = `${sandwichesName.baconSandwich}: \n ${bread.white} \n 10g of ${topping.bacon} \n 1 slice of ${topping.tomato} \n 1 slice of ${topping.cheese} \n`;
  let sandwichWithSalmonIngredients = `${sandwichesName.salmonSandwich}:\n ${bread.black}\n 10g of ${topping.salmon} \n 1 slice of ${topping.tomato} \n`;

  console.log("\n We have following sandwiches: \n");

  let ingredientsOfSandwich = [
    sandwichWithBaconIngredients,
    sandwichWithSalmonIngredients,
  ];

  for (let i in ingredientsOfSandwich) {
    console.log(ingredientsOfSandwich[i]);
  }
}

function getTypeOfSandwich(typeOfSandwich) {
  typeOfSandwich == sandwichesName.baconSandwich
    ? console.log(sandwichesName.baconSandwich)
    : console.log(sandwichesName.salmonSandwich);
}

function getSandwichPrice(toppingType) {
  return toppingType == topping.bacon
    ? (price = priceOfSandwich.priceWithBacon)
    : (price = priceOfSandwich.priceWithSalmon);
  //   if (toppingType == topping.bacon) {
  //     return (price = priceOfSandwich.priceWithBacon);
  //   } else if (toppingType == topping.salmon) {
  //     return (price = priceOfSandwich.priceWithSalmon);
  //   }
}

function showRecipeToClient(toppingType, typeOfSandwiches) {
  let totalPrice = getSandwichPrice(toppingType);
  let clientOrder = `You chosed a ${typeOfSandwiches} \n Follow the steps:`;
  let step1 = `Take a slice of bread`;
  let step2 = `Put ${toppingType} to it`;
  let step3 = `Add ${topping.tomato} to the sandwich`;
  let step4 = `Add ${topping.cheese} to the sandwich`;

  let orderPrice = `The order price is ${totalPrice}$`;
  let result = `Enjoy your ${typeOfSandwiches}!`;

  // Recipe
  let recipe = [step1, step2, step3, step4];
  let clientrecipe = "";

  // Delete step with cheese for salmon sandwich
  for (let i in recipe) {
    if (toppingType == topping.salmon && recipe[i] == step4) continue;
    clientrecipe += recipe[i] + "\n";
  }
  return clientOrder + "\n" + clientrecipe + "\n" + orderPrice + "\n" + result;
}

showWelcomeMessage();
showsToppingAndTheirPrice();
showSandwichTypesAndIngredients();
getTypeOfSandwich(sandwichesName.salmonSandwich);
console.log(getSandwichPrice(topping.salmon));
console.log(showRecipeToClient(topping.salmon, sandwichesName.salmonSandwich));
