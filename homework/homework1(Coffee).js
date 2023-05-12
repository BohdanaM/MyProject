let coffeeName = {
  latte: "latte coffee",
  americano: "americano coffee",
};

let drink = {
  water: "hot water",
  milk: "almond milk",
};

let sizeOfCup = {
  sizeS: "small",
  sizeM: "medium",
  sizeL: "big",
};

let priceOfCoffee = {
  priceS: 3,
  priceM: 5,
  priceL: 7,
};

function showWelcomeMessage() {
  console.log("Welcome to our cafe!");
  console.log("Please choose the size:\n");
}

function showCupSizesAndTheirPrice() {
  let cupList = [
    [sizeOfCup.sizeS, priceOfCoffee.priceS],
    [sizeOfCup.sizeM, priceOfCoffee.priceM],
    [sizeOfCup.sizeL, priceOfCoffee.priceL],
  ];

  for (let i in cupList) {
    console.log(cupList[i][0] + " - " + cupList[i][1] + "$");
  }
}

function showCoffeeTypesAndIngredients() {
  let coffeeBeans = {
    arabica: "arabica beans",
    robusta: "robusta beans",
  };
  let latteIngredients = `${coffeeName.latte}:\n 10g of ${coffeeBeans.arabica} \n ${drink.water} \n ${drink.milk} \n `;
  let americanoIngredients = `${coffeeName.americano}:\n 10g of ${coffeeBeans.robusta} \n ${drink.water} \n `;

  console.log("\n We have following coffee: \n");

  let ingredientsOfCoffee = [latteIngredients, americanoIngredients];

  for (let i in ingredientsOfCoffee) {
    console.log(ingredientsOfCoffee[i]);
  }
}

function getTypeOfCoffee(typeOfCoffee) {
  typeOfCoffee == coffeeName.latte
    ? console.log(coffeeName.latte)
    : console.log(coffeeName.americano);
}

function getCoffeePrice(cupSize) {
  return cupSize == sizeOfCup.sizeS
    ? (price = priceOfCoffee.priceS)
    : cupSize == sizeOfCup.sizeM
    ? (price = priceOfCoffee.priceM)
    : (price = priceOfCoffee.priceL);

  // if (cupSize == sizeOfCup.sizeS) {
  //   return (price = priceOfCoffee.priceS);
  // } else if (cupSize == sizeOfCup.sizeM) {
  //   return (price = priceOfCoffee.priceM);
  // } else if (cupSize == sizeOfCup.sizeL) {
  //   return (price = priceOfCoffee.priceL);
  // }
}

function showRecipeToClient(cupSize, typeOfCoffee) {
  let totalPrice = getCoffeePrice(cupSize);
  let clientOrder = `You chosed a ${cupSize} of ${typeOfCoffee} \n Follow the steps:`;
  let step1 = `Take a ${cupSize} cup`;
  let step2 = `Put 1 spoon of coffee to it`;
  let step3 = `Add ${drink.water} to the cup with coffee`;
  let step4 = `Add ${drink.milk} to the cup with coffee`;
  let step5 = `Stir coffee in the cup`;
  let orderPrice = `The order price is ${totalPrice}$`;
  let result = `Enjoy your ${typeOfCoffee}!`;

  // Recipe
  let recipe = [step1, step2, step3, step4, step5];
  let clientrecipe = "";

  // Delete step with milk for americano coffee
  for (let i in recipe) {
    if (typeOfCoffee == coffeeName.americano && recipe[i] == step4) continue;
    clientrecipe += recipe[i] + "\n";
  }
  return clientOrder + "\n" + clientrecipe + "\n" + orderPrice + "\n" + result;
}

showWelcomeMessage();
showCupSizesAndTheirPrice();
showCoffeeTypesAndIngredients();
getTypeOfCoffee(coffeeName.americano);
console.log(getCoffeePrice(sizeOfCup.sizeL));
console.log(showRecipeToClient(sizeOfCup.sizeL, coffeeName.americano));
