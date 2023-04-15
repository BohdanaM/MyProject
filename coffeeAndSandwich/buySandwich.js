import Sandwich from "./classes/sandwich.js";
import Cafe from "./classes/cafe.js";
import { topping } from "./classes/sandwich.js";
import { sandwichesName } from "./classes/sandwich.js";

const sandwichInformation = new Sandwich();
const cafeInformation = new Cafe();

const clientName = "Dana";

function buySandwichInCafe() {
  cafeInformation.showWelcomeMessage(clientName);
  sandwichInformation.showsToppingAndTheirPrice();
  sandwichInformation.showSandwichTypesAndIngredients();
  sandwichInformation.showSandwichRecipeToClient(
    topping.salmon,
    sandwichesName.salmonSandwich
  );
  cafeInformation.showSandwichOrderToClient(sandwichesName.salmonSandwich);
  cafeInformation.getSandwichPriceOfOrder(
    topping.salmon,
    sandwichesName.salmonSandwich
  );
}

buySandwichInCafe();
