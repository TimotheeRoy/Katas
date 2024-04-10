// https://simcap.github.io/coffeemachine/

class Drinks {
    drinks = ["coffe", "tea", "chocolate"];
    sugars = [0, 1, 2];

    constructor(name, sugar, money) {
        (this.name = name), (this.sugar = sugar), (this.money = money);
    }

    getName() {
        return this.name;
    }

    isInputOk() {
        return {
            drinks: this.drinks.includes(this.name),
            sugars: this.sugars.includes(this.sugar),
        };
    }

    makeDrink() {
        if (this.isInputOk()["drinks"] && this.isInputOk()["sugars"]) {
            if (this.sugar !== 0) {
                return (
                    `Here is your ${this.name} with ${this.sugar} sugar` +
                    (this.sugar === 1 ? "" : "s") +
                    ` and a stick`
                );
            } else {
                return `Here is your ${this.name} with no sugar and therefore no stick`;
            }
        } else {
            return `There is a issue with the order, please check the message onto the machine`;
        }
    }
}

class DrinkMaker {
    prices = { coffe: 0.6, tea: 0.4, chocolate: 0.5 };

    constructor(drink, givenMoney) {
        this.drink = drink;
        this.givenMoney = givenMoney;
    }

    make() {
        if (this.prices[this.drink.getName()] <= this.givenMoney) {
            return this.drink.makeDrink();
        } else {
            return `${(
                this.prices[this.drink.getName()] - this.givenMoney
            ).toFixed(1)}€ is missing`;
        }
    }
}

const coffe = new Drinks("coffe", 0);
const drinkMaker = new DrinkMaker(coffe, 0.5);
console.log(drinkMaker.make());

module.exports = { Drinks, DrinkMaker };
