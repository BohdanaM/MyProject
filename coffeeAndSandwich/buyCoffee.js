import Coffee from "./classes/coffee.js";
import Cafe from "./classes/cafe.js";
import { coffeeName } from "./classes/coffee.js";
import { sizeOfCup } from "./classes/coffee.js";

const coffeeInformation = new Coffee();
const cafeInformation = new Cafe();

const clientName = "Dana";

function buyCoffeeInCafe() {
  cafeInformation.showWelcomeMessage(clientName);
  coffeeInformation.showCupSizesAndTheirPrice();
  coffeeInformation.showCoffeeTypesAndIngredients();
  coffeeInformation.showCoffeeRecipeToClient(
    sizeOfCup.sizeS,
    coffeeName.americano
  );
  cafeInformation.showCoffeeOrderToClient(
    sizeOfCup.sizeS,
    coffeeName.americano
  );
  cafeInformation.getCoffeePriceOfOrder(sizeOfCup.sizeS, coffeeName.americano);
}

buyCoffeeInCafe();
