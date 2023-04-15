import Coffee from "./coffee.js";
import { priceOfCoffee } from "./coffee.js";
import { sizeOfCup } from "./coffee.js";
import { topping } from "./sandwich.js";
import { priceOfSandwich } from "./sandwich.js";

export default class Cafe extends Coffee {
  getNameOfClient(name) {
    return name;
  }

  showWelcomeMessage(name) {
    let clientName = this.getNameOfClient(name);
    console.log(`Welcome to our cafe ${clientName}!`);
  }

  showCoffeeOrderToClient(cupSize, typeOfCoffee) {
    console.log(
      `Your order is a ${cupSize} size of ${typeOfCoffee} is ready \n`
    );
  }

  getCoffeePrice(cupSize) {
    let price;
    return cupSize == sizeOfCup.sizeS
      ? (price = priceOfCoffee.priceS)
      : cupSize == sizeOfCup.sizeM
      ? (price = priceOfCoffee.priceM)
      : (price = priceOfCoffee.priceL);
  }

  getCoffeePriceOfOrder(cupSize, typeOfCoffee) {
    let totalPrice = this.getCoffeePrice(cupSize);
    let orderPrice = `The order price is ${totalPrice}$`;
    let result = `Enjoy your ${typeOfCoffee}!`;

    console.log(orderPrice + "\n" + result);
    return orderPrice + "\n" + result;
  }

  getSandwichPrice(toppingType) {
    let price;
    return toppingType == topping.bacon
      ? (price = priceOfSandwich.priceWithBacon)
      : (price = priceOfSandwich.priceWithSalmon);
  }

  showSandwichOrderToClient(typeOfSandwiches) {
    console.log(`Your order is a ${typeOfSandwiches} is ready \n`);
  }

  getSandwichPriceOfOrder(toppingType, typeOfSandwiches) {
    let totalPrice = this.getSandwichPrice(toppingType);
    let orderPrice = `The order price is ${totalPrice}$`;
    let result = `Enjoy your ${typeOfSandwiches}!`;

    console.log(orderPrice + "\n" + result);
    return orderPrice + "\n" + result;
  }
}
